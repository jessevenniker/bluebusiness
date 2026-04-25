export const locales = ['nl', 'en'] as const;
export type Locale = (typeof locales)[number];

export const routeMap = {
  nl: {
    home: '/nl/',
    services: '/nl/diensten/',
    cases: '/nl/cases/',
    about: '/nl/over-ons/',
    contact: '/nl/contact/',
    privacy: '/nl/privacy/',
    terms: '/nl/voorwaarden/',
  },
  en: {
    home: '/en/',
    services: '/en/services/',
    cases: '/en/cases/',
    about: '/en/about/',
    contact: '/en/contact/',
    privacy: '/en/privacy/',
    terms: '/en/terms/',
  },
} as const;

export type RouteKey = keyof (typeof routeMap)['nl'];

// SEO landing pages — no full translation yet, so the language toggle falls back
// to the most thematically-related counterpart in the other locale.
const landingAlternates: Record<string, string> = {
  // NL landings → fallback to the EN services overview (no EN counterpart yet)
  '/nl/native-app-laten-maken/':       '/en/services/',
  '/nl/medewerker-app-laten-maken/':   '/en/services/',
  '/nl/hospitality-app-vakantiepark/': '/en/services/',
  '/nl/app-overnemen-onderhoud/':      '/en/services/',
  // EN Caribbean landings → NL services overview as fallback
  '/en/caribbean-app-development/':    '/nl/diensten/',
  '/en/bonaire-app-development/':      '/nl/diensten/',
};

export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  const normalized = currentPath.endsWith('/') ? currentPath : currentPath + '/';

  // 1. Direct landing-page alternate
  if (landingAlternates[normalized]) {
    const target = landingAlternates[normalized];
    if (target.startsWith(`/${targetLocale}/`)) return target;
  }

  // 2. Standard routeMap lookup
  for (const locale of locales) {
    for (const key of Object.keys(routeMap[locale]) as RouteKey[]) {
      if (routeMap[locale][key] === normalized) {
        return routeMap[targetLocale][key];
      }
    }
  }

  // 3. Case detail: /{nl|en}/cases/{slug}/ — slug identical across locales
  const caseMatch = normalized.match(/^\/(nl|en)\/cases\/([^/]+)\/$/);
  if (caseMatch) {
    return `/${targetLocale}/cases/${caseMatch[2]}/`;
  }

  return routeMap[targetLocale].home;
}

export function getCurrentLocale(pathname: string): Locale {
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  return 'nl';
}
