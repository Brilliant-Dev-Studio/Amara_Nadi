# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: Next.js version

This project uses **Next.js 16.2.6** with **React 19.2.4**. Per AGENTS.md, this is NOT the Next.js your training data reflects — APIs, conventions, and file structure have breaking changes. **Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`** (entry point: `index.md`; topic dirs: `01-app/`, `02-pages/`, `03-architecture/`, `04-community/`). Heed deprecation notices.

For other libraries/frameworks (React 19, Tailwind v4, etc.), prefer the `context7` MCP server over assumptions from training data.

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extends `next/core-web-vitals` + `next/typescript`)

No test runner is configured.

## Architecture

- App Router project under `app/` (`layout.tsx`, `page.tsx`, `globals.css`). No `src/` directory.
- TypeScript path alias: `@/*` → repo root.
- Styling: **Tailwind CSS v4** via `@tailwindcss/postcss` (see `postcss.config.mjs`); no `tailwind.config.*` — configuration lives in CSS.
- Fonts via `next/font` (Geist).
