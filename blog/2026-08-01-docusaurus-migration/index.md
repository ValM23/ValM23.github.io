---
title: "Migrating a client site to Docusaurus without losing its design system"
authors: [roxy]
tags: [infrastructure, frontend, css]
---

I recently took a legacy single-page site — hand-rolled HTML/CSS, no build
step, no component reuse — and rebuilt it on Docusaurus for a small
streaming/media client. The brief was narrow: match the existing brand
exactly, get real routing and a blog out of it, and don't regress anything
a visitor would notice. That last part turned out to be the interesting
half of the job.

<!-- truncate -->

## Reusing an existing component library that assumed Tailwind

The client's design system — glass-panel surfaces, a shared color/motion
token file, a component CSS layer built on Tailwind's `@apply` — lived in a
separate Vite/React app. Docusaurus doesn't ship Tailwind, and the two
frameworks don't compose by default: Tailwind's own reset (`preflight`)
strips out a lot of what Infima (Docusaurus's base theme) already provides,
so turning it on naively broke navigation, buttons, and admonitions
site-wide within about five minutes of enabling it.

The fix was a plugin hook into Docusaurus's PostCSS pipeline
(`configurePostCss`) that runs Tailwind and Autoprefixer alongside the
existing pipeline, with `corePlugins: { preflight: false }` in the Tailwind
config so it only ever adds utility classes and never resets anything
Infima owns. That let the client's existing `@apply`-based stylesheet drop
in unmodified — no rewrite, no parallel maintenance of two versions of the
same component styles.

## The theming bug that isn't in the docs

Getting the color palette to match required overriding a long list of
Infima's CSS custom properties in `:root`. The build looked right in every
manual check — until I actually rendered it and sampled pixel colors: the
page body below the hero was Infima's stock dark grey, not the client's
near-black.

Infima re-declares its dark-mode variables scoped to `html[data-theme='dark']`,
not `:root`, and that selector outranks both `:root` and even a bare
`[data-theme='dark']` override — by CSS specificity, not by source order.
My first fix used the bare selector and *still* lost. It only worked once
I matched the `html` prefix exactly. Same story showed up twice more:
Infima's secondary button variant is scoped `.button.button--secondary`
(two class selectors), which beat my first override written as a single
class. Once I started reading the *compiled* CSS instead of guessing at
specificity, both fixes landed in one try instead of three.

Second lesson, smaller but worth writing down: the production CSS
minifier renames keyframes (`my-animation` becomes `a`) and compresses
hex colors into shorthand. A `grep` for my own animation name against the
built output came back empty and looked like the animation hadn't
shipped — it had, just under a different name. Verifying against rendered
output (a headless screenshot, pixel-sampled) rather than raw text search
caught that before it became a false "this is broken" report.

## Outcome

The rebuilt site ships the client's existing design tokens, fonts, and
component styles unmodified, gets Docusaurus's routing/blog/search for
free, and the two specificity bugs above are now things I check for by
default on any theme-override work rather than things I discover by
accident.
