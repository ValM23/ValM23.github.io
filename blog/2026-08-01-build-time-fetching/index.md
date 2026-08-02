---
title: "Killing a rate-limit bug by moving an API call from the browser to the build"
authors: [roxy]
tags: [infrastructure, ci-cd, javascript]
---

A client's "Projects" page pulled repo data live from the GitHub API,
client-side, on every page load — no auth token, since it was running in
the visitor's browser. That's a 60 requests/hour cap shared across
*every* visitor on the same IP or NAT block. Anyone behind a shared IP —
an office, a university, a CGNAT ISP — could land on the page with the
quota already burned by someone else and get a silent empty grid.

<!-- truncate -->

## The failure was invisible by design

The original `fetch().catch()` swallowed the error and just stopped
loading, with no distinct state for "the API said no" versus "still
loading." On a fast connection those two states are nearly
indistinguishable to a visitor, which is exactly why nobody had noticed it
in testing — testing tends to happen from an IP that hasn't hit the cap.

First pass at a fix added a real error state: check `res.ok` before
treating the response as data (GitHub returns a JSON object, not an array,
on a 403 — treating it as a list without checking status first throws
somewhere unrelated and is confusing to debug), and render something
distinct from "loading" when it fails, including a manual fallback link to
the GitHub org page. That's the honest floor for handling any external API
call from the client — but it doesn't fix the actual cap, it just fails
more legibly.

## Moving the fetch to publish time

The real fix was removing the client-side call entirely. A small Node
script runs once per deploy, during CI, and fetches each repo's README
using `GITHUB_TOKEN` — which raises the same endpoint's limit from 60/hour
to 5,000/hour, and more importantly means the *build* eats one fetch per
repo, once, rather than every visitor eating one fetch per page load.
Results get reduced to a short plain-text snippet (strip code fences, HTML,
image/badge markdown, list bullets; keep the first real paragraph, cut it
to length on a sentence boundary where possible) and written to a static
JSON file that ships in the bundle. Visitors read a JSON file, not an API.

Two things made this safe to run unattended in CI rather than just
locally:

- If a given repo's fetch fails, the script merges its output over the
  **previous** committed snapshot rather than overwriting it — one flaky
  network call during a deploy shouldn't blank out a working page.
- If every fetch fails, it exits without writing anything at all, so a
  bad CI run can't silently ship an emptied data file.

## Outcome

Visitors now make zero calls to the GitHub API. The one place that still
could hit a rate limit — the build itself — runs authenticated, on a
schedule I control, with a script that degrades to "keep the last good
data" instead of "show nothing," which is the actual failure mode that
matters for anyone landing on the page from a shared IP.
