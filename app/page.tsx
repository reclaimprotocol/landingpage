import Link from 'next/link';
import CopyDocsLinkButton from './copy-docs-link-button';

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <img className="brand-mark" src="/reclaim-logo.png" alt="Reclaim Protocol" />
          <span>Reclaim Protocol</span>
        </Link>
        <nav className="nav-links">
          <a href="#verify">Solutions</a>
          <a href="#contact">Contact us</a>
          <a href="#results">Results</a>
          <a href="https://trust.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Trust Center</a>
          <a href="https://blog.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Blog</a>
          <a href="https://drive.google.com/file/d/1Tok4J6mv7PwRCbwxVNhv4alS82sQJI4E/view" target="_blank" rel="noopener noreferrer">Whitepaper</a>
        </nav>
        <div className="nav-cta">
          <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Start free →</a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Banner ---------- */
function Banner() {
  return (
    <div className="banner">
      <span className="pill">Enterprise</span>
      <span>Global education and employment verification, built for enterprise scale</span>
      <span style={{ opacity: 0.6 }}>·</span>
      <a href="#contact" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Contact us →</a>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="hero no-border" style={{ borderTop: 0 }}>
      <div className="wrap hero-wrap">
        <div className="hero-kicker">
          <div className="eyebrow"><span className="dot"></span>Global coverage | Enterprise scale | 45%+ conversion rates</div>
          <span className="yc-badge"><span className="yc-badge-mark">Y</span>Backed by YC</span>
        </div>
        <h1 style={{ marginTop: '20px' }}>
          <strong>Education and Employment</strong> verification, reimagined.
        </h1>
        <p className="lead" style={{ marginTop: '20px' }}>
          Advances in AI and cryptography make verification dramatically cheaper than the legacy stack. You are probably being overcharged right now.
        </p>
        <div className="hero-actions">
          <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Start free →</a>
          <a href="#contact" className="btn btn-ghost">Contact us →</a>
        </div>
        <div className="hero-meta">
          <span><b>29K+</b> universities</span>
          <span><b>90+</b> countries</span>
          <span><b>2–30s</b> proof generation</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section className="section-pad pricing-section" id="contact">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Enterprise</div>
            <h2 style={{ marginTop: '12px' }}>Let&apos;s talk about your use case.</h2>
          </div>
          <p className="right">
            Every deployment is different — volume, geographies, compliance and SLAs. Tell us what you need and we&apos;ll put together a plan that fits.
          </p>
        </div>
        <div className="hero-actions" style={{ marginTop: '8px' }}>
          <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Talk to the founder →</a>
          <a href="mailto:admin@reclaimprotocol.org?subject=Enterprise%20enquiry" className="btn btn-ghost">Email us →</a>
        </div>
        <p className="pricing-footnote">
          Prefer to build first? Start with the{' '}
          <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">developer docs ↗</a> and reach out whenever you&apos;re ready.
        </p>
      </div>
    </section>
  );
}

