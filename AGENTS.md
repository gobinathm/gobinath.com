# Portfolio Site

Astro 5 + Tailwind 4 + TypeScript personal portfolio.
Features a glassmorphism bento layout with zero-JS by default.

## Dev Commands
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build
npm run preview   # preview production build locally
```

## Deployment
Automated via GitHub Actions — see `.github/workflows/deploy.yml`.

## Key Directories
- `src/data/*.ts` — all customizable content (edit here, not in components)
- `src/components/` — Astro components
- `src/` — images and static assets

## Rules
- Content changes go in `src/data/` only — never hardcode in components
- Do not introduce client-side JS (preserve zero-JS default)
- Use Tailwind 4 class names — do not use deprecated v3 syntax
- Preserve existing accessibility and SEO metadata when editing layouts
- Run `npm run build` after changes to confirm no type errors
