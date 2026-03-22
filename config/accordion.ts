export interface AccordionItem {
  title: string;
  image: string;
  bulletPoints: string[];
  learnMoreUrl: string;
}

export const accordionItems: AccordionItem[] = [
  {
    title: 'Top student discount platform verifies enrollment in hard-to-verify geographies',
    image: '/accordion/edu.jpg',
    bulletPoints: [
      '1000 students per university per day',
      'Conversion went from 7% (Document verification) to 44% (Reclaim Protocol)',
      'Available in all countries including Bangladesh, Indonesia, India',
    ],
    learnMoreUrl: 'https://calendly.com/madhavanmalolan/call',
  },
  {
    title: 'Europe\'s top Airlines verifies status instantly for a status-match',
    image: '/accordion/air.webp',
    bulletPoints: [
      '1000+ status match per day, instantly.',
      'Verification cost slashed by 90%+',
      '200+ per day fraud caught intercepted',
    ],
    learnMoreUrl: '#',
  },
  {
    title: 'Leading lending company verifies identity and credit scores',
    image: '/accordion/fin.jpg',
    bulletPoints: [
      'Instant credit check, around the world',
      'No hard-to-verify document uploads needed',
      '$3M processed, protected by Reclaim Protocol verifications',
    ],
    learnMoreUrl: '#',
  },
];
