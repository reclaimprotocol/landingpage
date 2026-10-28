import { siteConfig } from '@/config/site';
import Icon from './icons';
import TrackedLink from './tracked-link';

const examples = [
  { gap: 'Income outside your payroll coverage', source: 'Gig-platform earnings', icon: 'briefcase' as const },
  { gap: 'An overseas qualification missing from your database', source: 'University portal records', icon: 'graduation' as const },
  { gap: 'A loyalty tier you cannot check with an API', source: 'The member’s airline account', icon: 'plane' as const },
];

export default function VerificationGaps() {
  return <section className="section-pad gap-section" id="verification-gaps"><div className="wrap">
    <div className="section-head"><div><p className="eyebrow"><span className="dot" /> FILL THE VERIFICATION GAPS</p><h2>Your workflow has a missing piece.<br /><span className="blue-text">Reclaim fits right there.</span></h2></div><p className="right">Already use databases, documents, or APIs? Add source-account verification wherever your existing methods cannot reach the information you need.</p></div>
    <ol className="gap-workflow" aria-label="How Reclaim fills a gap in your existing workflow">
      <li className="gap-existing"><span className="mono">YOUR EXISTING CHECKS</span><Icon name="check" size={24} /><h3>Keep what works.</h3><p>Your databases, APIs, and document checks handle the records they cover.</p></li>
      <li className="gap-bridge"><span className="mono">THE MISSING CHECK</span><Icon name="link" size={24} /><h3>Let Reclaim reach the source.</h3><p>Your user connects the relevant account. Retrieve the evidence your workflow was missing.</p><span className="gap-tag">RECLAIM</span></li>
      <li className="gap-existing"><span className="mono">BACK TO YOUR WORKFLOW</span><Icon name="shield" size={24} /><h3>Move forward with evidence.</h3><p>Return the result to your team or application and apply your existing decision rules.</p></li>
    </ol>
    <div className="gap-examples">{examples.map(example => <div key={example.gap}><Icon name={example.icon} size={21} /><div><p>{example.gap}</p><span><span aria-hidden="true">↳ </span>{example.source}</span></div></div>)}</div>
    <div className="gap-bottom"><TrackedLink href={siteConfig.bookingUrl} action="booking" placement="workflow" className="text-link">Show us your verification gap <Icon name="arrow" size={17} /></TrackedLink></div>
  </div></section>;
}
