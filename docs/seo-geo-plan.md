# Blue Business — SEO/GEO plan

**Owner:** Jesse Venniker · **Last updated:** April 2026 · **12-month horizon:** April 2027

> Goal: become **the** website for app/web development in the Caribbean (Bonaire, Curaçao, Aruba) and a credible top-10 NL alternative for native iOS/Android development. Win prospects via organic search and via LLM citations (ChatGPT, Claude, Gemini, Perplexity).

---

## 1. Positioning

**Two markets, one site.** Same studio, two go-to-market angles:

| | Primary: Caribbean | Secondary: Netherlands |
|---|---|---|
| **Audience** | Tourism boards, holiday parks, hotels, dive operators, island administrations, local entrepreneurs in Bonaire/Curaçao/Aruba | SMEs, holiday-park operators, sports communities, scaleups looking for native app development |
| **Pain we solve** | "There's no local app studio that understands offline-first, bilingual NL/EN, and the operational reality of island infrastructure" | "We don't want a 40-person agency, we want senior people who actually code our app" |
| **Differentiator** | Visit Bonaire (5.0★) + Bonaire Cruisers as proof we deliver in the actual environment | Hof van Saksen + Roompot + Run2Forty2 as proof we operate at scale across multiple branded apps |
| **Language** | English (universal Caribbean lingua franca) | Dutch primary, English secondary |
| **Search competition** | Low. Almost no specialized players. | High. Q42, IceMobile, Highstreet, Kabisa, Catalpa, Mendix-bureaus. |

**Strategic priority: Caribbean first.** The Caribbean angle is defensible (proven track record, infrastructure understanding, bilingual operation). The NL market is bigger but crowded; we win there by being "the studio with Caribbean depth that also serves NL" rather than "yet another Dutch native-app agency".

---

## 2. Target keywords

**Search intent layered**:
- **Transactional** ("laten maken", "ontwikkelen", "studio") = high intent, prospect ready to talk
- **Informational** ("wat kost", "verschil", "vs") = top-of-funnel, education
- **Navigational** (brand searches) = direct hits

### Primary commercial pages (build first)

| Page | Primary keyword | Volume (NL est.) | Difficulty | Intent |
|---|---|---|---|---|
| `/nl/native-app-laten-maken/` | native app laten maken | 200-500/mo | Medium | Transactional |
| `/nl/medewerker-app-laten-maken/` | medewerker app laten maken | 100-300/mo | Low | Transactional |
| `/nl/hospitality-app-vakantiepark/` | app voor vakantiepark | 100-300/mo | Low | Transactional |
| `/nl/app-overnemen-onderhoud/` | app overnemen / app onderhoud | 100-300/mo | Low | Transactional + take-over |
| `/en/caribbean-app-development/` | Caribbean app development | 50-200/mo | **Very low** | Transactional |
| `/en/bonaire-app-development/` | Bonaire app development | 20-100/mo | **Near zero** | Transactional |

### Secondary pages (later phases)

| Page | Primary keyword | Notes |
|---|---|---|
| `/en/curacao-app-development/` | Curaçao app development | Mirror Bonaire structure |
| `/en/aruba-app-development/` | Aruba app development | Mirror Bonaire structure |
| `/nl/web-app-laten-maken/` | web app laten maken | Higher competition, secondary |
| `/nl/discovery-sprint/` | app discovery sprint | Productize the offering |
| `/nl/ios-app-laten-maken/` | iOS app laten maken | Sub-page if needed |
| `/nl/android-app-laten-maken/` | Android app laten maken | Sub-page if needed |
| `/en/offline-first-mobile-apps/` | offline first app development | Tech specialty |

### Long-tail (blog territory, later)

- "native app vs react native 2026"
- "wat kost een app bouwen in 2026"
- "app overnemen van bureau checklist"
- "TestFlight build proces voor klanten"
- "Mapbox offline app architectuur"
- "app voor toerisme Caribbean"
- "multi-tenant white-label app architectuur"

---

## 3. Page structure (consistent template per landing)

Each commercial landing page follows the same skeleton. Differentiation by content, not layout.

