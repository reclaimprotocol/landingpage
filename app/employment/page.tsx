'use client';

const SOURCES = [
  { name: 'ADP', src: '/logo-adp.png' },
  { name: 'Workday', src: '/logo-workday.png' },
  { name: 'Paychex', src: '/logo-paychex.png' },
  { name: 'Gusto', src: '/logo-gusto.png' },
  { name: 'IRS', src: '/logo-irs.png' },
  { name: 'HMRC', src: '/logo-hmrc.png' },
  { name: 'Uber', src: '/logo-uber.png' },
  { name: 'DoorDash', src: '/logo-doordash.png' },
];

function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="/" className="brand">
          <img className="brand-mark" src="/reclaim-logo.png" alt="Reclaim Protocol" />
          <span>Reclaim Protocol</span>
        </a>
        <nav className="nav-links">
          <a href="/#verify">Solutions</a>
          <a href="https://trust.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Trust Center</a>
          <a href="https://drive.google.com/file/d/1Tok4J6mv7PwRCbwxVNhv4alS82sQJI4E/view" target="_blank" rel="noopener noreferrer">Whitepaper</a>
          <a href="https://blog.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Blog</a>
        </nav>
        <div className="nav-cta">
          <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-ghost">Docs</a>
          <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Talk to founder →</a>
        </div>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <div className="breadcrumb-wrap">
      <div className="wrap">
        <div className="breadcrumb mono">
          <a href="/">Reclaim Protocol</a>
          <span>›</span>
          <a href="/#verify">Solutions</a>
          <span>›</span>
          <span className="breadcrumb-current">Employment &amp; income</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="vert-hero">
      <div className="wrap vert-hero-inner">
        <div>
          <div className="eyebrow"><span className="dot"></span>EMPLOYMENT &amp; INCOME VERIFICATION</div>
          <h1 style={{ marginTop: '20px' }}>
            Income &amp; employment.<br />
            <strong>Without the phishing.</strong>
          </h1>
          <p className="lead" style={{ marginTop: '20px' }}>
            Verify employer, gross income, work history, and tenure — directly from payroll systems, tax authorities, and gig platforms.{' '}
            <b style={{ color: 'var(--ink)' }}>Anywhere in the world. Cryptographically secure.</b>
          </p>
          <div className="hero-actions">
            <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Talk to founder →</a>
            <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Integrate now →</a>
          </div>
          <div className="hero-meta">
            <span><b>10K+</b> employers</span>
            <span><b>90+</b> countries</span>
            <span><b>30s</b> to verify</span>
            <span><b>0%</b> data leakage</span>
          </div>
        </div>
        <div className="vert-hero-aside">
          <div className="src-grid-wrap">
            <div className="src-grid-head mono">Verified directly from</div>
            <div className="src-grid">
              {SOURCES.map((s) => (
                <div className="src-cell" key={s.name} title={s.name}>
                  <img src={s.src} alt={s.name} loading="lazy" />
                </div>
              ))}
            </div>
            <div className="src-grid-foot">
              <span>Payroll · Tax · Gig &middot; HR — <b>10,000+ sources</b></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    {
      tag: '01 · MORTGAGE',
      title: 'Mortgage origination',
      body: "The borrower logs in on the payroll system itself — never on a third-party flow asking for credentials. You receive a cryptographic proof that any auditor can independently re-verify, even after the verifier is gone.",
      foot: 'Tamper-evident proof. Zero credential capture.',
    },
    {
      tag: '02 · LENDING',
      title: 'Personal lending & BNPL',
      body: "Income proofs that belong to you alone — not data quietly resold across credit, insurance, marketing, and ad networks. Lower regulator risk, lower data-broker exposure, higher borrower trust.",
      foot: 'Zero data resale. Zero retention by us.',
    },
    {
      tag: '03 · BACKGROUND',
      title: 'Pre-employment checks',
      body: "Verify a single fact — employer, title, dates — anywhere a candidate can log into their HR system. We don't scrape 170 HR fields, store them, or resell them. Only the one fact you asked for is returned.",
      foot: 'Global by default. One field, not 170.',
    },
  ];
  return (
    <section className="section-pad" id="use-cases" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Use cases</div>
            <h2 style={{ marginTop: '12px' }}>Yesterday&apos;s service providers.<br />Tomorrow&apos;s liability.</h2>
          </div>
          <p className="right">
            We don&apos;t replace your fraud team. We replace the brittle document-and-database layer and phishing service providers.
          </p>
        </div>
        <div className="usecase-grid">
          {cases.map((c) => (
            <div className="usecase-card" key={c.tag}>
              <div className="usecase-tag mono">{c.tag}</div>
              <h3 className="usecase-h">{c.title}</h3>
              <p className="usecase-body">{c.body}</p>
              <div className="usecase-foot">{c.foot}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Takedown() {
  const pts = [
    { tag: 'Phishing', head: "We never ask users to type their payroll login into our app.", body: "Aggregators capture the user's payroll credentials and scrape 170+ HR fields in the process. Reclaim runs the login on the source itself. The math makes it impossible for us to see the password." },
    { tag: 'Stale databases', head: 'Live data from the source. Not a 30-day-old DB record.', body: "The 1970s-era employment database refreshes whenever the payroll partner pushes a snapshot. Reclaim pulls today's pay stub today, straight from the source." },
    { tag: 'Tamper risk', head: "Cryptographic proofs. Even we can't edit them.", body: "A central database is a single point of compromise — one breach, one insider, one subpoena and the whole archive moves. A Reclaim proof is bound to a TLS session with the source's real certificate. Unforgeable. By anyone." },
    { tag: 'Legal grey areas', head: 'Zero data retention. Zero compliance surface.', body: "Aggregators hold the user's data for 30+ days after the contract ends. Reclaim stores nothing — the proof goes from the user's device straight to your callback URL. There's no archive to subpoena, breach, or audit." },
    { tag: 'Geography', head: 'Global by default. Not US-only.', body: "Both incumbents are bound by US payroll partnerships. Reclaim works wherever a worker can log into their payroll, tax, or gig platform — Brazil, Indonesia, India, the EU, anywhere." },
    { tag: 'Integration', head: 'API key in 10 lines. No sales call required.', body: "Standard procurement timeline for incumbents: six weeks of sales calls before you can run a single verification. Standard Reclaim timeline: 10 lines of code, in test mode this afternoon." },
  ];
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>vs. the old guard</div>
            <h2 style={{ marginTop: '12px' }}>Income verification was<br />stuck in 1995. Until now.</h2>
          </div>
          <p className="right">
            The incumbent is a 50-year-old credit-bureau database. The other phishes payroll credentials.
          </p>
        </div>
        <div className="takedown">
          {pts.map((p) => (
            <div className="takedown-card" key={p.tag}>
              <div className="takedown-tag mono">{p.tag}</div>
              <h3 className="takedown-h">{p.head}</h3>
              <p className="takedown-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Compliance &amp; security</div>
            <h2 style={{ marginTop: '12px' }}>Compliant by design.<br />Secured by cryptography.</h2>
          </div>
          <p className="right">
            SOC 2 Type II · ISO 27001 · GDPR ready. Audited by Zellic and ZKSecurity. Open source on GitHub. Your security team can verify the claim.
          </p>
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

function FinalCTA() {
  return (
    <section className="section-pad-sm">
      <div className="wrap">
        <div className="final-cta">
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <span className="dot" style={{ background: '#fff' }}></span>READY WHEN YOU ARE
            </div>
            <h2 style={{ marginTop: '14px' }}>Run it on your worst income fraud.<br />This week.</h2>
            <p>Plug in a test API key in 10 lines of code. Throw your underwriting team&apos;s hardest examples at it. If we can&apos;t catch it, you don&apos;t pay.</p>
            <div className="cta-fineprint mono">
              <span>● No sales call to start</span>
              <span>● Free test mode</span>
              <span>● Production in days, not quarters</span>
            </div>
          </div>
          <div className="cta-side">
            <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-white">Talk to founder →</a>
            <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-outline-w">Integrate now →</a>
            <a href="mailto:admin@reclaimprotocol.org?subject=Pilot%20request" className="cta-side-link mono">admin@reclaimprotocol.org ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="/" className="brand">
              <img className="brand-mark" src="/reclaim-logo.png" alt="Reclaim Protocol" />
              <span>Reclaim Protocol</span>
            </a>
            <p className="foot-tag">The consumer verification AI can&apos;t fake. Compliant by design. Secured by cryptography.</p>
            <div className="foot-socials">
              <a href="https://github.com/reclaimprotocol" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="foot-social">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0a9 9 0 00-2.85 17.54c.45.08.62-.2.62-.43v-1.66c-2.5.54-3.03-1.07-3.03-1.07-.41-1.04-1-1.32-1-1.32-.81-.55.06-.54.06-.54.9.06 1.37.93 1.37.93.8 1.37 2.1.97 2.61.74.08-.58.31-.97.57-1.2-2-.22-4.1-1-4.1-4.46 0-.98.35-1.79.93-2.42-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.49.93a8.65 8.65 0 014.54 0c1.72-1.17 2.48-.93 2.48-.93.5 1.25.18 2.17.09 2.4.58.63.92 1.44.92 2.42 0 3.47-2.1 4.24-4.11 4.46.32.28.6.83.6 1.67v2.47c0 .24.17.52.63.43A9 9 0 009 0z" /></svg>
              </a>
              <a href="https://x.com/reclaimprotocol" target="_blank" rel="noopener noreferrer" aria-label="X" className="foot-social">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor"><path d="M13.86 1.5h2.5l-5.46 6.24L17 16.5h-5.02l-3.93-5.14L3.55 16.5H1.04l5.84-6.68L1 1.5h5.15l3.55 4.7L13.86 1.5zm-.88 13.5h1.39L5.08 2.94H3.59L12.98 15z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/reclaim-protocol" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="foot-social">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M3.7 6.06H1V16.5h2.7V6.06zM2.35 1.5C1.43 1.5.85 2.1.85 2.9c0 .77.55 1.4 1.45 1.4h.02c.94 0 1.52-.63 1.52-1.4 0-.8-.58-1.4-1.49-1.4zM16.5 16.5v-5.98c0-3.2-1.71-4.7-3.99-4.7-1.84 0-2.67 1.01-3.13 1.72V6.06H6.68c.04.76 0 10.44 0 10.44h2.7v-5.83c0-.24.02-.49.09-.66.2-.49.65-.99 1.4-.99.99 0 1.39.75 1.39 1.85v5.63h2.74z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h5>Solutions</h5>
            <ul>
              <li><a href="/employment">Employment &amp; income</a></li>
              <li><a href="/education">Education enrollment</a></li>
              <li><a href="/status-match">Loyalty &amp; status match</a></li>
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
              <li><a href="/#compliance">Security audits</a></li>
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

export default function EmploymentPage() {
  return (
    <>
      <Nav />
      <Breadcrumb />
      <Hero />
      <UseCases />
      <Takedown />
      <TrustBar />
      <FinalCTA />
      <Footer />
    </>
  );
}
