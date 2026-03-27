'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';

const countryData: Record<string, { name: string; providerId: string; comingSoon?: boolean }[]> = {
  UK: [{ name: 'NHS', providerId: '47b3843c-e0a1-4462-8461-77d22ad768aa' }],
  Canada: [{ name: 'CRA', providerId: '426d391b-1b88-4c96-1afc-4a0b154a258g' }],
  India: [{ name: 'Aadhaar', providerId: 'e65c13a3-f2ac-4479-b2e7-b31d51f1ba93', comingSoon: true }],
  USA: [{ name: 'SSA', providerId: 'ssa-us-identity', comingSoon: true }],
  Australia: [{ name: 'MyGov', providerId: 'mygov-australia-identity', comingSoon: true }],
  Brazil: [{ name: 'Gov.br', providerId: 'govbr-brazil-identity', comingSoon: true }],
};

const countries = Object.keys(countryData);

export default function Identity() {
  const [selectedCountry, setSelectedCountry] = useState('UK');
  const [selectedSource, setSelectedSource] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [verifyLoading, setVerifyLoading] = useState(false);

  const handleTryNow = async () => {
    const source = countryData[selectedCountry][selectedSource];
    if (source.comingSoon) return;

    setVerifyLoading(true);
    try {
      const res = await fetch('/api/reclaim-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ providerId: source.providerId }),
      });
      const data = await res.json();
      if (data.url) {
        window.open(data.url, '_blank');
      }
    } catch (err) {
      console.error('Verification error:', err);
    } finally {
      setVerifyLoading(false);
    }
  };

  const sources = countryData[selectedCountry];
  const currentSource = sources[selectedSource];
  const isComingSoon = currentSource?.comingSoon;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="identity-hero flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and CTAs */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Identity verified from Authoritative Government Portals
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Identity, Age, Citizenship every country. No ID uploads, no privacy law violations.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="btn-primary"
                  onClick={() => window.location.href = siteConfig.bookingUrl}
                >
                  Talk to the founder
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => window.location.href = siteConfig.docsUrl}
                >
                  Open docs
                </button>
              </div>
            </div>

            {/* Right side - Screenshot with callout */}
            <div className="flex justify-center lg:justify-end">
              <a
                href="https://www.pcgamer.com/hardware/brits-can-get-around-discords-age-verification-thanks-to-death-strandings-photo-mode-bypassing-the-measure-introduced-with-the-uks-online-safety-act-we-tried-it-and-it-works-thanks-kojima/"
                target="_blank"
                rel="noopener noreferrer"
                className="screenshot-container"
              >
                <img src="/deepfake.webp" alt="Deepfake example" className="screenshot-image" />
                <div className="fake-callout">
                  <p>Deepfakes break selfie checks</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            The problem with identity verification today
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Every verification creates a copy of sensitive data. Every copy is a breach waiting to happen.
          </p>

          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Traditional (Doc + Selfie)</th>
                  <th className="highlight-column">Reclaim Protocol</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">User uploads government ID</td>
                  <td>✅ Yes</td>
                  <td className="highlight-column">❌ No</td>
                </tr>
                <tr>
                  <td className="row-label">Selfie / biometric collected</td>
                  <td>✅ Yes</td>
                  <td className="highlight-column">❌ No</td>
                </tr>
                <tr>
                  <td className="row-label">PII stored on server</td>
                  <td>✅ Yes. Retained up to 3 years</td>
                  <td className="highlight-column">❌ Never touches a server</td>
                </tr>
                <tr>
                  <td className="row-label">Breach risk</td>
                  <td>🔴 High. Data held on server</td>
                  <td className="highlight-column">🟢 Zero. There's nothing to leak</td>
                </tr>
                <tr>
                  <td className="row-label">Spoofable by minors</td>
                  <td>🔴 Yes. Screen scanning, AI-generated docs</td>
                  <td className="highlight-column">🟢 No. Proof comes from authenticated session</td>
                </tr>
                <tr>
                  <td className="row-label">Requires app download</td>
                  <td>Sometimes</td>
                  <td className="highlight-column">❌ No. Works fully on browser</td>
                </tr>
                <tr>
                  <td className="row-label">GDPR data minimization</td>
                  <td>⚠️ Difficult. You typically hold more data than you need</td>
                  <td className="highlight-column">✅ By design. Only the absolutely required data is extracted</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16">
            How it works: 30 seconds. 3 steps.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Steps */}
            <div className="space-y-10">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="step-title">User logs in</h3>
                <p className="step-description">
                  The user logs into a trusted source they already have an account with: a bank, mobile carrier, health portal, or government service. Reclaim never sees their credentials.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="step-title">The data is extracted</h3>
                <p className="step-description">
                  Only the specific data point you need is selected — e.g., &quot;age = 42&quot;. Nothing else is extracted. Nothing else is shared.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="step-title">A cryptographic proof is generated</h3>
                <p className="step-description">
                  A zero-knowledge proof is created on the client&apos;s device, verifying the data came from the claimed source and hasn&apos;t been altered. The proof is cryptographically tied to the source&apos;s TLS certificate. Tamper-proof. Unforgeable.
                </p>
              </div>
            </div>

            {/* Right side - Demo Video */}
            <div className="flex justify-center lg:justify-end">
              <div className="phone-mockup-container">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="phone-video"
                    >
                      <source src="/videos/id-verification.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Age verification: Prove you&apos;re an adult instead of proving you&apos;re &quot;not a child&quot;
            </h2>
            <p className="text-lg text-slate-600 mb-4 max-w-3xl mx-auto">
              Most adults already have accounts on trusted sources — a bank, a telco, a health portal, a tax authority. Reclaim Protocol uses those to verify the user's age.
            </p>
          </div>
        </div>
      </section>

      {/* Try It Out Section */}
      <section className="verify-seconds-section py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Try it out yourself
          </h2>
          <p className="text-lg text-white/80 text-center mb-12">
            Countries being added to coverage at a rapid pace. <a href="https://blog.reclaimprotocol.org/posts/govt-provider-crowdsourced" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-white/90">Learn More</a>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedSource(0);
              }}
              className="identity-select"
            >
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>

            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(Number(e.target.value))}
              className="identity-select"
            >
              {sources.map((source, i) => (
                <option key={source.name} value={i} disabled={source.comingSoon}>
                  {source.name}{source.comingSoon ? ' (Coming Soon)' : ''}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <button
              className="btn-primary"
              disabled={isComingSoon || verifyLoading}
              onClick={handleTryNow}
              style={isComingSoon ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
            >
              {isComingSoon ? 'Coming Soon' : verifyLoading ? 'Loading...' : 'Try Now'}
            </button>
          </div>
        </div>
      </section>

      {/* Regulatory FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            Regulatory FAQ
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
              >
                <span className="text-lg font-semibold text-slate-900">
                  What makes an age assurance method &quot;highly effective&quot; under OFCOM (UK)?
                </span>
                <span className="text-2xl text-slate-400 flex-shrink-0 leading-none">{openFaq === 0 ? '−' : '+'}</span>
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 mb-6">OFCOM requires age assurance to meet four criteria:</p>
                  <div className="overflow-x-auto mb-6">
                    <table className="comparison-table">
                      <thead>
                        <tr>
                          <th>Criterion</th>
                          <th>What OFCOM requires</th>
                          <th className="highlight-column">How Reclaim meets it</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="row-label">Technical Accuracy</td>
                          <td>Correctly determines whether a user is a child. Challenge-age approach recommended (e.g., set threshold at 25 if method has a 7-year margin).</td>
                          <td className="highlight-column">Data comes directly from authoritative sources (banks, NHS, HMRC). No estimation. No margin of error. Binary: the source says you&apos;re over 18, or it doesn&apos;t.</td>
                        </tr>
                        <tr>
                          <td className="row-label">Robustness</td>
                          <td>Resistant to circumvention. Must be stress-tested against real-world attacks (children attempting bypass).</td>
                          <td className="highlight-column">Proof is cryptographically tied to the source&apos;s TLS certificate via an authenticated session. Cannot be bypassed by scanning a screen, using a photo of a TV character, or generating a fake document with AI.</td>
                        </tr>
                        <tr>
                          <td className="row-label">Reliability</td>
                          <td>Produces consistent results across different circumstances. Evidence must come from a trustworthy source.</td>
                          <td className="highlight-column">Same source + same user = same result, every time. No variance from lighting, camera quality, skin tone, or device type.</td>
                        </tr>
                        <tr>
                          <td className="row-label">Fairness</td>
                          <td>Avoids unintended bias or discrimination across demographics.</td>
                          <td className="highlight-column">No facial recognition. No biometric processing. No demographic-dependent accuracy. Works equally for all users.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-600 mb-4">
                    OFCOM has published examples of methods that could be highly effective: photo-ID matching, facial age estimation, open banking checks, mobile network operator checks, and reusable digital identity services.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Methods that are <strong>not</strong> capable of being highly effective: self-declaration of age, reliance on payment methods that don&apos;t require the user to be over 18, and general contractual restrictions or disclaimers.
                  </p>
                  <p className="text-slate-600 mb-4">
                    <b>Reclaim falls into the &quot;reusable digital identity / open banking&quot; category (verification from an authoritative source) which OFCOM lists as a potentially highly effective method.</b>
                  </p>
                  <p className="text-sm text-slate-400 italic">
                    Source: OFCOM Guidance on Highly Effective Age Assurance (April 2025)
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
              >
                <span className="text-lg font-semibold text-slate-900">
                  What are OFCOM&apos;s record-keeping requirements? Can a ZK proof satisfy them?
                </span>
                <span className="text-2xl text-slate-400 flex-shrink-0 leading-none">{openFaq === 1 ? '−' : '+'}</span>
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 mb-4">Under the Online Safety Act, service providers must keep a written record of:</p>
                  <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-1">
                    <li>The type of age assurance method used</li>
                    <li>How privacy and data protection laws were considered</li>
                    <li>How the provider complies with its Part 5 duties</li>
                  </ul>
                  <p className="text-slate-600 mb-4">
                    Critically, OFCOM does not require platforms to retain the underlying personal data. In fact, the ICO (the UK&apos;s data protection regulator) which issued a joint statement with OFCOM on age assurance, actively discourages unnecessary data retention under GDPR data minimization principles.
                  </p>
                  <p className="text-slate-600 mb-4">Every Reclaim verification generates a structured proof object that satisfies all three requirements:</p>
                  <div className="identity-code-block mb-4">
                    <pre><code>{`{
  "identifier": "unique_proof_id",
  "claimData": {
    "provider": "uk-nhs",              // ← method used
    "parameters": "{\\"age\\": 24}", // ← what was verified
    "timestampS": 1710523200,          // ← when
    "context": "{\\"requestedBy\\": \\"platform_name\\"}"
  },
  "signatures": ["0xattestor_sig..."], // ← cryptographic attestation
  "witnesses": [{ "id": "...", "url": "..." }]
}`}</code></pre>
                  </div>
                  <p className="text-slate-600 mb-4">
                    This proof can be stored indefinitely. It contains zero PII. An auditor can cryptographically re-verify it at any point in the future confirming a check was performed, what source was used, and when without ever seeing the user&apos;s personal data.
                  </p>
                  <p className="text-slate-600 italic">
                    As WIRED noted: &quot;There is no need to retain any personal data after an age check is completed, and if you don&apos;t keep data, it can&apos;t be lost or stolen.&quot;
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
              >
                <span className="text-lg font-semibold text-slate-900">
                  How does this comply with GDPR?
                </span>
                <span className="text-2xl text-slate-400 flex-shrink-0 leading-none">{openFaq === 2 ? '−' : '+'}</span>
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 mb-6">Reclaim Protocol is GDPR-compliant by architecture, not just by policy.</p>
                  <div className="overflow-x-auto mb-4">
                    <table className="comparison-table">
                      <thead>
                        <tr>
                          <th>GDPR Principle</th>
                          <th className="highlight-column">How Reclaim Complies</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="row-label">Data Minimization (Art. 5(1)(c))</td>
                          <td className="highlight-column">Only the specific claim (e.g., age = 42) is proven. No additional data is collected, processed, or stored.</td>
                        </tr>
                        <tr>
                          <td className="row-label">Purpose Limitation (Art. 5(1)(b))</td>
                          <td className="highlight-column">The proof is generated for a single purpose. No secondary use is possible because no underlying data exists.</td>
                        </tr>
                        <tr>
                          <td className="row-label">Storage Limitation (Art. 5(1)(e))</td>
                          <td className="highlight-column">There is no personal data to store. The proof object contains no PII, so retention creates no compliance burden.</td>
                        </tr>
                        <tr>
                          <td className="row-label">Special Category Data (Art. 9)</td>
                          <td className="highlight-column">No biometric data is processed. No facial images. No fingerprints. No special category data is involved at any point.</td>
                        </tr>
                        <tr>
                          <td className="row-label">Right to Erasure (Art. 17)</td>
                          <td className="highlight-column">No personal data is held, so no erasure is needed. The proof object is not personal data.</td>
                        </tr>
                        <tr>
                          <td className="row-label">Data Protection by Design (Art. 25)</td>
                          <td className="highlight-column">The system is architecturally incapable of collecting PII. This is not a policy choice, it is a technical constraint.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-slate-600">
                    For platforms currently using document scan + selfie verification, adopting Reclaim eliminates the need to process biometric data (facial images) under Article 9, removes the DPIA requirement for high-risk biometric processing, and eliminates cross-border data transfer concerns for ID images.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
              >
                <span className="text-lg font-semibold text-slate-900">
                  Does this work alongside existing verification methods, or replace them?
                </span>
                <span className="text-2xl text-slate-400 flex-shrink-0 leading-none">{openFaq === 3 ? '−' : '+'}</span>
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 mb-4">
                    <strong>Either ways.</strong> Reclaim is designed to be a standalone age verification system. This can be used along with existing verification processes - in a mixture of models. Heuristics can be applied to determine the right verification mode to use, depending of data sources available and the fraud score of the user.
                  </p>
                  <p className="text-slate-600 mb-2">Platforms can:</p>
                  <ul className="list-disc pl-6 text-slate-600 mb-4 space-y-2">
                    <li><strong>Offer it as a choice</strong> : users select from doc scan, facial estimation, or Reclaim</li>
                    <li><strong>Use it as step-up verification</strong> — escalate to Reclaim when facial estimation returns an ambiguous age (e.g., estimated 18.1 for an 18+ gate)</li>
                    <li><strong>Deploy regionally</strong> — use Reclaim in markets with strong digital identity infrastructure (UK, India, Australia, Nordics) while keeping existing methods elsewhere</li>
                  </ul>
                  <p className="text-slate-600">
                    This mixture-of-methods approach aligns with how OFCOM evaluates age assurance. Their guidance explicitly acknowledges that services may combine methods to achieve &quot;highly effective&quot; status.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Coverage Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Regulation</th>
                  <th>Status</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">&#x1F1EC;&#x1F1E7; United Kingdom</td>
                  <td>Online Safety Act (OFCOM)</td>
                  <td>✅</td>
                  <td>Aligns with &quot;reusable digital identity&quot;</td>
                </tr>
                <tr>
                  <td className="row-label">&#x1F1EA;&#x1F1FA; European Union</td>
                  <td>Digital Services Act (Art. 28)</td>
                  <td>✅</td>
                  <td>Matches EU zero-disclosure blueprint</td>
                </tr>
                <tr>
                  <td className="row-label">&#x1F1EB;&#x1F1F7; France</td>
                  <td>Loi SREN (Arcom)</td>
                  <td>✅</td>
                  <td>Fits double-anonymity principle</td>
                </tr>
                <tr>
                  <td className="row-label">&#x1F1E9;&#x1F1EA; Germany</td>
                  <td>Youth Protection Act (KJM)</td>
                  <td>⚠️</td>
                  <td>Requires formal KJM assessment</td>
                </tr>
                <tr>
                  <td className="row-label">&#x1F1EE;&#x1F1F3; India</td>
                  <td>DPDP Act &amp; Rules 2025</td>
                  <td>✅</td>
                  <td>DigiLocker/Aadhaar explicitly approved</td>
                </tr>
                <tr>
                  <td className="row-label">&#x1F1E6;&#x1F1FA; Australia</td>
                  <td>Online Safety Act (eSafety)</td>
                  <td>☑️</td>
                  <td>Awaiting eSafety technical standards</td>
                </tr>
                <tr>
                  <td className="row-label">&#x1F1E7;&#x1F1F7; Brazil</td>
                  <td>Digital ECA (Lei 15.211)</td>
                  <td>☑️</td>
                  <td>Govt ID explicitly permitted</td>
                </tr>
                <tr>
                  <td className="row-label">&#x1F1FA;&#x1F1F8; United States</td>
                  <td>COPPA (FTC)</td>
                  <td>☑️</td>
                  <td>FTC incentivizes age verification</td>
                </tr>
                <tr>
                  <td className="row-label">&#x1F1E8;&#x1F1E6; Canada</td>
                  <td>Bill S-210 / Bill C-63</td>
                  <td>✅</td>
                  <td>Privacy-preserving explicitly required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="verify-seconds-section py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Verify identity without fraud and data breaches
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Verify identity, age, and citizenship directly from government portals. No documents to review, no fraud to worry about.
          </p>
          <button
            className="btn-primary"
            onClick={() => window.location.href = siteConfig.bookingUrl}
          >
            Talk to the founder
          </button>
        </div>

        <footer className="footer-content max-w-7xl mx-auto mt-20 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Product</h4>
              <ul className="footer-links">
                <li><a href="/status-match">Status Match</a></li>
                <li><a href="/education">Education</a></li>
                <li><a href="/identity">Identity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Resources</h4>
              <ul className="footer-links">
                <li><a href={siteConfig.blogUrl} target="_blank" rel="noopener noreferrer">Blog</a></li>
                <li><a href={siteConfig.docsUrl} target="_blank" rel="noopener noreferrer">Docs</a></li>
                <li><a href={siteConfig.apiKeysUrl} target="_blank" rel="noopener noreferrer">API Keys</a></li>
                <li><a href={siteConfig.whitepaperUrl} target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                <li><a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Company</h4>
              <ul className="footer-links">
                <li><a href="https://www.ycombinator.com/companies/reclaim-protocol" target="_blank" rel="noopener noreferrer">About</a></li>
                <li><a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">Contact</a></li>
                <li><a href={siteConfig.careersUrl} target="_blank" rel="noopener noreferrer">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Community</h4>
              <ul className="footer-links">
                <li><a href="https://www.linkedin.com/company/reclaimprotocol" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://x.com/reclaimprotocol" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://t.me/protocolreclaim" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                <li><a href="mailto:support@reclaimprotocol.org">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom text-center text-white/70 text-sm pt-8 border-t border-white/10">
            © 2025 Reclaim Protocol · <a href={siteConfig.privacyPolicyUrl} target="_blank" rel="noopener noreferrer">Privacy Policy</a> · <a href={siteConfig.termsUrl} target="_blank" rel="noopener noreferrer">Terms</a>
          </div>
        </footer>
      </section>
    </div>
  );
}
