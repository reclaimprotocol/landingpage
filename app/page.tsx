import { siteConfig } from '@/config/site';
import { SiteNav, SiteFooter, YCBadge, FinalCTA } from './components/site-shell';
import { Integration, Trust } from './components/marketing-sections';
import VerificationShowcase from './components/verification-showcase';
import StructuredResult from './components/structured-result';
import UseCases from './components/use-cases';
import TrackedLink from './components/tracked-link';
import Pricing from './components/pricing';
import Icon from './components/icons';
import VerificationGaps from './components/verification-gaps';
import { marketingMetadata } from './lib/metadata';
import './enterprise.css';

export const metadata = marketingMetadata(
  'Verify your users’ claims. Directly from the source.',
  'Send a verification link. Your user connects the relevant account. Reclaim’s AI retrieves the information you need and returns verifiable evidence to your application.',
  '/', '/social-home.png',
);

export default function Home() {
  return <div className="enterprise-site">
    <SiteNav />
    <main id="main">
      <section className="enterprise-hero"><div className="wrap hero-grid">
        <div className="hero-copy"><p className="eyebrow"><span className="dot" /> SOURCE-ACCOUNT VERIFICATION</p>
          <h1>Verify your users’ claims.<br /><strong>Directly from the source.</strong></h1>
          <p className="lead">Send a verification link. Your user connects the relevant account. Reclaim’s AI retrieves the information you need and returns verifiable evidence to your application.</p>
          <div className="hero-actions"><TrackedLink href={siteConfig.demoUrl} action="demo" placement="hero" className="btn btn-primary">Try a verification <Icon name="arrow" size={17} /></TrackedLink><TrackedLink href={siteConfig.bookingUrl} action="booking" placement="hero" className="btn btn-ghost">Discuss your workflow <Icon name="arrow" size={17} /></TrackedLink></div>
          <div className="hero-endorsement"><YCBadge /><span>Built for businesses.<br />Authorized by your users.</span></div>
        </div><VerificationShowcase />
      </div></section>
      <div className="product-principles"><div className="wrap">{[{ icon: 'globe' as const, label: 'Evidence from source accounts' }, { icon: 'link' as const, label: 'Flexible claims and sources' }, { icon: 'shield' as const, label: 'User-authorized checks' }, { icon: 'code' as const, label: 'Structured results' }].map(item => <div key={item.label}><Icon name={item.icon} size={19} /><span>{item.label}</span></div>)}</div></div>
      <UseCases />
      <section className="section-pad how-section" id="how"><div className="wrap"><div className="section-head"><div><p className="eyebrow"><span className="dot" /> HOW IT WORKS</p><h2>You ask. Your user connects.<br /><span className="blue-text">The source answers.</span></h2></div><p className="right">From a specific question to evidence your application can act on.</p></div><ol className="how-steps">
        <li><div className="how-step-num mono">01 <Icon name="code" size={23} /></div><h3>Specify the claim.</h3><p>Define what your user needs to prove and the information you need from the relevant source.</p><span className="how-step-example">“Uses Shopify” → product, status, plan</span></li>
        <li><div className="how-step-num mono">02 <Icon name="link" size={23} /></div><h3>Send a verification link.</h3><p>Your user opens the link and signs in to the source account to authorize the check.</p><span className="how-step-example">Your flow → user-authorized connection</span></li>
        <li><div className="how-step-num mono">03 <Icon name="check" size={23} /></div><h3>Receive source-backed results.</h3><p>Reclaim retrieves the requested information and returns evidence to your application for verification and review.</p><span className="how-step-example">Returned fields → your business decision</span></li>
      </ol></div></section>
      <VerificationGaps />
      <section className="section-pad" id="results"><div className="wrap"><div className="section-head"><div><p className="eyebrow"><span className="dot" /> WHAT YOU RECEIVE</p><h2>A result with a source.<br /><span className="blue-text">And context to act on it.</span></h2></div><p className="right">The requested fields, where they came from, when they were verified, and an evidence reference where supported.</p></div><StructuredResult /></div></section>
      <Integration /><Trust /><Pricing /><FinalCTA />
    </main><SiteFooter />
  </div>;
}
