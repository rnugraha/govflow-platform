# GovFlow Platform

A UI/UX showcase of a fictional municipal government portal — **Municipality of Arkadia**. Citizens can browse services, apply for a passport, and switch between light and dark themes.

## Stack

- **Next.js 16** — App Router, React Server Components
- **TypeScript 5** — strict mode
- **Tailwind CSS 4** — CSS-first config, no `tailwind.config.js`
- **shadcn/ui** — Radix/Nova preset, Lucide icons
- **next-themes** — light/dark mode
- **Biome** — linting, formatting, import sorting
- **Storybook 10** — component explorer

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Commands

```bash
pnpm dev              # dev server
pnpm build            # production build
pnpm check            # biome lint + format + import sort (auto-fix)
pnpm lint             # biome lint only
pnpm format           # biome format only
pnpm storybook        # Storybook on http://localhost:6006
pnpm build-storybook  # static Storybook build
```

## Project structure

```
src/
  app/              # Next.js App Router pages and layouts
  components/       # Shared components (CitySkyline, ThemeToggle)
  components/ui/    # shadcn/ui generated components (do not hand-edit)
  stories/          # Storybook stories
  lib/utils.ts      # cn() helper
.storybook/         # Storybook config
```

## Pages

| Route | Description |
|---|---|
| `/` | Portal homepage — hero, services grid, announcements, CTA |
| `/passport/new` | New passport application form (multi-step) |
