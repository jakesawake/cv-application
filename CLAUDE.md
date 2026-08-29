# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A React CV/resume builder (The Odin Project "CV Application" exercise), scaffolded with Vite. Currently at the starting point: `src/App.jsx` renders only "Hello World". The goal is an interactive form where the user enters general info / education / experience and sees a live CV preview, with edit and submit modes per section.

## Commands

- `npm run dev` — start the Vite dev server. Forces `BROWSER=firefox` (via `cross-env`) and auto-opens a browser (`server.open` in `vite.config.js`). Override the browser with `BROWSER=chrome npm run dev` or disable auto-open by editing the config.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/` locally.
- `npm run lint` — ESLint over the repo. There is no separate typecheck (plain JS/JSX, no TypeScript despite `@types/*` being installed).

No test runner is configured yet. If adding tests, Vitest + React Testing Library is the conventional pairing for this stack.

## Stack notes

- **React 19** with the new JSX transform — no `import React` needed in components.
- **ESLint 10 flat config** (`eslint.config.js`), extending `js.configs.recommended`, `react-hooks` recommended, and `react-refresh/vite`. `dist` is globally ignored. The react-refresh rule expects each module to only export components, so keep non-component exports (helpers, constants) in separate files.
- Entry point: `index.html` → `src/main.jsx` (mounts `<App />` in `<StrictMode>` at `#root`).
