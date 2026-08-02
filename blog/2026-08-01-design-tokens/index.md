---
title: "A design-token file that stays in sync by being overwritten, not merged"
authors: [roxy]
tags: [infrastructure, css, frontend]
---

A client I do infrastructure and security work for runs a handful of
separate properties — a marketing site, an internal operator tool, a
terminal-based interface — that all needed to look like the same brand
without becoming the same codebase. The usual failure mode here is drift:
someone tweaks a color on one property, nobody updates the other three,
and six months later "brand purple" means four slightly different hex
values depending on which app you're looking at.

<!-- truncate -->

## One file, no build step, no framework dependency

The fix predates anything I did — it's a single `tokens.css` file,
`:root`-scoped CSS custom properties, with no Sass, no JS-in-CSS, no
Tailwind config it depends on. That's deliberate: a plain CSS custom
property file can be dropped into *any* frontend — a Vite app, a
Docusaurus site, a terminal UI's stylesheet — and just work, because CSS
variable resolution happens at render time in the browser, not at build
time. There's nothing to compile, so there's nothing that can go stale
between "the token file" and "the built output."

The token set itself is narrow on purpose:

- A six-stop type scale, referenced by an opt-in class rather than applied
  globally, so components that need the scale can use it and everything
  else is unaffected.
- Three border-alpha tiers derived from a single "accent" variable using
  `color-mix()` — soft/normal/strong borders that are always the same
  color family as whatever accent a given page is themed around, without
  three separately maintained color values.
- A "glow budget" of exactly two shadow intensities, so glow effects don't
  end up bespoke-tuned per component.
- A shared set of motion easings, so a hover transition on the marketing
  site and a state change in the operator tool decelerate the same way.

## Re-syncing by overwrite, not by merge

The part I actually contributed was consuming this same file from a new
property — a documentation/portfolio site built later — without forking
it. Because every value in the file is either a literal or a
`color-mix()` expression referencing another variable *in the same file*,
it has no dependency on anything the consuming app defines. That means
keeping three properties in sync is just "copy this one file over the old
one" — no merge conflicts, no per-app variant to reconcile, because the
file was never allowed to grow app-specific branches in the first place.

The one adaptation needed per consumer was naming: the newest property's
existing CSS used different variable names for the same concepts
(`--bg-deep` vs. `--rv-bg-deep`, say). Rather than rename everything
site-wide, I added a thin alias layer — the token file's real names,
pointed at by whatever names the local codebase already used — so both
naming conventions resolve to the same underlying values. Substitution in
CSS custom properties resolves at the point of use, not at declaration
order, so the alias layer can sit anywhere relative to the import without
breaking anything.

## Outcome

Three frontends, one visual identity, one file that's the actual source
of truth rather than a starting point that immediately diverges. Updating
the brand's accent color going forward is a one-line change in one file,
copied into each property — not a design-review pass across three
separate codebases.
