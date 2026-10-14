'use client';

import { useState } from 'react';
import Icon from './icons';
import { track } from '../lib/measurement';

export default function VerificationDemo({ variant = 'research', page = 'general' }: { variant?: 'research' | 'promotions'; page?: 'general' | 'research' | 'promotions' }) {
  const [step, setStep] = useState(0);
  const purchase = variant === 'promotions';
  const labels = ['Request', 'Connect', 'Result'];
  function change(next: number) {
    if (step === 0 && next > 0) track('illustration_started', page, 'illustration');
    if (next === 2 && step !== 2) track('illustration_completed', page, 'illustration');
    setStep(next);
  }
  return <div className="demo-stage">
    <div className="demo-topline mono"><span><span className="demo-dot" /> FROM CLAIM TO EVIDENCE</span><span>ILLUSTRATION</span></div>
    <div className="demo-window">
      <div className="demo-window-bar"><div className="window-dots" aria-hidden="true"><i /><i /><i /></div><span className="mono">{purchase ? 'purchase-verification' : 'participant-verification'}</span><Icon name="shield" size={16} /></div>
      <ol className="demo-stepper" aria-label="Example verification steps">{labels.map((label, i) => <li key={label}><button type="button" aria-pressed={step === i} aria-controls="example-panel" onClick={() => change(i)}><span>{i < step ? <Icon name="check" size={12} /> : `0${i + 1}`}</span>{label}</button></li>)}</ol>
      <div className="demo-content" id="example-panel" aria-live="polite" aria-atomic="true">
        {step === 0 && <>
          <div className="demo-app-icon"><Icon name={purchase ? 'bag' : 'users'} size={25} /></div>
          <p className="demo-caption mono">YOUR APPLICATION REQUESTS</p>
          <h2>{purchase ? 'Verify the purchase behind this reward claim.' : 'Verify that this participant uses Shopify.'}</h2>
          <div className="requested-fields"><span>Information needed</span><p>{purchase ? 'Merchant · Item · Purchase date · Amount · Order ID' : 'Product · Subscription status · Plan'}</p></div>
          <button className="btn btn-primary demo-next" onClick={() => change(1)}>Preview user action <Icon name="arrow" size={16} /></button>
        </>}
        {step === 1 && <>
          <div className="demo-app-icon"><Icon name="link" size={25} /></div>
          <p className="demo-caption mono">YOUR USER AUTHORIZES THE CHECK</p>
          <h2>Connect the relevant account.</h2>
          <div className="source-account"><span className={`source-glyph ${purchase ? '' : 'shopify-glyph'}`}><Icon name="bag" size={25} /></span><div><strong>{purchase ? 'Retailer account' : 'Shopify'}</strong><span>{purchase ? 'Order history' : 'Account & subscription'}</span></div><Icon name="shield" /></div>
          <p className="demo-explainer">The user follows the link and signs in to the source. Reclaim’s AI retrieves the requested information.</p>
          <button className="btn btn-primary demo-next" onClick={() => change(2)}>Preview the result <Icon name="arrow" size={16} /></button>
        </>}
        {step === 2 && <>
          <div className="demo-result-title"><span className="demo-success"><Icon name="check" size={19} /></span><div><p className="demo-caption mono">RETURNED TO YOUR APPLICATION</p><h2>Evidence to work with.</h2></div></div>
          <dl className="demo-result-fields">{(purchase ? [['Merchant', 'Example retailer'], ['Item', 'Daily moisturizer · 50 ml'], ['Purchase date', '12 Oct 2026'], ['Amount / order ID', '$38.00 USD / DEMO-1042']] : [['Product', 'Shopify'], ['Subscription status', 'Active'], ['Plan', 'Basic']]).map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl>
          <div className="demo-evidence mono"><span>Source <b>{purchase ? 'Retailer order history' : 'Shopify account'}</b></span><span>Verified at <b>13 Oct 2026 · 14:32 UTC</b></span><span>Proof reference <b>illustrative-proof-01</b></span></div>
          <button className="demo-restart" onClick={() => change(0)}>Replay example <span aria-hidden="true">↺</span></button>
        </>}
      </div>
    </div>
    <p className="demo-note"><Icon name="shield" size={14} /> Sample data. No account connection. Source and field support must be confirmed.</p>
  </div>;
}
