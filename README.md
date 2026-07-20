# Lounes Benali — portfolio

The portfolio has two deliberate presentations of the same evidence-backed work:

- [Technical Profile](https://b-lounes.github.io/) — concise, research and engineering focused.
- [Interactive Showcase](https://b-lounes.github.io/showcase/) — visual, demo led, and system oriented.

Shared case studies live under `/work/`; earlier academic work is kept in `/archive/`.

## Local development

```sh
npm install
npm run dev
```

`npm run test` type-checks and builds the Astro site, validates the generated HTML, and checks internal links.

## Deployment

The site is a static Astro build. Pushes to `master` are built and deployed to GitHub Pages by
`.github/workflows/deploy.yml`.

The pre-rebuild portfolio is preserved by the `legacy-portfolio-2026-07-18` tag. To inspect it without changing the current branch, use `git show legacy-portfolio-2026-07-18:index.html`.

Portfolio content is centralized in `src/data/site.ts`. Update dates, metrics, evidence notes, and CV facts there before changing the page templates.