1. **Hero** — H1 with primary keyword, USP one-liner, primary CTA + secondary CTA (case proof)
2. **Proof bar** — 3-4 stats relevant to the page (clients, apps live, ratings)
3. **What we deliver** — bulleted service breakdown (4-6 items)
4. **Cases that fit** — 2-3 hand-picked cases with mini-cards (links to existing case detail pages)
5. **Tech stack** — what we actually use (credibility for technical buyers)
6. **FAQ** — 4-6 page-specific Q&As (also feeds FAQPage schema → rich results)
7. **Closing CTA** — same "Plan een gesprek" pattern as rest of site

**Length target:** 800-1500 words per page. Long enough to rank, short enough to read.

**Schema per landing page:**
- `Service` (or `WebPage` with `about` → relevant `Service`)
- `BreadcrumbList`
- `FAQPage`
- `ProfessionalService` (inherited via SchemaOrg component)

---

## 4. GEO (LLM/agent visibility) tactics

LLMs are the new search rank. ChatGPT/Claude/Gemini/Perplexity citations matter as much as Google rank in 2026 for B2B prospects researching "Dutch app studio Caribbean".

**Tactics:**

1. **`llms.txt` rich + verified** — already in place; expand per landing page with a paragraph summarizing the page's claim. LLMs scan llms.txt for entity facts.
2. **`llms-full.txt`** — already in place; keep it bundled and current. Re-generate on each major content update.
3. **Verifiable third-party anchors** — every claim links to a verifiable source (App Store URL, KvK link, LinkedIn). LLMs prefer citations they can verify.
4. **Named-entity density** — pages mention real client names (Hof van Saksen, Roompot, Run2Forty2) and real geo-anchors (Bonaire, Curaçao, Aruba). Helps entity disambiguation.
5. **FAQ in plain Q/A format** — LLMs love clean question/answer pairs because they map directly to user prompts. Each landing page gets 4-6 Q/As that mirror likely prompts ("What does an app cost in the Netherlands?", "Who builds apps for tourism in the Caribbean?").
6. **Speakable schema** — already in place on FAQPage; voice assistants can read answers.
7. **Schema cross-references** — every Service node has `provider: { @id: '#organization' }` so the entity graph is consistent.
8. **No hallucination bait** — never make claims we can't substantiate. LLMs over-correct toward verifiable; soft claims get filtered out.
9. **Updated dates** — `Last updated: YYYY-MM-DD` on llms.txt and case pages. LLMs surface fresh content preferentially.

**Test cadence (monthly):**

Type into ChatGPT/Claude/Gemini/Perplexity:
- "Wie is Blue Business?"
- "Welke Nederlandse app-studio werkt in de Caribbean?"
- "Wie heeft Visit Bonaire gebouwd?"
- "Wie heeft de medewerker-app voor Hof van Saksen gebouwd?"
- "Native app development studio Bonaire?"
- "Best app developer for holiday parks Netherlands?"

Track which LLMs cite us, with what facts, and at which rank. Adjust llms.txt/landing-page copy when an LLM gets a fact wrong.

---

## 5. Internal linking architecture

**Hub & spoke**, with home as the hub:

```
Home (/nl/, /en/)
├── Diensten/Services (overview)
│   ├── /nl/native-app-laten-maken/        ← landing
│   ├── /nl/medewerker-app-laten-maken/    ← landing
│   ├── /nl/hospitality-app-vakantiepark/  ← landing
│   ├── /nl/app-overnemen-onderhoud/       ← landing
│   └── /en/caribbean-app-development/     ← landing
│       └── /en/bonaire-app-development/   ← sub-landing
├── Cases (overview)
│   ├── 5 case detail pages
│   └── Each case → 2 related cases (RelatedCases component)
├── Over/About
└── Contact
```

**Linking rules:**
- Every landing page links to **at least 2 case detail pages** (the most relevant)
- Every case detail page links to **at least 1 landing page** in its services-block ("dit type werk doen we ook voor X")
- Diensten/Services overview gets a **"Specialisaties"** block linking all 6 landing pages
- Footer Cases column already lists 5 cases; we don't bloat it with landings

