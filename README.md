# Fight Lions

Website of the Lviv Regional Hand-to-Hand Combat Federation (club "Fight Lions"). A single Ukrainian-language landing page built with Astro (static output), TypeScript and plain CSS.

## Commands

Runtime is [Bun](https://bun.sh).

| Command           | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `bun install`     | Install dependencies                                      |
| `bun run dev`     | Dev server                                                |
| `bun run build`   | Build to `dist/`                                          |
| `bun run preview` | Serve the built site locally                              |
| `bun run check`   | Type-check (`astro check`)                                |
| `bun run format`  | Format with Prettier                                      |
| `bun run verify`  | Format check + type-check + build (run before committing) |

## Project layout

- `src/pages/` — `index.astro` (the landing page), `404.astro`, `robots.txt.ts`
- `src/components/` — small single-purpose components
- `src/layouts/BaseLayout.astro` — shared shell (SEO, analytics, header, footer)
- `src/data/` — editable content: schedule, coaches, belts, directions, benefits, contacts and socials (`site.ts`)
- `src/styles/theme.css` — all design tokens (colors, fonts, spacing, widths); `global.css` — resets and base styles
- `public/` — favicons, web manifest, OG card

To change the schedule, a coach's belt, a phone number or a social link, edit `src/data/*.ts`, not the markup.

## Environment variables

Set in `.env` locally (git-ignored; see `.env.example`) or in the environment of the build.

| Variable            | Purpose                                                                              |
| ------------------- | ------------------------------------------------------------------------------------ |
| `PUBLIC_CLARITY_ID` | Microsoft Clarity project ID. Analytics are off while unset.                         |
| `SITE_URL`          | Origin used for canonical URLs and the sitemap. Defaults to `https://fight.lviv.ua`. |
| `NOINDEX`           | `1` adds `noindex` and a disallow-all `robots.txt`. For staging only.                |

Variables are read at build time, so changing one needs a rebuild.

## Deploying

The site is deployed by hand to Cloudflare Workers (static assets, see `wrangler.jsonc`):

```sh
# staging / demo on workers.dev
SITE_URL=https://<your-worker>.workers.dev NOINDEX=1 bun run build && bunx wrangler deploy

# production (real domain, indexable)
bun run build && bunx wrangler deploy
```

Make sure `PUBLIC_CLARITY_ID` is set (via `.env`) when you build, or the deployed site will have no analytics.

When the site moves to another host, upload the contents of `dist/` there. Nothing in the code depends on Cloudflare.

## Redirects

Old URLs (`/rozklad`, `/pro-biy`, `/zmahannia`, `/adult`, `/kids`, `/girls`) are defined once in `astro.config.mjs`. Astro emits meta-refresh pages for them, so configure real 301 redirects on the production host as well.

## Analytics

[Microsoft Clarity](https://clarity.microsoft.com) (free) provides heatmaps, scroll depth and session recordings. The script is loaded by `src/components/Analytics.astro` after the first interaction (or 5 seconds), so it doesn't affect Lighthouse scores.

## Open items

- TikTok link is not provided yet (`src/data/site.ts`); the button stays hidden until it is.
- Lighthouse runs are not set up yet. The targets are 95+ on mobile for Performance, Accessibility, Best Practices and SEO.
