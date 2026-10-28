# Matthew Valdez (Roxy) — professional portfolio

Docusaurus portfolio for security projects, operations experience, and technical writeups.

## Local development

Use a Node version compatible with the installed Docusaurus release (Node 22 is used in CI).

```sh
npm ci
npm run typecheck
npm run build
npm run serve
```

## Editing

- `src/data/resume.ts`: work history, credentials, and selected projects.
- `src/pages/index.tsx`: page structure and introduction.
- `src/pages/index.module.css`: responsive page styles.
- `blog/`: technical writeups, served under `/writeups`.

Preserve the distinction between demonstrated behavior, research goals, and future work.
Keep certification expiration separate from degree graduation dates. Verify dates and metrics before changing them.
The public site intentionally does not expose a phone number or teammate identities.

## Validation and deployment

Pull requests run type checking and a production build. Merges to `main` build and publish
to `gh-pages` using the existing deployment approach. Pages must be configured to serve
the root of `gh-pages`; inspect repository Settings → Pages if deployment succeeds but the site does not update.

Before merging: check desktop and mobile layout, keyboard focus, project links, credential
status, and the expected ASU graduation (May 2028). Confirm factual changes with the owner.

License: see `LICENSE`.
