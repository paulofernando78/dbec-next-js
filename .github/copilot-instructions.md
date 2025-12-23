## Repo Overview

This repository is a Next.js (v16) App Router site using MDX for editorial content and a compact component system.

- Quick commands: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- Warning: `npm run deploy` runs `git add . && git commit -m "wip" && git push` — do not run in CI/PR flows.

## Big Picture

- Layout & providers: the global layout and providers live in `src/app/layout.js` (fonts via `next/font`, `ThemeProvider` and `HeaderProvider`).
- Content vs routes: editorial MDX/JSX lives under `src/content/*`. Route handlers live under `src/app/*` and commonly import content from `src/content` (example: `src/content/grammar/word-formation.jsx` paired with `src/app/grammar/[slug]/page.jsx`).
- Component system: UI components are in `src/components` split into `atoms/`, `molecules/`, `organisms/`. Prefer reuse and small focused components.

## Useful Files to Inspect

- `src/app/layout.js` — global layout, fonts, and providers.
- `next.config.mjs` — MDX integration via `@next/mdx` and `pageExtensions`.
- `mdx-components.js` — MDX element → React component mappings used by content.
- `src/context/headerContext.js` and `src/context/themeContext.js` — global app contexts.
- `public/audio/` and `public/data/dictionary/` — static assets used by pages and lookup features.

## Conventions & Patterns

- Content-first routing: create `src/content/<section>/<slug>.jsx` and mirror or import into `src/app/<section>/[slug]/page.jsx`.
- Use path aliases from `jsconfig.json` (`@/` → `src/`) for imports: `import X from '@/components/organisms/X'`.
- Reuse `AudioPlayer` and `Audio` under `src/components/atoms` for audio playback features.
- Styling: global CSS in `src/app/globals.css`; shared utilities live in `src/css/*.css`.

## Workflows & Commands

- Dev server:

```bash
npm run dev
```

- Production preview:

```bash
npm run build
npm run start
```

- Linting:

```bash
npm run lint
```

- There are no test scripts configured in `package.json`.

## Integration Points & Gotchas

- MDX config: changes to `next.config.mjs` can affect routing and page extensions — avoid edits without verification.
- Hydration/Fonts: `next/font` is used in `layout.js` and `suppressHydrationWarning` is present; be careful when moving client-side state into the layout.
- Public assets: files under `public/` are referenced by path (e.g., `/audio/...`) — ensure naming and paths match references.

## Agent Rules (practical)

1. Do not change `next.config.mjs` without confirmation.
2. Never run `npm run deploy` (it force-commits everything).
3. Prefer reusing components in `src/components/atoms|molecules|organisms`.
4. Use providers in `src/app/layout.js` instead of adding new global state patterns.
5. Run `npm run lint` and `npm run dev` locally to validate edits.

## PR Checklist (for edits)

- Add or update `src/content` and ensure a corresponding route exists under `src/app`.
- Reuse existing components where possible; add new ones under the appropriate folder.
- Run `npm run dev` and open the changed pages at `http://localhost:3000`.
- Run `npm run lint` and `npm run build` to catch issues early.

---
If you'd like, I can expand this with a concrete example showing a content file + route handler pair, or document how `mdx-components.js` maps MDX elements to React components.
