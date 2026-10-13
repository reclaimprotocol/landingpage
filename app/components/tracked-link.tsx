'use client';

import Link from 'next/link';
import { useSyncExternalStore, type ComponentProps } from 'react';
import { attributedHref, currentHref, track, type Placement, type Vertical } from '../lib/measurement';

const subscribe = () => () => {};
const client = () => true;
const server = () => false;

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
  vertical?: Vertical;
  placement: Placement;
  action?: 'navigate' | 'demo' | 'booking';
};

export default function TrackedLink({ href, vertical = 'general', placement, action = 'navigate', onClick, ...props }: Props) {
  const hydrated = useSyncExternalStore(subscribe, client, server);
  const resolved = hydrated ? currentHref(href, vertical, action === 'booking') : attributedHref(href, vertical, action === 'booking');
  return <Link {...props} href={resolved} onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    track('cta_click', vertical, placement);
    if (action === 'demo') track('demo_handoff', vertical, placement);
    if (action === 'booking') track('booking_handoff', vertical, placement);
  }} />;
}