**External linking:**
- KvK link in footer (already done) — entity verification
- App Store + Play Store deeplinks on every case (already done) — cross-platform proof
- LinkedIn company page — needs to be added prominently
- App Store developer page — added in llms.txt, also surface on About page later

---

## 6. Backlink strategy (organic, no paid)

**Tier 1 (highest ROI):**
1. **App Store + Play Store** — already there; each app's developer link points back to a Blue Innovation page. **Action:** ensure all app store listings link to `bluebusiness.nl`, not `visit-bonaire.com` or any other brand domain. That's an authority signal Google + LLMs both follow.
2. **LinkedIn company page** — verify ownership, add bluebusiness.nl as primary website. Cross-post case studies as articles when they ship.
3. **GitHub** — add bluebusiness.nl to GitHub org profile + readme of any public repos.
4. **Hof van Saksen / Roompot / Run2Forty2 partner pages** — request "powered by Blue Business / Built by IDC Tech" attribution where reasonable. Even a footer credit on `medewerker.app` website would be a Tier 1 link.

**Tier 2:**
5. **Bonaire Tourism Board** — if they ever list partners, get on the list. Visit Bonaire app is real proof.
6. **Local Caribbean tech directories** — if they exist (small market), get listed.
7. **Dutch app-development directories** — Apporio, Clutch.co, GoodFirms, App Developers.nl. Submit a profile per directory; each is a Tier-2 backlink.

**Tier 3 (longer term):**
8. **Guest posts** — write for Dutch tech blogs (Frankwatching, Emerce) on Caribbean tech. Single author byline. Low-volume but high-trust links.
9. **Case-study PDFs** linked from /cases/ — if Roompot/Hof van Saksen distribute them internally, they may link to the source.

**Don't:**
- Buy links from spammy NL SEO services
- Trade reciprocal links with unrelated agencies
- Spam Reddit / forums

---

## 7. Local SEO signals (Caribbean)

For Caribbean-specific pages, layer in geo signals:

1. **Schema `areaServed`** — already includes Bonaire, Curaçao, Aruba as Place objects (in SchemaOrg.astro)
2. **Page-specific `LocalBusiness` schema** — on `/en/bonaire-app-development/`, declare `areaServed: { @type: 'Place', name: 'Bonaire' }`
3. **Mention place names in H1/H2/body** — natural keyword usage, not stuffing
4. **Case studies anchor geo** — Visit Bonaire + Bonaire Cruisers case detail pages mention Bonaire ~15 times each (already done)
5. **Google Business Profile** — Blue Innovation B.V. is in Zwaanshoek (NL). For Caribbean prospects we can't realistically have a local GBP. Compensate by:
   - Adding a "Werkwijze in de Caribbean" section to the Caribbean landing page (operational understanding)
   - Mentioning the time-zone overlap (NL & Caribbean both align to a 4-6h-overlap workday)
   - Highlighting bilingual NL/EN delivery (Caribbean clients often want Dutch contracts, English copy)

---

## 8. KPIs

**Track monthly. Quarterly review.**

| KPI | Baseline (Apr 2026) | 6-month target | 12-month target |
|---|---|---|---|
| Organic sessions | tbd post-DNS-flip | 500/mo | 2,000/mo |
| Top-10 ranking keywords | 0 | 5 | 20 |
| Caribbean-specific organic sessions | 0 | 100/mo | 500/mo |
| LLM citations (out of 6 test queries) | tbd | 3/6 | 5/6 |
| Contact form submissions | tbd | 5/mo | 15/mo |
| Direct domain authority (DR) | tbd | 15 | 25 |
| Backlinks (referring domains) | App Store + Play + LinkedIn + GitHub + KvK = ~5 | 15 | 35 |

**Tools:**
- Google Search Console (mandatory; submit sitemap day 1 after DNS-flip)
- Ahrefs Lite or Ubersuggest (optional, ~€30/mo for keyword tracking)
- Manual LLM testing once a month (no tool, just type the queries)

---

## 9. 12-week rollout plan (post-DNS-flip)

