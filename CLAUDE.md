# Fight Lions — website

Official site of the Lviv Regional Hand-to-Hand Combat Federation (club "Fight Lions"), replacing https://fight.lviv.ua/.
Goal: rank in search for "рукопашний бій Львів", give visitors everything they need, and make them want to join.

## Stack and commands

- Astro (static output), TypeScript strict, plain CSS with variables (no UI framework). Runtime: Bun (`engines` says Node >=22.12 for hosts).
- `bun run dev` · `bun run build` · `bun run check` (astro check) · `bun run format` · `bun run verify` (format check + check + build; run before finishing a task).

## Source material

- `pkg/` is the Claude Design export. It is a **reference**, not code to ship, and is excluded from lint/typecheck.
  - `pkg/README.md`: design tokens, section order, behaviour, content rules. Read it first.
  - `pkg/source/*.html`: exact spacing, colors, copy, SVG icons, and the JSON-LD/meta in `<helmet>` to port.
  - `pkg/design/*.png`: desktop 1440 / mobile 390 / OG card (og card is ready to use).
  - `pkg/assets/`: photos and logos. Optimize via `astro:assets`; never edit logos.
- Design is "not pixel-perfect": keep the idea, palette and content; do not invent new visual styles.

## Rules

- Site language is Ukrainian only (`<html lang="uk">`). No English version for launch; keep routing i18n-ready.
- Do not invent people, results, prices or insurance claims. Unconfirmed items are listed in `pkg/README.md` ("Ще не підтверджено"); use clearly marked placeholders and mention them.
- Schedule, coaches and belts live in `src/data/*.ts` (typed modules), not in markup.
- Straight corners everywhere (no border-radius). Moderate CSS-only animation; always honour `prefers-reduced-motion`.
- One `h1` per page ("Рукопашний бій у Львові" on home). Unique, descriptive image alt text.
- City is just "Львів" (Брюховичі only inside a gym address). Group names: Молодша / Середня / Старша.

## SEO / migration

- **Single landing page only** (no extra pages for now). Everything lives on `/` as anchored sections; the only other route is the 404 page.
- Old site URLs (`/rozklad`, `/pro-biy`, `/zmahannia/`, `/adult`, `/kids`, `/girls`) must redirect to the matching section anchor on `/`. Define them once in one place; Astro's static `redirects` emit meta-refresh pages, so real 301s must also be configured on the host once it is chosen.
- Keep contact data consistent everywhere (phone +380977089715, Telegram t.me/Rykopashka, Instagram fightlions_lviv, YouTube, Viber). Facebook: https://www.facebook.com/fightlions.lviv. TikTok link is not available yet: keep a placeholder (`#`) and hide or mark it until provided.
- Needs: canonical, OG/Twitter, JSON-LD `SportsOrganization`, sitemap, robots.txt, self-hosted fonts (Fira Sans Extra Condensed, IBM Plex Sans/Mono).

## Quality bar (non-negotiable)

- **Clean, maintainable code:** small single-purpose components in `src/components/`, shared layout in `src/layouts/`, data in `src/data/`. No copy-pasted markup: if something appears twice (section header, button, card, separator, icon, contact link), make it a component with props. Keep components typed (`interface Props`) and free of dead code.
- **Theme:** all colors, fonts, spacing and layout widths come from CSS variables in `src/styles/theme.css`. Never hardcode a hex value, font name or magic gutter in a component; add a token instead. Global resets/base styles go in `src/styles/global.css`; component styles are scoped in the component.
- **Responsive:** mobile-first. Minimum supported width is **360px**: no horizontal scroll, no clipped text or overlapping elements from 360px up through large desktop (check 360, 390, 768, 1024, 1440, 1920). Fluid type and spacing via `clamp()`. Touch targets at least 44px. The schedule table needs a deliberate mobile layout, not a shrunken desktop table.
- **SEO target: Lighthouse SEO, Performance, Accessibility and Best Practices all 95+ on mobile.**
  - Semantic HTML (`header`, `nav`, `main`, `section` with headings, `footer`), correct heading order, one `h1`.
  - Per page: unique `<title>` and meta description, canonical, `lang="uk"`, OG/Twitter tags, JSON-LD, `hreflang` only if more languages exist. Centralize in a `SEO`/`BaseHead` component.
  - Sitemap, `robots.txt`, favicon set, 404 page.
  - Performance: images through `astro:assets` (AVIF/WebP, `srcset`, explicit width/height, lazy-load below the fold, eager + `fetchpriority` for the hero/LCP image), self-hosted fonts with `font-display: swap` and only the weights used (subset with Cyrillic), no render-blocking third-party scripts, minimal JS.
  - Accessibility: real `alt` text (unique, descriptive; empty for decorative), visible focus states, WCAG AA contrast, keyboard-operable menu with `aria-expanded`, `prefers-reduced-motion` respected.
  - Local SEO: NAP (name, address, phone) identical everywhere and in JSON-LD; `tel:` links.
- Before finishing any task: `bun run verify`, then check the page at 360px and 1440px in a browser.
- Lighthouse runs are deferred (to be set up later); still build to the targets above.

## Git

- Never commit unless explicitly asked to. No `Co-Authored-By` or other attribution lines in commits or PRs.
