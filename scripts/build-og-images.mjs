// scripts/build-og-images.mjs
//
// Generates per-case Open Graph PNGs (1200×630) from SVG templates.
// Each case gets its own brand-colour radial glow, eyebrow, title, tagline
// and a "Blue Business" wordmark that matches the site's <B/> mark.
//
// Run: node scripts/build-og-images.mjs
// Output: public/og/cases/{id}.png

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(__dirname, '..');
const outDir = path.join(repo, 'public/og/cases');

const cases = [
  {
    // Slug stays /cases/bonaire-app/ for SEO continuity, even though the
    // product is now called Visit Bonaire on the App Store.
    id: 'bonaire-app',
    eyebrow: '// tourism · Caribbean',
    title: 'Visit Bonaire',
    tagline: 'You explore, we guide you.',
    accent: '#3B82F6',
  },
  {
    id: 'bonaire-cruisers',
    eyebrow: '// tourism · Caribbean',
    title: 'Bonaire Cruisers',
    tagline: 'Explore Bonaire by golf cart.',
    accent: '#22D3EE',
  },
  {
    id: 'medewerker-app',
    eyebrow: '// B2B · employee platform',
    title: 'Medewerker.app',
    tagline: 'Internal comms for teams.',
    accent: '#60A5FA',
  },
  {
    id: 'gast',
    eyebrow: '// hospitality',
    title: 'GAST',
    tagline: 'Guest app on the same platform.',
    accent: '#A78BFA',
  },
  {
    id: 'run2forty2',
    eyebrow: '// sport · community',
    title: 'Run2Forty2',
    tagline: 'Marathon trips in an app.',
    accent: '#84CC16',
  },
];

// Build a 1200×630 SVG. Dark navy background, brand-colour radial glow top
// right, mono eyebrow + sans title + tagline + a small Blue Business mark.
function buildSvg({ eyebrow, title, tagline, accent }) {
  // Wrap title to two lines if it's very long; for these five it fits on one.
  const titleSize = title.length > 16 ? 84 : 96;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="78%" cy="22%" r="55%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.55"/>
      <stop offset="55%" stop-color="${accent}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0A1730"/>
      <stop offset="100%" stop-color="#08142A"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- top-left: Blue Business mark + wordmark -->
  <g transform="translate(80, 78)">
    <text x="0" y="0" font-family="ui-monospace, 'Geist Mono', monospace" font-size="22" fill="#60A5FA" font-weight="500">&lt;</text>
    <text x="14" y="0" font-family="ui-monospace, 'Geist Mono', monospace" font-size="22" fill="#FFFFFF" font-weight="500">B</text>
    <text x="28" y="0" font-family="ui-monospace, 'Geist Mono', monospace" font-size="22" fill="#60A5FA" font-weight="500">/&gt;</text>
    <text x="68" y="0" font-family="-apple-system, 'Geist', system-ui, sans-serif" font-size="20" fill="#FFFFFF" font-weight="500">Blue Business</text>
  </g>

  <!-- centre block: eyebrow + title + tagline -->
  <g transform="translate(80, 280)">
    <text x="0" y="0" font-family="ui-monospace, 'Geist Mono', monospace" font-size="22" fill="${accent}" font-weight="400" letter-spacing="0.5">${escape(eyebrow)}</text>
    <text x="0" y="92" font-family="-apple-system, 'Geist', system-ui, sans-serif" font-size="${titleSize}" fill="#FFFFFF" font-weight="500" letter-spacing="-2">${escape(title)}</text>
    <text x="0" y="${92 + titleSize - 4}" dy="48" font-family="-apple-system, 'Geist', system-ui, sans-serif" font-size="36" fill="rgba(255,255,255,0.55)" font-weight="400">${escape(tagline)}</text>
  </g>

  <!-- bottom-right: domain marker -->
  <text x="1120" y="590" text-anchor="end" font-family="ui-monospace, 'Geist Mono', monospace" font-size="20" fill="rgba(255,255,255,0.35)" font-weight="400">bluebusiness.nl</text>
</svg>`;
}

function escape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

await fs.mkdir(outDir, { recursive: true });

for (const c of cases) {
  const svg = buildSvg(c);
  const out = path.join(outDir, `${c.id}.png`);
  await sharp(Buffer.from(svg)).png({ quality: 92, compressionLevel: 9 }).toFile(out);
  const stats = await fs.stat(out);
  console.log(`✓ ${path.relative(repo, out)} — ${(stats.size / 1024).toFixed(1)} KB`);
}

console.log(`\nGenerated ${cases.length} OG images in ${path.relative(repo, outDir)}/`);
