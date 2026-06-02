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

## Design Principles (non-negotiable)

Every page and component in this project MUST follow these. They define the product's identity — treat them as hard requirements, not suggestions.

- **Personality first.** The site should feel like it was made by humans with a point of view — opinionated typography, distinctive copy, unexpected details. Avoid generic "default template" looks.
- **Tactile maximalism.** Dense, layered, material-feeling UI. Use texture, depth, shadows, overlapping elements, grain/noise, borders, and rich surfaces. More is more — but composed, not chaotic.
- **Magazine / editorial layout.** Think print art-direction: bold headlines, strong typographic hierarchy, asymmetric and broken grids, pull quotes, generous and intentional whitespace, captions, and editorial rhythm. Not a boxy SaaS landing page.
- **Motion with intention.** Every animation must earn its place — reveal hierarchy, guide attention, or reward interaction. Use scroll-driven reveals, staggered entrances, hover/cursor feedback, and smooth transitions. No motion for motion's sake; respect `prefers-reduced-motion`.
- **Awwwards-caliber craft.** Aim for award-winning polish: micro-interactions, considered easing curves, cohesive color/type systems, and obsessive attention to detail.
- **Fully responsive.** Must look intentional and excellent on mobile, tablet, and laptop/desktop. Design the layout for each breakpoint — don't just let desktop shrink.

When implementing UI, prefer CSS-first/native approaches that fit Tailwind v4 and React 19; check `context7` for animation libraries before adding heavy dependencies.
