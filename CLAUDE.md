# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

React + Vite single-page site styled as a macOS desktop (lock screen, dock, draggable windows, menu bar). It is a personalized digital gift ("happy birthday, Abraham") — content in `src/constants/index.js` (names, letters, photo captions, Wikipedia-style bio, Spotify playlist) is real copy, not placeholder. Don't genericize or "clean up" that copy without being asked.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — ESLint (flat config, `eslint.config.js`)

No test suite configured.

## Architecture

**Window system.** Every app window (`src/windows/*.jsx`) is wrapped with the `WindowWrapper` HOC (`src/hoc/WindowWrapper.jsx`), which owns open/close animation (GSAP), dragging (GSAP `Draggable`), z-index focus, and visibility toggling via a ref instead of unmount — windows stay mounted, just `display:none` when closed. Global window open/closed/z-index/data state lives in the `useWindowStore` zustand store (`src/store/window.js`, immer middleware): `openWindow(key, data)`, `closeWindow(key)`, `focusWindow(key)`, `closeAllWindows()`. Window keys are defined in `WINDOW_CONFIG` (`src/constants/index.js`) and must match the keys windows are opened/closed with.

**Finder/file-explorer data.** The Finder window, "About" window, and Trash browse a tree of folders/files defined as plain data in `locations` (`src/constants/index.js`: `WORK_LOCATION`, `ABOUT_LOCATION`, `TRASH_LOCATION`). `useLocationStore` (`src/store/location.js`) tracks which folder is active. Opening an item dispatches by `fileType`/`kind` (`resume` → PDF window, `folder` → navigate, else → open a window keyed by `${fileType}${kind}`, e.g. `txtfile`, `imgfile`). Photo/gallery layout patterns (`hero`, `towers`, `quad`, `banners`, `strip`) are defined per-section in `photosLinks` and consumed by `BENTO_LAYOUTS` in `Photos.jsx`.

**Lock/power flow.** `useLockStore` (`src/store/lock.js`) is a separate, non-immer zustand store gating the whole site behind a lock screen; unlock state persists in `sessionStorage` (key `site-unlocked`). `powerState` (`"on" | "restarting" | "off"`) drives the power screen; restart/shutdown clear the session flag.

**Path aliases.** `@components`, `@constants`, `@store`, `@hoc`, `@lib`, `@windows` map to `src/*` subfolders — defined in both `vite.config.js` (build) and `jsconfig.json` (editor/IntelliSense). Keep both in sync if adding a new aliased folder.

**Barrel files.** `src/components/index.js` and `src/windows/index.js` re-export everything in their folder; import from the barrel (`@components`, `@windows`), not the individual file, to match existing style.

**Styling.** Tailwind CSS v4 via `@tailwindcss/vite` plugin (no separate tailwind.config — v4 CSS-first config, check `src/index.css`). `clsx` for conditional classes.

## Conventions

- ESLint: `no-unused-vars` allows uppercase-leading unused vars (constants/components pattern).
- New content (copy, links, data) belongs in `src/constants/index.js`, not hardcoded in JSX — that's the existing pattern for all window content (`SITE_COPY`, `WIKI_DATA`, `SPOTIFY_DATA`, `LETTER_DATA`, `LOCK_DATA`).
