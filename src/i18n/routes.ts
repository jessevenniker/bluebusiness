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

export function getAlternateUrl(currentPath: string, targetLocale: Locale): string {
  const normalized = currentPath.endsWith('/') ? currentPath : currentPath + '/';

  // exact match lookup
  for (const locale of locales) {
    for (const key of Object.keys(routeMap[locale]) as RouteKey[]) {
      if (routeMap[locale][key] === normalized) {
        return routeMap[targetLocale][key];
      }
    }
  }

  // case detail: /{nl|en}/cases/{slug}/ — slug identical across locales
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
