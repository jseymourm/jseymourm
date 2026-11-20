# .ias — Josias Seymour Morales

Personal portfolio built with **Astro**, **TypeScript (strict)**, **Tailwind CSS**, and **MDX** Content Collections.

- **Theme**: Dark monochrome obsidian (`#09090B`) framed into floating `1px` white architectural slabs (`Inter Variable` + `JetBrains Mono Variable`, self-hosted), with signal yellow (`#FACC15`) reserved strictly for interactive cues, custom pointer, and floating 3-inch scroll rail
- **Bundle**: Static-first `.astro` components with zero framework hydration (`< 2 KB` vanilla JS for desktop pointer & scroll chrome)
- **Hosting**: Ready for **Firebase Hosting** (`firebase.json` configured for `dist/`)

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run check` | Run TypeScript and Astro diagnostics |
| `npm run build` | Type-check and build static site into `dist/` |
| `npm run preview` | Preview the production build locally |

## Content Management

All portfolio content is validated at build time via Zod schemas in `src/content.config.ts`:

- **Experience entries**: `src/content/experience/*.mdx` (supports grouped `roles` arrays and optional `metrics` KPI strips)
- **Project case studies**: `src/content/projects/*.mdx`
- **Site metadata, capabilities & education**: `src/data/site.ts`

## Deploying to Firebase Hosting

```bash
npm run build
firebase init hosting   # select existing firebase.json, public dir: dist
firebase deploy --only hosting
```

> The original hand-coded HTML/CSS portfolio remains preserved in git history (`01226a1`).
