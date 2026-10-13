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
- Schedule, coaches and belts live in `src/data/*.json`, not in markup.
- Straight corners everywhere (no border-radius). Moderate CSS-only animation; always honour `prefers-reduced-motion`.
- One `h1` per page ("Рукопашний бій у Львові" on home). Unique, descriptive image alt text.
- City is just "Львів" (Брюховичі only inside a gym address). Group names: Молодша / Середня / Старша.

## SEO / migration

- Old site URLs: `/`, `/rozklad`, `/pro-biy`, `/zmahannia/`, `/adult`, `/kids`, `/girls`. Do not drop them silently: keep as pages or 301-redirect (decision pending).
- Keep contact data consistent everywhere (phone +380977089715, Telegram t.me/Rykopashka, Instagram fightlions_lviv, YouTube, Viber). Facebook/TikTok links are unconfirmed.
- Needs: canonical, OG/Twitter, JSON-LD `SportsOrganization`, sitemap, robots.txt, self-hosted fonts (Fira Sans Extra Condensed, IBM Plex Sans/Mono).
