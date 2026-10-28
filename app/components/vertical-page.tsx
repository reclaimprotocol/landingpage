import Image from 'next/image';
import Link from 'next/link';
import type { VerticalContent } from '@/config/verticals';
import { siteConfig } from '@/config/site';
import { SiteNav, SiteFooter, FinalCTA } from './site-shell';
import TrackedLink from './tracked-link';
import VerificationDemo from './verification-demo';
import SolutionIllustration from './solution-illustration';
import { Integration, Trust } from './marketing-sections';
import Icon from './icons';
import '../enterprise.css';

export default function VerticalPage({ content }: { content: VerticalContent }) {
  const { slug, cta } = content;
  return <div className="enterprise-site"><SiteNav vertical={slug} /><main id="main">
    <section className="enterprise-hero vertical-hero"><div className="wrap"><nav className="enterprise-breadcrumb mono" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#verify">Solutions</Link><span aria-hidden="true">/</span><span aria-current="page">{content.label}</span></nav><div className="hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span className="dot" />{content.audience}</p><h1>{content.headline} <strong>{content.highlight}</strong></h1><p className="lead">{content.description}</p><div className="hero-actions"><TrackedLink href={cta.href} action={cta.action} placement="hero" vertical={slug} className="btn btn-primary">{cta.label} <Icon name="arrow" size={17} /></TrackedLink><a href="#examples" className="text-link">Explore the workflows ↓</a></div><p className="hero-small">{content.heroNote ?? 'One criterion. A relevant source. Evidence your team can use.'}</p></div>
      {slug === 'government' || slug === 'hiring' ? <SolutionIllustration variant={slug} /> : <VerificationDemo variant={slug} page={slug} />}
    </div></div></section>
    <section className="section-pad workflow-section"><div className="wrap workflow-intro"><div><p className="eyebrow"><span className="dot" /> IN YOUR EXISTING PROCESS</p><h2>{content.workflow.headline}</h2></div><div><p className="lead">{content.workflow.description}</p><ol className="workflow-path">{content.workflow.steps.map((step, i) => <li key={step} className={i === 1 ? 'is-reclaim' : ''}><span className="mono">0{i + 1}</span><strong>{step}</strong>{i === 1 && <span className="workflow-tag mono">RECLAIM</span>}</li>)}</ol></div></div></section>
    {content.video && <section className="section-pad solution-video-section" id="solution-video"><div className="wrap solution-video-layout"><div><p className="eyebrow"><span className="dot" /> WATCH THE VIDEO</p><h2>{content.video.title}.</h2><p className="lead">{content.video.description}</p><a className="text-link" href={`https://www.youtube.com/watch?v=${content.video.id}`}>Watch on YouTube <Icon name="arrow" size={17} /></a></div><iframe className="solution-video" src={`https://www.youtube-nocookie.com/embed/${content.video.id}`} title={content.video.title} loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></section>}
    <section className="section-pad" id="examples"><div className="wrap"><div className="section-head"><div><p className="eyebrow"><span className="dot" /> THREE PLACES TO START</p><h2>{content.examplesHeading ?? (slug === 'research' ? 'Recruit with evidence behind the answers.' : 'Give every decision a source to refer to.')}</h2></div></div>
      <div className="verification-examples">{content.examples.map((example, i) => <article key={example.title} className="verification-example"><div className="example-heading"><span className="use-case-icon"><Icon name={example.icon} size={24} /></span><span className="mono">0{i + 1}</span></div><h3>{example.title}</h3><blockquote>{example.claim}</blockquote><dl><div><dt>Candidate source</dt><dd>{example.source}</dd></div><div><dt>Information returned, where available</dt><dd className="field-tags">{example.fields.map(field => <span key={field}>{field}</span>)}</dd></div><div><dt>{content.exampleWorkflowLabel ?? (slug === 'research' ? 'In recruitment' : 'In your approval flow')}</dt><dd>{example.workflow}</dd></div></dl></article>)}</div>
    </div></section>
    <section className="section-pad boundaries-section"><div className="wrap boundaries-grid">{content.boundaries.map(boundary => <div key={boundary.title}><p className="eyebrow">{boundary === content.boundaries[0] ? 'YOUR WORKFLOW STAYS YOURS' : 'KNOW WHAT THE EVIDENCE MEANS'}</p><h2>{boundary.title}</h2><p className="lead">{boundary.body}</p></div>)}</div></section>
    {content.evidence && content.evidence.length > 0 && <section className="section-pad"><div className="wrap"><p className="eyebrow">CUSTOMER EXPERIENCE</p>{content.evidence.map(item => <figure className="approved-evidence" key={item.customer}>{item.logoPath && <Image src={item.logoPath} width={120} height={60} alt={item.customer} />}<blockquote>{item.quote}</blockquote><figcaption><a href={item.sourceUrl}>{item.customer} ↗</a></figcaption></figure>)}</div></section>}
    <Integration vertical={slug} /><Trust />
    <section className="section-pad"><div className="wrap faq-grid"><div><p className="eyebrow"><span className="dot" /> A FEW USEFUL ANSWERS</p><h2>Before your first test.</h2><TrackedLink href={siteConfig.bookingUrl} action="booking" placement="workflow" vertical={slug} className="text-link">Discuss your workflow <Icon name="arrow" size={17} /></TrackedLink></div><div className="faq-list">{content.faq.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">＋</span></summary><p>{item.answer}</p></details>)}</div></div></section>
    <FinalCTA vertical={slug} title={content.finalTitle ?? (slug === 'research' ? 'What makes someone right for your next study?' : 'Which purchase claim needs better evidence?')} label={cta.label} href={cta.href} action={cta.action} />
  </main><SiteFooter vertical={slug} /></div>;
}
