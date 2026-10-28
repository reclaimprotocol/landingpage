export const siteConfig = {
  demoUrl: 'https://letters.reclaimprotocol.org',
  trustUrl: 'https://trust.reclaimprotocol.org',
  sdkGuideUrl: 'https://docs.reclaimprotocol.org/manual/js-sdk/usage',
  bookingUrl: 'https://calendly.com/madhavanmalolan/call',
  docsUrl: 'https://docs.reclaimprotocol.org',
  blogUrl: 'https://blog.reclaimprotocol.org',
  apiKeysUrl: 'https://dev.reclaimprotocol.org',
  whitepaperUrl: 'https://drive.google.com/file/d/1Tok4J6mv7PwRCbwxVNhv4alS82sQJI4E/view',
  githubUrl: 'https://github.com/reclaimprotocol',
  careersUrl: 'https://www.ycombinator.com/companies/reclaim-protocol/jobs',
  privacyPolicyUrl: 'https://reclaimprotocol.notion.site/Privacy-Policy-Reclaim-Protocol-115275b816cb80ab94b8ca8616673658?pvs=4',
  termsUrl: 'https://reclaimprotocol.notion.site/Terms-of-Service-Reclaim-Protocol-13c275b816cb80b1a5ade76c6f2532dd',
};

export const solutionLinks = [
  { label: 'Govt Services', href: '/solutions/government', vertical: 'government' },
  { label: 'Hiring BGV', href: '/solutions/hiring', vertical: 'hiring' },
  { label: 'Status match', href: '/status-match', vertical: 'status-match' },
  { label: 'Student Discounts', href: '/solutions/student-discounts', vertical: 'student-discounts' },
  { label: 'Other workflows', href: siteConfig.bookingUrl, vertical: 'other' },
] as const;
