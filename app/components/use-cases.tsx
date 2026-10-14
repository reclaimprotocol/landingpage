'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { siteConfig } from '@/config/site';
import type { Vertical } from '../lib/measurement';
import Icon, { type IconName } from './icons';
import TrackedLink from './tracked-link';

const cases: { title: string; vertical: Vertical; icon: IconName; text: string; href: string; sources: { label: string; icon?: IconName; image?: string }[]; sourceLabel: string }[] = [
  { title: 'Research', vertical: 'research', icon: 'users', text: 'Verify that participants meet your study criteria.', href: '/solutions/research', sources: [{ label: 'Product accounts', icon: 'briefcase' }, { label: 'Retailer orders', icon: 'bag' }, { label: 'Memberships', icon: 'card' }], sourceLabel: 'Product accounts · Orders · Memberships' },
  { title: 'Promotions', vertical: 'promotions', icon: 'bag', text: 'Verify qualifying purchases before approving rewards.', href: '/solutions/promotions', sources: [{ label: 'Retailer accounts', icon: 'bag' }, { label: 'Order history', icon: 'card' }, { label: 'Source websites', icon: 'globe' }], sourceLabel: 'Retailer accounts · Order history' },
  { title: 'Status Match', vertical: 'status-match', icon: 'plane', text: 'Verify users’ status on other airlines when they apply for status on yours.', href: 'https://match-admin.reclaimprotocol.org', sources: [{ label: 'Delta', image: '/airlines/delta.png' }, { label: 'United', image: '/airlines/united.png' }, { label: 'Emirates', image: '/airlines/emirates.png' }], sourceLabel: 'Airline loyalty accounts' },
  { title: 'Hiring BGV', vertical: 'hiring', icon: 'briefcase', text: 'Verify the employees you hire, from their source records.', href: 'https://smartverify.in', sources: [{ label: 'Workday', image: '/logo-workday.png' }, { label: 'ADP', image: '/logo-adp.png' }, { label: 'Gusto', image: '/logo-gusto.png' }], sourceLabel: 'Employment · Education · Identity' },
  { title: 'Other workflows', vertical: 'other', icon: 'globe', text: 'Tell us what your users need to prove. Start with one claim.', href: siteConfig.bookingUrl, sources: [{ label: 'Source websites', icon: 'globe' }, { label: 'Business accounts', icon: 'briefcase' }, { label: 'Subscriptions', icon: 'card' }], sourceLabel: 'Let’s find the relevant source' },
];

export default function UseCases() {
  const rail = useRef<HTMLDivElement>(null);
  function scroll(direction: number) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    rail.current?.scrollBy({ left: direction * 340, behavior: reduced ? 'instant' : 'smooth' });
  }
  return <section className="section-pad use-case-section" id="verify"><div className="wrap">
    <div className="section-head"><div><p className="eyebrow"><span className="dot" /> CHOOSE YOUR USE CASE</p><h2>Different claims.<br /><span className="blue-text">The same source of confidence.</span></h2></div><div className="rail-controls"><button onClick={() => scroll(-1)} aria-label="Scroll use cases left">←</button><button onClick={() => scroll(1)} aria-label="Scroll use cases right">→</button></div></div>
    <div className="use-case-rail" ref={rail} tabIndex={0} role="region" aria-label="Verification use cases; scroll horizontally">
      {cases.map((item, i) => <article className="use-case-card" key={item.title}><div className="use-case-top"><span className="use-case-icon"><Icon name={item.icon} size={24} /></span><span className="mono">0{i + 1}</span></div><h3>{item.title}</h3><p>{item.text}</p><div className="use-case-sources"><div className="source-icons">{item.sources.map(source => <span className="source-icon" role="img" key={source.label} title={source.label} aria-label={source.label}>{source.image ? <Image src={source.image} alt="" width={28} height={28} /> : <Icon name={source.icon!} size={21} />}</span>)}</div><span>{item.sourceLabel}</span></div><TrackedLink className="text-link" href={item.href} placement="use_case" vertical={item.vertical} action={item.vertical === 'other' ? 'booking' : 'navigate'} aria-label={`${item.vertical === 'other' ? 'Discuss' : 'Learn more about'} ${item.title}`}>{item.vertical === 'other' ? 'Discuss your workflow' : 'Learn More'} <Icon name="arrow" size={17} /></TrackedLink></article>)}
    </div><p className="source-availability">Example sources and source categories. Availability depends on the website, account, and requested information.</p>
  </div></section>;
}
