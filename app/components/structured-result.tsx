'use client';

import { useState } from 'react';
import Icon from './icons';

const outcomes = [
  { label: 'Verified', heading: 'Requested evidence is available.', code: 'isVerified: true', description: 'The backend verifies the proof, then your application uses the returned fields to make its decision.' },
  { label: 'Information unavailable', heading: 'Keep the claim unresolved.', code: 'extractedParameters', description: 'Check the returned fields for the information you requested. Missing information is provider-dependent; there is no universal “unavailable” SDK status. Do not interpret an absent field as a negative answer.' },
  { label: 'Unsuccessful session', heading: 'Give the user a next step.', code: 'onError / cancel callback', description: 'A failure or cancellation is different from a verified answer. Offer a retry or your existing review path. The SDK exposes onError and a configurable cancel callback.' },
];

export default function StructuredResult() {
  const [selected, setSelected] = useState(0);
  const outcome = outcomes[selected];
  return <div className="result-explorer">
    <div className="result-select" role="group" aria-label="Explore verification outcomes">{outcomes.map((item, i) => <button key={item.label} onClick={() => setSelected(i)} aria-pressed={selected === i} aria-controls="result-detail">{i === 0 && <Icon name="check" size={15} />}{item.label}</button>)}</div>
    <div className="result-detail" id="result-detail" aria-live="polite">
      <div className="result-explanation"><span className="mono result-api-label">{outcome.code}</span><h3>{outcome.heading}</h3><p>{outcome.description}</p></div>
      {selected === 0 ? <div className="result-record"><div className="record-head"><Icon name="code" size={16} /><span className="mono">EXAMPLE APPLICATION VIEW</span><span className="record-badge">Verified</span></div><dl>
        <div><dt>Requested fields</dt><dd>Product: Shopify<br />Subscription: active<br />Plan: Basic</dd></div><div><dt>Source</dt><dd>Shopify account</dd></div><div><dt>Verification time</dt><dd>13 Oct 2026, 14:32 UTC</dd></div><div><dt>Evidence reference</dt><dd className="mono">illustrative-proof-01</dd></div>
      </dl><p>Illustrative fields, not an API response schema. Proof references are included where supported.</p></div> : <div className="result-record result-empty"><Icon name={selected === 1 ? 'globe' : 'link'} size={36} /><h3>{selected === 1 ? 'The source did not provide a requested field.' : 'The session did not complete.'}</h3><p>{selected === 1 ? 'Review the available evidence or use a fallback check.' : 'No verified answer should be inferred from this session.'}</p></div>}
    </div>
    <p className="result-footnote">SDK note: an empty <code>onSuccess([])</code> can mean proofs were delivered to your backend callback. It does not by itself mean information was unavailable. <a href="https://docs.reclaimprotocol.org/manual/js-sdk/usage#success-callback">Read the callback docs ↗</a></p>
  </div>;
}
