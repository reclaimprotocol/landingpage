export type Vertical = 'general' | 'research' | 'promotions' | 'status-match' | 'hiring' | 'other';
export type MarketingEvent = 'cta_click' | 'demo_handoff' | 'booking_handoff' | 'illustration_started' | 'illustration_completed';
export type Placement = 'nav' | 'hero' | 'use_case' | 'workflow' | 'pricing' | 'footer' | 'final' | 'illustration';

const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_id'] as const;
const storageKey = 'reclaim:campaign';
type Campaign = Partial<Record<(typeof campaignKeys)[number], string>>;

// Never read form input, claim text, account data, proof data, or arbitrary query parameters.
// Campaign IDs must be non-personal tokens; search terms are deliberately excluded.
export function readCampaign(search: string): Campaign {
  const query = new URLSearchParams(search);
  const result: Campaign = {};
  for (const key of campaignKeys) {
    const value = query.get(key);
    if (value && /^[a-zA-Z0-9_.-]{1,100}$/.test(value)) result[key] = value;
  }
  return result;
}

function campaign(): Campaign {
  if (typeof window === 'undefined') return {};
  const current = readCampaign(window.location.search);
  try {
    if (Object.keys(current).length) {
      window.sessionStorage.setItem(storageKey, new URLSearchParams(current).toString());
      return current;
    }
    return readCampaign(window.sessionStorage.getItem(storageKey) ?? '');
  } catch {
    return current;
  }
}

export function attributedHref(href: string, vertical: Vertical, booking = false, attribution: Campaign = {}): string {
  const url = new URL(href, 'https://reclaimprotocol.org');
  for (const [key, value] of Object.entries(attribution)) url.searchParams.set(key, value);
  if (vertical !== 'general') url.searchParams.set('vertical', vertical);
  // Calendly retains utm_content in its booking record; vertical also stays explicit in the URL.
  if (booking && vertical !== 'general') {
    const content = attribution.utm_content;
    url.searchParams.set('utm_content', content ? `${content}.${vertical}` : vertical);
  }
  return href.startsWith('/') ? `${url.pathname}${url.search}${url.hash}` : url.toString();
}

export function currentHref(href: string, vertical: Vertical, booking = false) {
  return attributedHref(href, vertical, booking, campaign());
}

type EventData = Campaign & { page: 'home' | 'research' | 'promotions'; vertical: Vertical; placement: Placement };
declare global {
  interface Window {
    reclaimAnalytics?: { track: (event: MarketingEvent, properties: EventData) => void };
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: MarketingEvent, vertical: Vertical, placement: Placement) {
  const path = window.location.pathname;
  const page = path === '/solutions/promotions' ? 'promotions' : path === '/solutions/research' ? 'research' : 'home';
  const properties: EventData = { ...campaign(), page, vertical, placement };
  try {
    if (window.reclaimAnalytics) window.reclaimAnalytics.track(event, properties);
    else if (window.dataLayer) window.dataLayer.push({ event: `reclaim_${event}`, ...properties });
    window.dispatchEvent(new CustomEvent('reclaim:analytics', { detail: { event, ...properties } }));
  } catch {
    // Analytics must never prevent navigation or interaction.
  }
}