/* ---------- Verticals ---------- */
function Verticals() {
  const items = [
    {
      title: 'Employment & income',
      tag: '90+ COUNTRIES · FROM $0.10',
      href: '/employment',
      body: "Verify current employer, title, and gross income across 90+ countries. One global flow instead of a US-focused verification stack.",
      proof: {
        kind: 'logos' as const,
        sources: [
          { name: 'ADP', src: '/logo-adp.png' },
          { name: 'Workday', src: '/logo-workday.png' },
          { name: 'Paychex', src: '/logo-paychex.png' },
          { name: 'Gusto', src: '/logo-gusto.png' },
          { name: 'IRS', src: '/logo-irs.png' },
          { name: 'HMRC', src: '/logo-hmrc.png' },
          { name: 'Uber', src: '/logo-uber.png' },
          { name: 'DoorDash', src: '/logo-doordash.png' },
        ],
        caption: 'Verified from payroll systems, tax portals and gig platforms.',
      },
    },
    {
      title: 'Education enrollment',
      tag: '190+ COUNTRIES · FROM $0.10',
      href: '/education',
      body: "Verify students at 29,000+ institutions worldwide. Expand beyond national clearinghouses whose listed self-service prices run $4.95 or $19.95 per result.",
      proof: {
        kind: 'logos' as const,
        sources: [
          { name: 'Stanford', src: '/uni-stanford.png' },
          { name: 'MIT', src: '/uni-mit.png' },
          { name: 'Oxford', src: '/uni-oxford.png' },
          { name: 'IIT Bombay', src: '/uni-iitb.png' },
          { name: 'USP', src: '/uni-usp.png' },
          { name: 'Tsinghua', src: '/uni-tsinghua.png' },
          { name: 'Universitas Indonesia', src: '/uni-ui.png' },
          { name: 'Heidelberg', src: '/uni-heidelberg.png' },
        ],
        caption: 'Verified directly from 29,000+ universities, globally.',
      },
    },
  ];

  return (
    <section className="section-pad" id="verify" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>New technology, new economics</div>
            <h2 style={{ marginTop: '12px' }}>Cut the legacy tax.<br />Keep the margin.</h2>
          </div>
        </div>
        <div className="cards">
          {items.map((it) => (
            <div className="card" key={it.title}>
              <div className="num">{it.tag}</div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
              {it.proof && (
                <div className={`proof proof--${it.proof.kind}`}>
                  <div className="proof-media">
                    <div className="proof-logos-grid">
                      {it.proof.sources.map((s) => (
                        <div className="proof-logo-cell" key={s.name} title={s.name}>
                          <img src={s.src} alt={s.name} loading="lazy" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="proof-caption">
                    <span>{it.proof.caption}</span>
                    {it.href && (
                      <a className="proof-link" href={it.href} aria-label="Learn more">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M5 9l4-4M5.5 4.5h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}
              {it.href && (
                <a className="card-link" href={it.href}>
                  Learn more <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="ask-strip">
          <span>Need another source or verification type?</span>
          <a href="mailto:madhavan@reclaimprotocol.org?subject=Verification%20request" className="ask-link">Ask us →</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  return (
    <section className="section-pad" id="how">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>How the cost comes out</div>
            <h2 style={{ marginTop: '12px' }}>Live source.<br />Software proof. Lower bill.</h2>
          </div>
          <p className="right">
            AI helps us add and maintain source connectors. Cryptography verifies the returned fact in software. The standard flow avoids the database licensing and manual operations that make legacy verification expensive.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-num mono">STEP 01</div>
            <h3>Connect to the live source</h3>
            <p>Your users log in to the actual portal—not a phishing widget.</p>
            <div className="step-shot">
              <div className="phone">
                <div className="phone-screen">
                  <img src="/step1-signin.png" alt="User signs in" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-num mono">STEP 02</div>
            <h3>Extract only the answer</h3>
            <p>AI creates a connector that identifies what to verify, without requiring manual development work beforehand.</p>
            <div className="step-shot">
              <div className="phone">
                <div className="phone-screen">
                  <img src="/step2-validating.png" alt="Validating information" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-num mono">STEP 03</div>
            <h3>Verify it automatically</h3>
            <p>Verification happens on the client side, making it secure, privacy-preserving, and cost-effective.</p>
            <div className="step-shot">
              <div className="phone">
                <div className="phone-screen">
                  <img src="/step3-complete.png" alt="Validation complete" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Economics and trust ---------- */
function EconomicsAndTrust() {
  return (
    <section className="section-pad" id="economics" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Why Reclaim costs less</div>
            <h2 style={{ marginTop: '12px' }}>The mechanism changed.<br />The price should too.</h2>
          </div>
          <p className="right">Old verification economics were built around proprietary databases, country-by-country coverage, and manual exceptions. Reclaim uses AI-assisted connectors and cryptographic verification to automate more of the standard path.</p>
        </div>
        <div className="economics-grid">
          <article className="economics-card">
            <div className="economics-tag mono">01 · COVERAGE</div>
            <h3>One global source layer</h3>
            <p>Use the same integration across employers, universities, airlines, hotels, and countries instead of stitching together regional vendors.</p>
          </article>
          <article className="economics-card">
            <div className="economics-tag mono">02 · AI</div>
            <h3>Connectors scale like software</h3>
            <p>AI accelerates how source connectors are created and maintained. Adding coverage no longer needs a traditional data partnership for every source.</p>
          </article>
          <article className="economics-card economics-card--accent">
            <div className="economics-tag mono">03 · CRYPTOGRAPHY</div>
            <h3>Proof replaces routine review</h3>
            <p>The returned fact is verified cryptographically. Client-side computation and fraud impossibility slash costs.</p>
          </article>
        </div>
        <div className="trust-heading" id="trust">
          <div className="eyebrow"><span className="dot"></span>Enterprise ready</div>
          <p>SOC 2 Type II · ISO 27001 · GDPR ready · Open-source cryptography · Independent audits</p>
        </div>
        <div className="trust-bar">
          <a href="mailto:admin@reclaimprotocol.org?subject=Compliance%20certificates" className="trust-action">
            <span className="trust-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="3" y="3" width="13" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <line x1="6" y1="8" x2="13" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="6" y1="11" x2="11" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14.5 16.2l1.1 1.1 2-2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="trust-label">Request certificates</span>
            <span className="trust-meta">SOC 2 · ISO 27001 · GDPR</span>
            <span className="trust-arrow">→</span>
          </a>
          <a href="https://github.com/reclaimprotocol" target="_blank" rel="noopener noreferrer" className="trust-action">
            <span className="trust-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M8 6L3 11l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 6l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12.5" y1="4" x2="9.5" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="trust-label">See open-source code</span>
            <span className="trust-meta">Available on GitHub</span>
            <span className="trust-arrow">↗</span>
          </a>
          <a href="https://trust.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="trust-action">
            <span className="trust-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V5l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M7.5 11l2.2 2.2L14.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="trust-label">Open trust center</span>
            <span className="trust-meta">Live cryptographic checks</span>
            <span className="trust-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Customer results ---------- */
function Results() {
  const cases = [
    {
      tag: 'GLOBAL EDUCATION',
      result: '7% → 44%',
      title: 'Conversion after replacing document verification',
      body: 'Observed in one customer deployment: a student platform expanded into hard-to-verify geographies while moving verification conversion from 7% to 44%.',
    },
    {
      tag: 'PRODUCTION SCALE',
      result: '4M+',
      title: 'Verifications processed',
      body: 'Reclaim-reported platform total as of July 2026 across education, employment, loyalty, and other verification categories.',
    },
  ];
  return (
    <section className="section-pad" id="results">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>New technology, battle tested.</div>
            <h2 style={{ marginTop: '12px' }}>Not a theory.<br />Already in production.</h2>
          </div>
          <p className="right">Reclaim Protocol powers verifications for several Fortune 500 companies.</p>
        </div>
        <div className="case-study-grid">
          {cases.map((item) => (
            <article className="case-study-card" key={item.tag}>
              <div className="case-study-tag mono">{item.tag}</div>
              <div className="case-study-result">{item.result}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="case-study-cta">
          <span>Want the customer, architecture, and before/after economics?</span>
          <a href="mailto:admin@reclaimprotocol.org?subject=Request%20case%20study%20under%20NDA" className="btn btn-primary">Request case study under NDA →</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Integration ---------- */
function Integration() {
  return (
    <section className="section-pad" id="integrate">
      <div className="wrap integration">
        <div>
          <div className="eyebrow"><span className="dot"></span>Your devs will love us</div>
          <h2 style={{ marginTop: '12px' }}>Global coverage without vendor sprawl.</h2>
          <p className="lead" style={{ marginTop: '16px' }}>Simple integration that a coding agent can one-shot, with great MCP support. Reclaim Protocol is built by devs for devs. Send them our docs.</p>
          <div className="checklist">
            <div className="check-row">Self-serve API keys. No sales call required to test.</div>
            <div className="check-row">Preconfigured full-stack flows for global verification.</div>
            <div className="check-row">AI-assisted provider tooling for new authenticated sources.</div>
            <div className="check-row">Published starting prices from free to $0.10 at Enterprise scale.</div>
          </div>
          <div className="row" style={{ marginTop: '28px' }}>
            <CopyDocsLinkButton />
            <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Integrate now →</a>
          </div>
        </div>
        <div className="code-block">
          <div className="code-head">
            <div className="dots"><span></span><span></span><span></span></div>
            <span>verify-enrollment.ts</span>
            <span style={{ color: 'var(--blue)' }}>● ready</span>
          </div>
          <pre className="code-body">
            <span className="tk-com">{'// 1. Initialize the verifier'}</span>{'\n'}
            <span className="tk-key">import</span>{' { '}<span className="tk-fn">ReclaimProofRequest</span>{' } '}<span className="tk-key">from</span>{' '}<span className="tk-str">&apos;@reclaimprotocol/js-sdk&apos;</span>{';'}{'\n\n'}
            <span className="tk-key">const</span>{' req = '}<span className="tk-key">await</span>{' '}<span className="tk-fn">ReclaimProofRequest</span>{'.'}<span className="tk-blue">init</span>{'('}{'\n'}
            {'  APP_ID,'}{'\n'}
            {'  APP_SECRET,'}{'\n'}
            {'  '}<span className="tk-str">&apos;university-enrollment&apos;</span>{'  '}<span className="tk-com">{'// or \'employer-income\', \'airline-tier\'…'}</span>{'\n'}
            {');'}{'\n\n'}
            <span className="tk-com">{'// 2. Send the user through the flow'}</span>{'\n'}
            <span className="tk-key">await</span>{' req.'}<span className="tk-blue">triggerReclaimFlow</span>{'();'}{'\n\n'}
            <span className="tk-com">{'// 3. Receive a cryptographic proof. Done.'}</span>{'\n'}
            {'req.'}<span className="tk-blue">onProof</span>{'('}<span className="tk-key">proof</span>{' => {'}{'\n'}
            {'  '}<span className="tk-fn">user</span>{'.'}<span className="tk-blue">grantStudentDiscount</span>{'(proof);'}{'\n'}
            {'});'}
          </pre>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="section-pad-sm" id="pilot">
      <div className="wrap">
        <div className="final-cta">
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <span className="dot" style={{ background: '#fff' }}></span>READY WHEN YOU ARE
            </div>
            <h2 style={{ marginTop: '14px' }}>Run a pilot.<br />See the difference.</h2>
            <p>
              Put Reclaim beside the incumbent you already pay. Compare geographic coverage, conversion, and the final bill.
            </p>
            <div className="cta-fineprint mono">
              <span>● Pilot-friendly</span>
              <span>● Global coverage</span>
              <span>● Enterprise SLAs</span>
            </div>
          </div>
          <div className="cta-side">
            <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-white">Start free →</a>
            <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-outline-w">Talk to the founder →</a>
            <a href="#contact" className="cta-side-link mono">Contact us ↑</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <img className="brand-mark" src="/reclaim-logo.png" alt="Reclaim Protocol" />
              <span>Reclaim Protocol</span>
            </Link>
            <p className="foot-tag">Global education and employment verification, at enterprise scale.</p>
            <div className="foot-socials">
              <a href="https://github.com/reclaimprotocol" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="foot-social">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M9 0a9 9 0 00-2.85 17.54c.45.08.62-.2.62-.43v-1.66c-2.5.54-3.03-1.07-3.03-1.07-.41-1.04-1-1.32-1-1.32-.81-.55.06-.54.06-.54.9.06 1.37.93 1.37.93.8 1.37 2.1.97 2.61.74.08-.58.31-.97.57-1.2-2-.22-4.1-1-4.1-4.46 0-.98.35-1.79.93-2.42-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.49.93a8.65 8.65 0 014.54 0c1.72-1.17 2.48-.93 2.48-.93.5 1.25.18 2.17.09 2.4.58.63.92 1.44.92 2.42 0 3.47-2.1 4.24-4.11 4.46.32.28.6.83.6 1.67v2.47c0 .24.17.52.63.43A9 9 0 009 0z" />
                </svg>
              </a>
              <a href="https://x.com/reclaimprotocol" target="_blank" rel="noopener noreferrer" aria-label="X" className="foot-social">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M13.86 1.5h2.5l-5.46 6.24L17 16.5h-5.02l-3.93-5.14L3.55 16.5H1.04l5.84-6.68L1 1.5h5.15l3.55 4.7L13.86 1.5zm-.88 13.5h1.39L5.08 2.94H3.59L12.98 15z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/reclaimprotocol/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="foot-social">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M3.7 6.06H1V16.5h2.7V6.06zM2.35 1.5C1.43 1.5.85 2.1.85 2.9c0 .77.55 1.4 1.45 1.4h.02c.94 0 1.52-.63 1.52-1.4 0-.8-.58-1.4-1.49-1.4zM16.5 16.5v-5.98c0-3.2-1.71-4.7-3.99-4.7-1.84 0-2.67 1.01-3.13 1.72V6.06H6.68c.04.76 0 10.44 0 10.44h2.7v-5.83c0-.24.02-.49.09-.66.2-.49.65-.99 1.4-.99.99 0 1.39.75 1.39 1.85v5.63h2.74z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5>Solutions</h5>
            <ul>
              <li><Link href="/employment">Employment &amp; income</Link></li>
              <li><Link href="/education">Education enrollment</Link></li>
              <li><a href="mailto:admin@reclaimprotocol.org?subject=Verification%20request">Something else →</a></li>
            </ul>
          </div>
          <div>
            <h5>Developers</h5>
            <ul>
              <li><a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="https://dev.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Get API keys</a></li>
              <li><a href="https://github.com/reclaimprotocol" target="_blank" rel="noopener noreferrer">Open source</a></li>
              <li><a href="https://blog.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5>Trust</h5>
            <ul>
              <li><a href="https://trust.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Trust center</a></li>
              <li><a href="mailto:admin@reclaimprotocol.org?subject=Compliance%20certificates">SOC 2 · ISO · GDPR</a></li>
              <li><a href="#trust">Security audits</a></li>
              <li><a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer">Talk to founder</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="foot-legal">
            <span>© 2026 <a href="https://creatoros.co" target="_blank" rel="noopener noreferrer">CreatorOS Inc.</a> All rights reserved.</span>
            <span>Reclaim Protocol is a product operated by <a href="https://creatoros.co" target="_blank" rel="noopener noreferrer">CreatorOS Inc.</a></span>
          </span>
          <span className="foot-bottom-meta mono">
            <a href="https://reclaimprotocol.notion.site/Privacy-Policy-Reclaim-Protocol-115275b816cb80ab94b8ca8616673658" target="_blank" rel="noopener noreferrer">Privacy</a>
            <a href="https://reclaimprotocol.notion.site/Terms-of-Service-Reclaim-Protocol-13c275b816cb80b1a5ade76c6f2532dd" target="_blank" rel="noopener noreferrer">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <Hero />
      <Contact />
      <Verticals />
      <Results />
      <EconomicsAndTrust />
      <HowItWorks />
      <Integration />
      <FinalCTA />
      <Footer />
    </>
  );
}
