'use client';

import Image from 'next/image';
import { useState } from 'react';
import Icon from './icons';

const steps = [
  {
    label: 'Source',
    title: 'Choose the source',
    description: 'In this example, user is verifying their employment. We will use Rippling as the source.',
    image: '/showcase/employment/select-source.png',
    alt: 'Employment verification request with country, employer, and Rippling selected as the source.',
  },
  {
    label: 'Connect',
    title: 'Open a verification session.',
    description: 'Reclaim Protocol starts a secure browser session where the user can open the Source website.',
    image: '/showcase/employment/connect.png',
    alt: 'Verification session opening with a message that the process should only take a few seconds.',
  },
  {
    label: 'Email',
    title: 'Login into the source',
    description: 'User is presented with the Source\'s login page, not a third party phishing widget.',
    image: '/showcase/employment/enter-email.png',
    alt: 'Rippling sign-in page showing the email field and Continue button.',
  },
  {
    label: 'Sign in',
    title: 'Finish signing in.',
    description: 'User signs in, but the credentials are never accessible to Reclaim Protocol.',
    image: '/showcase/employment/sign-in.png',
    alt: 'Rippling password screen with the password masked while sign-in completes.',
  },
  {
    label: 'Verify',
    title: 'Verify cryptographically',
    description: 'Reclaim Protocol verifies the information and binds it to a cryptographic proof making it impossible for fraud',
    image: '/showcase/employment/verify.png',
    alt: 'Verification session processing the employment check after sign-in.',
  },
  {
    label: 'Result',
    title: 'See the verified result.',
    description: 'Any data you request will be returned in the form of an API callback along with an audit trail',
    image: '/showcase/employment/completed.png',
    alt: 'Completed employment verification showing verified name, employer, designation, joining year, and account identifier.',
  },
];

export default function VerificationShowcase() {
  const [selected, setSelected] = useState(0);
  const step = steps[selected];
  const last = selected === steps.length - 1;

  return <section className="verification-showcase" aria-label="Employment verification walkthrough">
    <div className="showcase-topline mono"><span><span className="dot" /> EMPLOYMENT VERIFICATION</span><span>PRODUCT WALKTHROUGH</span></div>
    <div className="showcase-window">
      <ol className="showcase-steps" aria-label="Walkthrough steps">
        {steps.map((item, index) => <li key={item.label}><button type="button" aria-label={`Step ${index + 1}: ${item.title}`} aria-pressed={selected === index} aria-controls="employment-showcase-panel" onClick={() => setSelected(index)}><span className="showcase-step-number mono">{String(index + 1).padStart(2, '0')}</span><span>{item.label}</span></button></li>)}
      </ol>
      <figure id="employment-showcase-panel" className="showcase-panel">
        <div className="showcase-screen"><Image src={step.image} alt={step.alt} fill sizes="(max-width: 600px) calc(100vw - 76px), (max-width: 900px) 580px, 560px" loading="eager" /></div>
        <figcaption className="showcase-caption" aria-live="polite" aria-atomic="true"><p className="mono">STEP {String(selected + 1).padStart(2, '0')} OF 06</p><h2>{step.title}</h2><p>{step.description}</p></figcaption>
      </figure>
      <div className="showcase-controls"><button type="button" className="showcase-previous" disabled={selected === 0} onClick={() => setSelected(selected - 1)}><span aria-hidden="true">←</span> Previous step</button><button type="button" className="showcase-next" onClick={() => setSelected(last ? 0 : selected + 1)}>{last ? 'Replay showcase' : 'Next step'} <Icon name="arrow" size={16} /></button></div>
    </div>
  </section>;
}
