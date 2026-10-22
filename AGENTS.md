# Repository Guidelines

## Project Structure & Module Organization

This portfolio uses React 17, Create React App 4, React Router 5, and SCSS. `src/App.js` defines the `/`, `/projects`, and `/about` routes. Reusable UI lives in `src/components/`; route views and portfolio data live in `src/pages/`. Imported images and SVGs belong in `src/assets/`; Firebase helpers live in `src/firebase/`.

`public/` contains static files. Standalone client previews use `public/previews/<project>/index.html` with relative asset links. Production output goes to `build/`, which Firebase Hosting serves through `firebase.json`.

## Build, Test, and Development Commands

- `yarn install`: install project dependencies.
- `yarn start`: launch the development server at `http://localhost:3000`.
- `yarn build`: generate the production bundle in `build/`.
- `yarn test`: run Jest in interactive watch mode.
- `yarn test --watchAll=false`: run tests once.
- `yarn test --watchAll=false --coverage`: collect coverage.
- `firebase emulators:start --only hosting`: inspect the built site locally.

The documented macOS build requires Intel (x64) Node 16 and a matching Node Sass 6 binary; native Apple Silicon Node is unsupported by this Sass version. See `README.md` for the existing workaround. Avoid dependency upgrades or ejecting CRA as incidental fixes.

## Coding Style & Naming Conventions

Follow nearby formatting; existing indentation mixes tabs and spaces. Prefer two spaces for new JavaScript and SCSS, single quotes, PascalCase component names, and camelCase variables. Use kebab-case directories with `<name>.component.js`, `<name>.styles.scss`, and `<name>.data.js` where applicable. Keep styles beside components.

ESLint extends `react-app`; no dedicated lint script or Prettier configuration exists. Avoid unrelated formatting changes.

## Testing Guidelines

Tests use Jest, React Testing Library, and jest-dom configured in `src/setupTests.js`. Name tests `*.test.js` beside relevant code. No coverage threshold is configured. The existing `src/App.test.js` still asserts CRA starter content; update it when addressing app tests and provide router context for routed components.

For visual changes, inspect desktop and mobile layouts, navigation, and preview assets.

## Commit & Pull Request Guidelines

History uses short descriptive subjects such as “Removed links”; no enforced commit prefix is evident. Keep changes focused. PRs should describe behavior, link relevant issues, report verification, and include screenshots for visual changes.

Check `git status --short` before editing. Preserve unrelated work and stay on the current branch. Commit, push, or deploy only when explicitly requested.

## Security & Configuration

Never commit credentials or private documents. Preview URLs are public; indexing controls do not restrict access. Exclude proposal PDFs and internal files from previews.
