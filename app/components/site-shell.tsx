import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, solutionLinks } from '@/config/site';
import type { Vertical } from '../lib/measurement';
import TrackedLink from './tracked-link';
import Icon from './icons';

export function SiteNav({ vertical = 'general' }: { vertical?: Vertical }) {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="nav enterprise-nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" aria-label="Reclaim Protocol home"><Image className="brand-mark" src="/reclaim-logo.png" width={28} height={28} alt="" /><span>Reclaim Protocol</span></Link>
        <nav className="enterprise-links" aria-label="Main navigation">
          <TrackedLink href="/#verify" placement="nav" vertical={vertical}>Solutions</TrackedLink>
          <Link href="/#integrate">Developers</Link>
          <Link href="/#pricing">Pricing</Link>
          <a href={siteConfig.trustUrl}>Trust Center <span aria-hidden="true">↗</span></a>
        </nav>
        <TrackedLink href={siteConfig.bookingUrl} vertical={vertical} placement="nav" action="booking" className="btn btn-sm btn-ghost nav-booking">Let’s talk <Icon name="arrow" size={15} /></TrackedLink>
        <details className="mobile-menu"><summary>Menu <span aria-hidden="true">＋</span></summary><nav aria-label="Mobile navigation">
          {solutionLinks.map(item => <TrackedLink key={item.vertical} href={item.href} vertical={item.vertical} placement="nav" action={item.vertical === 'other' ? 'booking' : 'navigate'}>{item.label}</TrackedLink>)}
          <Link href="/#verify">All solutions</Link><a href={siteConfig.docsUrl}>Developers</a><Link href="/#pricing">Pricing</Link><a href={siteConfig.trustUrl}>Trust Center</a>
          <TrackedLink href={siteConfig.bookingUrl} vertical={vertical} placement="nav" action="booking">Discuss your workflow</TrackedLink>
        </nav></details>
      </div>
    </header>
  </>;
}

export function YCBadge() {
  return <a className="yc-badge" href="https://www.ycombinator.com/companies/reclaim-protocol"><span className="yc-badge-mark">Y</span>Backed by Y Combinator</a>;
}

export function FinalCTA({ vertical = 'general', title = 'What do you need your users to prove?', label = 'Discuss Now', href = siteConfig.bookingUrl, action = 'booking' }: { vertical?: Vertical; title?: string; label?: string; href?: string; action?: 'booking' | 'demo' }) {
  return <section className="conversion-section" id="pilot"><div className="wrap conversion-inner">
    <div><p className="eyebrow">ONE CLAIM. ONE SOURCE. A PLACE TO START.</p><h2>{title}</h2></div>
    <TrackedLink href={href} action={action} vertical={vertical} placement="final" className="btn btn-white">{label} <Icon name="arrow" /></TrackedLink>
  </div></section>;
}

export function SiteFooter({ vertical = 'general' }: { vertical?: Vertical }) {
  return <footer className="enterprise-footer"><div className="wrap">
    <div className="footer-grid"><div><Link href="/" className="brand"><Image src="/reclaim-logo.png" width={28} height={28} alt="" /><span>Reclaim Protocol</span></Link><p>Claims, meet evidence.</p><a href={siteConfig.githubUrl}>GitHub ↗</a><a href="https://www.linkedin.com/company/reclaimprotocol/">LinkedIn ↗</a></div>
      <div><h2>Solutions</h2>{solutionLinks.map(item => <TrackedLink key={item.vertical} href={item.href} vertical={item.vertical} placement="footer" action={item.vertical === 'other' ? 'booking' : 'navigate'}>{item.label}</TrackedLink>)}<TrackedLink href="/solutions/research" vertical="research" placement="footer">Research</TrackedLink><TrackedLink href="/solutions/promotions" vertical="promotions" placement="footer">Promotions</TrackedLink></div>
      <div><h2>Build with Reclaim</h2><a href={siteConfig.docsUrl}>Documentation</a><a href={siteConfig.apiKeysUrl}>Get API keys</a><TrackedLink href={siteConfig.demoUrl} vertical={vertical} placement="footer" action="demo">Try a verification</TrackedLink><a href={`${siteConfig.demoUrl}/agents.md`}>For AI agents</a><a href={siteConfig.whitepaperUrl}>Whitepaper</a></div>
      <div><h2>Company</h2><a href={siteConfig.trustUrl}>Trust Center</a><a href={siteConfig.blogUrl}>Blog</a><a href={siteConfig.careersUrl}>Careers</a><TrackedLink href={siteConfig.bookingUrl} vertical={vertical} placement="footer" action="booking">Discuss your workflow</TrackedLink></div>
    </div><div className="footer-bottom"><span>© 2026 CreatorOS Inc. · Reclaim Protocol</span><div><Link href="/privacy">Privacy</Link><a href={siteConfig.termsUrl}>Terms</a></div></div>
  </div></footer>;
}
