// scripts/build-staging-sitemap.mjs
//
// Generates a staging-only sitemap with bluebusiness-v2.vercel.app URLs,
// for Google Search Console property verification of the staging URL.
// Reads dist/sitemap-0.xml (the Astro-generated production sitemap) and
// rewrites all hostnames.
//
// After DNS flip, this script is no longer needed — the production sitemap
// will work as-is for the bluebusiness.nl property.
//
// Run after `npm run build`:
//   node scripts/build-staging-sitemap.mjs

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(__dirname, '..');

const PROD = 'https://bluebusiness.nl';
const STAGING = 'https://bluebusiness-v2.vercel.app';

const sources = [
  { in: 'dist/sitemap-0.xml',     out: 'dist/sitemap-staging-0.xml' },
  { in: 'dist/sitemap-index.xml', out: 'dist/sitemap-staging.xml' },
];

for (const { in: inFile, out: outFile } of sources) {
  const inPath = path.join(repo, inFile);
  const outPath = path.join(repo, outFile);

  const content = await fs.readFile(inPath, 'utf-8');
  // Rewrite every absolute URL. Also rewrite the index→child reference.
  const rewritten = content
    .replaceAll(PROD, STAGING)
    .replaceAll('sitemap-0.xml', 'sitemap-staging-0.xml');

  await fs.writeFile(outPath, rewritten);
  const stats = await fs.stat(outPath);
  console.log(`✓ ${path.relative(repo, outPath)} — ${(stats.size / 1024).toFixed(1)} KB`);
}

// Also drop a copy in public/ so the next build picks it up automatically too.
const publicDir = path.join(repo, 'public');
for (const { out } of sources) {
  const fileName = path.basename(out);
  const src = path.join(repo, out);
  const dest = path.join(publicDir, fileName);
  await fs.copyFile(src, dest);
  console.log(`✓ public/${fileName}`);
}

console.log('\nSubmit in GSC for the bluebusiness-v2.vercel.app property:');
console.log(`  ${STAGING}/sitemap-staging.xml`);
console.log('\nThis script can be deleted (along with public/sitemap-staging*.xml) once DNS is flipped.');
