## Repo Overview

This is a Next.js app (Next 16 + React 19) that uses the App Router and MDX-powered content.

- Key commands: `npm run dev` (local dev), `npm run build`, `npm run start`, `npm run lint`.
- Note: `npm run deploy` runs `git add . && git commit -m "wip" && git push` so treat it as a convenience script (it commits everything with message "wip").

## Architecture & Patterns

- App Router: top-level layout and pages live under `src/app` (see [src/app/layout.js](src/app/layout.js#L1)).
- Content: editorial content and MDX lives under `src/content` and routes map to `app/*` pages (example: grammar content in `src/content/grammar/word-formation.jsx` and route handler in `src/app/grammar/[slug]/page.jsx`).
- MDX: configured via `@next/mdx` in [next.config.mjs](next.config.mjs#L1-L20); page extensions include `mdx`.
- Component structure: `src/components` is organized as `atoms/`, `molecules/`, `organisms/` — prefer adding new UI pieces following this pattern.
- Aliases: path aliases are defined in [jsconfig.json](jsconfig.json#L1-L20) (`@/` → `src/`) — import using `@/components/...` or `@/hooks/...`.

## Data & Assets

- Static audio and images are under `public/` (e.g., `public/audio/`, `public/img/`); audio-driven pages reference these paths directly.
- Small JSON dictionaries are in `public/data/dictionary/` (per-letter files `a.json`, `b.json`...). Use these for offline/look-up features.

## Conventions for Contributors and AI Agents

- Page / content changes: update `src/content` (MDX/JSX) and ensure the corresponding route under `src/app` renders it. Example: to add a pronunciation page add a file under `src/content/pronunciation/` and a route under `src/app/pronunciation/[slug]/page.jsx`.
- Styling: uses CSS modules and global CSS in `src/app/globals.css`; follow existing naming and layout structure.
- Context/providers: theme and header state live in `src/context` and are wired in `src/app/layout.js` — prefer to use `ThemeProvider` and `HeaderProvider` instead of duplicating global state.
- Audio playback: components like `AudioPlayer`/`Audio` exist under `src/components/atoms` — reuse them for consistent UX and to avoid duplicating audio logic.

## Tooling & Developer Workflows

- Local dev: `npm run dev` (Next dev server). App is available at `http://localhost:3000` by default.
- Build: `npm run build` then `npm run start` for production preview.
- Lint: `npm run lint` (uses local `eslint` + `eslint-config-next`).
- No test runner configured: there are no `test` or `jest` scripts in `package.json`.

## What to prioritize when editing or creating code

- Keep routes under `src/app` aligned with `src/content`. If you add a content file, add or update the corresponding route entry.
- Reuse existing atoms/molecules/organisms. For UI changes, add new pieces in the appropriate subfolder.
- Use the path aliases from `jsconfig.json` for imports (avoid long relative imports).

## Quick examples

- Import a component using an alias: `import Header from '@/components/organisms/Header'` (see [src/app/layout.js](src/app/layout.js#L1-L30)).
- Find the grammar content example: [src/content/grammar/word-formation.jsx](src/content/grammar/word-formation.jsx#L1).

## Editing notes for AI agents

- Do not modify `next.config.mjs` without confirming MDX and `pageExtensions` needs — changes affect routing and build.
- Be conservative with dependencies: Next is pinned to `16.0.7` and React to `19.2.0` in `package.json`.
- The `deploy` script auto-commits; do not run it in PR workflows. Use a proper CI/CD flow for production deploys.

---
If anything here is unclear or you'd like more specific examples (e.g., where audio players are wired, how a particular MDX page renders), tell me which area to expand and I'll iterate.
