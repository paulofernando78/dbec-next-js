# Project Analysis

Date: 2026-03-13

## Overview

This project is a Next.js 16 app-router application centered around structured English-learning content. The repository is organized around reusable UI components and a large `src/content` tree for CEFR lessons, pronunciation, reference material, vocabulary, games, and student-specific material.

Main strengths:

- Clear domain-based route structure under `src/app`
- Consistent component hierarchy with atoms, molecules, and organisms
- A useful content-token abstraction in `src/helpers/content.js` and `src/components/molecules/ContentToken/ContentToken.jsx`

## Confirmed Issues

### 1. CEFR static params are generated incorrectly

File: `src/app/cefr/[level]/[slug]/page.jsx`

The route imports content from `@/content/cefr/${level}/${slug}.jsx`, but `generateStaticParams()` only reads the top-level `src/content/cefr` folder and returns `slug` without `level`.

Impact:

- Static generation for `/cefr/:level/:slug` is structurally wrong
- Nested lesson content under `a1`, `a2`, `b1`, and `b2` is not described correctly by the route

### 2. Navbar contains dead or inconsistent CEFR links

File: `src/components/organisms/Navbar/Navbar.jsx`

The navbar links to several A1 routes that do not currently have matching content files:

- `/cefr/a1/personal-information`
- `/cefr/a1/daily-routines`
- `/cefr/a1/places-objects`
- `/cefr/a1/audiobooks`

Observed content tree:

- `src/content/cefr/a1/introductions.jsx`
- `src/content/cefr/a1/audiobooks/list.jsx`

Impact:

- Users can navigate to pages that will fall into `notFound()`
- Route and content structure are currently out of sync

### 3. Audiobooks route points to a missing content root

File: `src/app/audiobooks/[slug]/page.jsx`

This route expects files under `src/content/audiobooks`, but that directory does not exist in the current repository.

Impact:

- The route is effectively broken in the current state

### 4. Build artifacts are committed and not ignored

Files:

- `.gitignore`
- `package.json`
- tracked `dist/` output

The repository currently tracks generated `dist/` files, but `.gitignore` does not ignore `dist/`. The `lint` script runs bare `eslint`, so ESLint walks generated output as well as source files.

Impact:

- Linting is noisy and slower than necessary
- Generated files are mixed into source control
- Tooling signals are harder to trust

### 5. Content helper and renderer use mismatched token names

Files:

- `src/helpers/content.js`
- `src/components/molecules/ContentToken/ContentToken.jsx`

The helper emits `type: "bold-portuguese"` for `portugueseTerm`, while the renderer only handles `type: "portuguese-bold"`.

Impact:

- Any content using `portugueseTerm` will not render with the intended formatting

### 6. Placeholder content remains in user-facing areas

Examples:

- `src/components/organisms/Navbar/Navbar.jsx`
- `src/content/games/blank.jsx`
- `src/content/cefr/b2/future-perfect.jsx`
- `src/content/reference/simple-present.jsx`
- `README.md`

There are still placeholder values such as `...`, blank template sections, and the default scaffold-style README.

Impact:

- The app appears partially finished
- It is difficult to tell which sections are production-ready

## Additional Notes

### Theme handling

File: `src/context/themeContext.js`

Theme state is applied on mount via `localStorage` and direct `document.documentElement.classList` manipulation. This is workable, but it is hand-rolled and should be kept consistent with hydration behavior.

### Media query hook

File: `src/hooks/useMediaQuery.js`

The hook initializes with `false` and then updates asynchronously via `setTimeout`. It works, but it introduces extra state transitions that may not be necessary.

### Audio component

File: `src/components/atoms/Audio/Audio.jsx`

The global audio lock behavior is reasonable for a learning app, but the component still logs load failures with `console.log`, which is not ideal for production diagnostics.

## Verification Performed

- Inspected repository structure, route files, core config, contexts, and selected content files
- Ran `npm run lint`
- Started `npm run build`

Notes:

- `npm run lint` did not provide a clean source-only signal because generated `dist/` output is included
- `npm run build` started successfully, but full completion was not confirmed within the sandbox observation window
- No automated tests are configured in `package.json`

## Recommended Next Steps

1. Fix `generateStaticParams()` for the CEFR route so it returns both `level` and `slug` from the nested content tree.
2. Align navbar links with real content files, or create the missing lesson files.
3. Remove or replace the broken audiobooks route, or restore the expected content structure.
4. Ignore and remove tracked build artifacts such as `dist/`.
5. Fix the `bold-portuguese` vs `portuguese-bold` token mismatch.
6. Replace placeholder content in visible routes and content files.
7. Replace the default README with project-specific documentation.
