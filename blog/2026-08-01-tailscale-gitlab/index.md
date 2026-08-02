---
title: "Tailnet-scoped access instead of a VPN client for every collaborator"
authors: [roxy]
tags: [infrastructure, security, networking]
---

Self-hosted GitLab, and a few other internal services, run on a client's
Ubuntu VPS behind Tailscale rather than a public IP with a firewall
allowlist. The reasoning isn't "Tailscale is trendy" — it's that
tag-based ACLs let me grant one external collaborator exactly the access
they need without touching a shared credential or opening a port to the
internet.

<!-- truncate -->

## The problem with a shared VPN credential

The naive version of "let a contractor reach an internal service" is a
shared VPN config or a port opened to their IP. Both have the same flaw:
the access grant isn't tied to a specific identity, so revoking it later
means rotating a shared secret (and hoping nobody else was using it) or
remembering to close a firewall rule you may not recall opening.

## Tag-scoped ACLs instead

Tailscale's ACL model lets you tag both devices and the policy rules that
reference them. The VPS itself is tagged as a server node, owned by the
admin group. A collaborator's device gets its own tag, scoped to exactly
one rule: SSH only, to that one server tag, landing as an unprivileged
Linux user with no sudo. Provisioning that access is a single-use,
non-ephemeral auth key pre-tagged for that collaborator — they run one
command to join the tailnet, and from that point their access is exactly
as wide as their tag's rule and no wider. Revoking it later is deleting
one tag assignment, not rotating a shared secret everyone else also
depends on.

The same model extends to services on the box that shouldn't be reachable
even from the tailnet's other members by default — a local model-serving
process, for instance, gets bound to `127.0.0.1` only rather than `0.0.0.0`,
so it's not exposed even to other tailnet devices unless something
explicitly proxies it. "Internal" is enforced at the bind address, not
just at the network boundary.

## The same pattern shows up outside SSH

I've applied the identical principle to a media ingest service for the
same client: an RTMP publish endpoint that only accepts connections
addressed to the VPS's Tailscale IP, with the ingest software additionally
configured to reject any publish attempt from outside the Tailscale CGNAT
range (`100.64.0.0/10`) even if it somehow reached the process. Publisher
credentials live in a root-owned, mode-600, uncommitted environment file.
It's the same shape as the GitLab access grant: restrict at the network
layer first, restrict again inside the application, and never rely on
"nobody knows the URL" as the actual control.

## Outcome

Access to internal services is per-identity and revocable without
touching anyone else's credentials, nothing sensitive is reachable from
the open internet, and every exposure — SSH, GitLab, the ingest
endpoint — is enforced at two independent layers rather than one.