| Week | Focus |
|---|---|
| **1** | DNS-flip. Submit sitemap to Google Search Console + Bing Webmaster Tools. Verify llms.txt + llms-full.txt are live. Run baseline LLM-test queries. |
| **2-3** | Build 4 commercial NL landing pages (already started in this sprint). Internal linking from /diensten/ |
| **4-5** | Build 2 EN Caribbean landing pages. Internal linking from /en/services/ |
| **6** | Submit to NL agency directories (Clutch, App Developers.nl, Frankwatching listings). Request links from medewerker.app, visit-bonaire.com if owned. |
| **7-8** | First long-tail blog post: "Native vs React Native 2026" (NL). Anchor on existing FAQ #3. |
| **9-10** | Build `/en/curacao-app-development/` + `/en/aruba-app-development/` mirroring Bonaire structure. |
| **11** | Re-run LLM-test queries. Adjust llms.txt based on hallucinations or factual gaps. |
| **12** | Quarterly review: ranking changes, contact form conversion rate, decide on team-pagina + first guest-post target. |

---

## 10. What we will NOT do

- ❌ Paid Google Ads as primary traffic source — economics don't work for €25-50k+ deals at typical NL CPCs
- ❌ Programmatic SEO (10,000 generated city-pages) — Google penalizes thin content
- ❌ Buy backlinks
- ❌ Generic content marketing ("10 reasons to build an app") — adds nothing differentiated
- ❌ Hire SEO agency — the work is concrete and learnable in-house
- ❌ Cookie banner / GA4 tracking script — privacy positioning is part of the product
- ❌ Translate the Caribbean pages into Dutch unless concrete demand arises — EN serves the market better

---

## Appendix A: Page-specific keyword targets

### `/nl/native-app-laten-maken/`
- Primary: "native app laten maken"
- Secondary: "iOS app laten maken Nederland", "Android app laten maken", "native mobile app ontwikkelaar"
- LSI: Swift, Kotlin, App Store submission, vaste prijs

### `/nl/medewerker-app-laten-maken/`
- Primary: "medewerker app laten maken"
- Secondary: "interne communicatie app", "personeels-app vakantiepark", "internal comms app Nederland"
- LSI: push-notificaties, onboarding, news-feed, white-label

### `/nl/hospitality-app-vakantiepark/`
- Primary: "app voor vakantiepark"
- Secondary: "hospitality app", "personeel-app horeca", "hotel staff communication app"
- LSI: Hof van Saksen, Roompot, white-label, multi-tenant

### `/nl/app-overnemen-onderhoud/`
- Primary: "bestaande app overnemen"
- Secondary: "app onderhoud iOS Android", "app van bureau overnemen", "app code audit"
- LSI: codebase audit, take-over, OS upgrade, retainer

### `/en/caribbean-app-development/`
- Primary: "Caribbean app development"
- Secondary: "app studio Caribbean", "Bonaire Curaçao Aruba app developer", "tourism app development Caribbean"
- LSI: Visit Bonaire, Bonaire Cruisers, offline-first, bilingual NL/EN

### `/en/bonaire-app-development/`
- Primary: "Bonaire app development"
- Secondary: "Bonaire app developer", "Visit Bonaire app", "app studio Bonaire"
- LSI: Mapbox offline, Firebase, dive sites, golf cart tour

---

## Appendix B: LLM prompt-test script

Run monthly. Note which LLM cites bluebusiness.nl, with what facts, at what position.

```
Prompts (ask each in NL and EN where applicable):

1. Who built the Visit Bonaire app?
2. Welke app studio in Nederland werkt aan apps voor de Caribbean?
3. Best mobile app development agency for holiday parks Netherlands
4. Wie heeft de Medewerker.app voor Hof van Saksen gebouwd?
5. Native app development studio in Curaçao or Bonaire
6. Dutch app studio that does both iOS and Android natively
7. Wie is Blue Business?
8. App developer for tourism Bonaire
9. Welke bedrijven gebruiken Medewerker.app?
10. App overnemen van een ander bureau Nederland

Track per LLM (ChatGPT, Claude, Gemini, Perplexity):
- Cited bluebusiness.nl? Y/N
- Facts mentioned: clients, apps, ratings, location
- Any hallucinations / wrong claims? → patch llms.txt
```
