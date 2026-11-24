# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Context

This is a personal learning sandbox for following the React tutorial at https://handsonreact.com/. It is not a production app. The user (francophone) reads `RESUME.md` before each session to recall previous progress; when asked to "update the summary", append a new dated entry at the bottom covering what changed since the previous entry (see the template at the end of that file).

## Commands

- `npm start` — serves the folder statically on http://localhost:5000 (`serve -s -p 5000`).
- There is no build, lint, or test setup (`npm test` is a placeholder that fails).

## Architecture

No bundler, no transpiler, no JSX compilation (yet). React 18 is loaded as UMD globals via `<script>` tags in `index.html` pointing at `/node_modules/react/umd/...` and `/node_modules/react-dom/umd/...`, followed by `main.js`. Consequences:

- `React` and `ReactDOM` are globals; do not use `import`/`require` in `main.js`.
- All code lives in `main.js` and runs in the browser, mounting into `<div id="root">` via `ReactDOM.createRoot(...).render(...)`.
- JSX will not work unless a transpiler such as Babel standalone is added to `index.html`; the course introduces this at the JSX step, so follow the tutorial's approach rather than adding tooling on your own.
- Tutorial steps are typically done by editing `main.js` in place (previous approaches are left as comments), so avoid deleting commented-out code unless asked.
