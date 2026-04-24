# Blue Business — website v2

Nieuwe website voor **Blue Business** (Blue Innovation B.V.), een Nederlandse app-development studio. Gebouwd voor SEO + GEO (generative engine optimization) in NL en de Caribbean.

## Stack

- **Astro 5** — statische site-generator, HTML-first, minimale JS
- **Tailwind CSS 4** — `@theme` in CSS (geen `tailwind.config.js`)
- **TypeScript strict**
- **Vercel** — doel-hosting

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

## Structuur

```
src/
  pages/
    index.astro               # redirect naar /nl/
    nl/
      index.astro             # homepage
      cases/
        index.astro           # cases overzicht
        bonaire-app.astro     # case detail
      privacy.astro
      voorwaarden.astro
  layouts/BaseLayout.astro    # SEO meta, hreflang, OG, Schema.org
  components/
    home/                     # 7 homepage sections
    shared/                   # SplitHeading, MonoEyebrow, ArrowButton, Icons, Container
    layout/                   # Nav, Footer
    seo/SchemaOrg.astro       # Organization + WebSite + FAQPage @graph
  i18n/
    routes.ts                 # routeMap + getAlternateUrl
    nl.json                   # alle NL-copy
    en.json                   # EN-labels (homepage-EN nog te bouwen)
  styles/global.css           # design tokens @theme
public/
  robots.txt                  # expliciete AI-crawler allowlist
  llms.txt                    # GEO corpus
```

## Design tokens

Dark-mode first. Navy `#08142A` achtergrond, BB-blauw `#3B82F6` als enige accent. Geen gradient, geen cyan-mix, geen paars. Typografie: Geist Sans + Geist Mono, weights 400+500 only.

## GEO / SEO

- `robots.txt` met expliciete allowlist voor GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot
- `llms.txt` met entity-first company description + key URLs
- JSON-LD: Organization + WebSite + FAQPage op homepage, SoftwareApplication + BreadcrumbList op case detail
- hreflang `nl-NL` + `en` + `x-default`
- Elke FAQ-vraag beantwoord met direct-answer-eerst (getal/voorbeeld in eerste zin)

## Nog te bouwen

- `/nl/diensten/`, `/nl/over-ons/`, `/nl/contact/` pagina's
- `/en/` spiegel (EN-copy in `src/i18n/en.json` aanvullen)
- Contact endpoint `/api/contact.ts` met Resend
- OG image PNG (`public/og/home.png`)
- Medewerker App + GAST case detail pagina's (wacht op klant-content)
