# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Stack

- **Next.js 16** (App Router, RSC-first) — read `node_modules/next/dist/docs/` before assuming APIs match older versions
- **TypeScript 5** with strict mode
- **Tailwind CSS 4** (CSS-first config via `globals.css`, no `tailwind.config.js`)
- **shadcn/ui** (Radix/Nova preset, Lucide icons) — add components via `pnpm dlx shadcn@latest add <component>`
- **Biome** for linting, formatting, and import sorting (replaces ESLint + Prettier)

## Commands

```bash
pnpm dev          # dev server on http://localhost:3000
pnpm build        # production build
pnpm check        # biome lint + format + import sort (auto-fix)
pnpm lint         # biome lint only
pnpm format       # biome format only
```

## Project structure

```
src/
  app/            # Next.js App Router — layouts, pages, route handlers
  components/ui/  # shadcn/ui generated components (do not hand-edit)
  lib/utils.ts    # cn() helper (clsx + tailwind-merge)
components.json   # shadcn/ui registry config (style: radix-nova)
biome.json        # linter/formatter config
```

## Key conventions

- Import alias `@/*` maps to `src/*`
- shadcn components land in `src/components/ui/`; custom shared components go in `src/components/`
- CSS variables for theming are defined in `src/app/globals.css` — do not use hard-coded Tailwind color classes for themed UI
- Biome uses **tabs** for indentation and **double quotes** for JS strings
