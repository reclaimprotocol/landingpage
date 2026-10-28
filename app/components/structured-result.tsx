import Icon from './icons';

export default function StructuredResult() {
  return <div className="result-explorer">
    <div className="result-select"><span className="result-tab"><Icon name="check" size={15} />Verified</span></div>
    <div className="result-detail" id="result-detail">
      <div className="result-explanation"><span className="mono result-api-label">isVerified: true</span><h3>Requested evidence is available.</h3><p>The backend verifies the proof, then your application uses the returned fields to make its decision.</p></div>
      <div className="result-record"><div className="record-head"><Icon name="code" size={16} /><span className="mono">EXAMPLE APPLICATION VIEW</span><span className="record-badge">Verified</span></div><dl>
        <div><dt>Requested fields</dt><dd>Product: Shopify<br />Subscription: active<br />Plan: Basic</dd></div><div><dt>Source</dt><dd>Shopify account</dd></div><div><dt>Verification time</dt><dd>13 Oct 2026, 14:32 UTC</dd></div><div><dt>Evidence reference</dt><dd className="mono">illustrative-proof-01</dd></div>
      </dl><p>Illustrative fields, not an API response schema. Proof references are included where supported.</p></div>
    </div>
  </div>;
}
