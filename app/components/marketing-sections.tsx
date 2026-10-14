import Image from 'next/image';
import { siteConfig } from '@/config/site';
import type { Vertical } from '../lib/measurement';
import Icon from './icons';
import TrackedLink from './tracked-link';
import { YCBadge } from './site-shell';

// Verbatim API calls from the current NodeJS usage guide, checked 2026-10-13.
// This is a server-side excerpt. The full guide covers callbacks and proof verification.
const sdkExample = `import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';

const reclaimProofRequest = await ReclaimProofRequest.init(
    process.env.RECLAIMPROTOCOL_APP_ID,
    process.env.RECLAIMPROTOCOL_APP_SECRET,
    'ff4d7afe-4b78-4795-9429-d20df2deaad7' // Example. Replace with provider ID
)

const exportedProofRequestJsonString = reclaimProofRequest.toJsonString();`;

export function Integration({ vertical = 'general' }: { vertical?: Vertical }) {
  return <section className="section-pad" id="integrate"><div className="wrap integration-grid">
    <div><p className="eyebrow"><span className="dot" /> FITS YOUR EXISTING WORKFLOW</p><h2>A verification step.<br /><span className="blue-text">Inside your product.</span></h2><p className="lead">Add Reclaim at the point you need more evidence: a difficult eligibility criterion, a receipt exception, or an agent waiting on a user-authorized check.</p>
      <ul className="integration-points"><li><Icon name="check" size={18} /> Choose a source and the information to retrieve.</li><li><Icon name="check" size={18} /> Let your user authorize the connection.</li><li><Icon name="check" size={18} /> Verify returned proofs on your backend and apply your rules.</li></ul>
      <div className="hero-actions"><TrackedLink href={siteConfig.docsUrl} vertical={vertical} placement="workflow" className="btn btn-primary">Developer documentation <Icon name="arrow" size={17} /></TrackedLink></div>
    </div>
    <div className="sdk-card"><div className="sdk-header"><span className="mono">CREATE A VERIFICATION REQUEST</span><span>Node.js · server</span></div><pre tabIndex={0} aria-label="Node.js SDK example"><code>{sdkExample}</code></pre><div className="sdk-footer"><p>Use your application credentials on the server. Replace the sample provider ID with your configured source.</p><a href={siteConfig.sdkGuideUrl}>View the complete integration guide ↗</a></div></div>
    <div className="agent-strip"><span className="agent-icon"><Icon name="code" size={25} /></span><div><h3>Building for AI agents?</h3><p>Use Reclaim when a workflow needs source evidence with a user’s authorization. Explore the verification letters API and MCP instructions.</p></div><a href={`${siteConfig.demoUrl}/agents.md`} className="text-link">Agent instructions <Icon name="arrow" size={17} /></a></div>
  </div></section>;
}

export function Trust() {
  return <section className="section-pad trust-section" id="trust"><div className="wrap">
    <div className="section-head"><div><p className="eyebrow"><span className="dot" /> BUILT FOR YOUR REVIEW PROCESS</p><h2>Evidence you can examine.<br />A team you can evaluate.</h2></div><YCBadge /></div>
    <div className="trust-layout"><div><p className="lead">AI retrieves the requested information. Cryptographic verification helps your application check the returned evidence.</p><a href={siteConfig.trustUrl} className="text-link">Explore the Trust Center <Icon name="arrow" size={18} /></a></div>
      <div className="compliance-cards">{[{ image: '/soc2.png', label: 'SOC 2 Type II', sub: 'Independent audit' }, { image: '/iso.gif', label: 'ISO 27001', sub: 'Information security' }, { image: '/gdpr.png', label: 'GDPR', sub: 'Readiness' }].map(item => <a key={item.label} href={`${siteConfig.trustUrl}/section/compliance`} className="compliance-card"><Image src={item.image} alt="" width={52} height={52} unoptimized /><strong>{item.label}</strong><span>{item.sub}</span></a>)}</div>
    </div>
  </div></section>;
}
