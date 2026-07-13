'use client';

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
          <a href="/#pricing">Pricing</a>
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

function Breadcrumb() {
  return (
    <div className="breadcrumb-wrap">
      <div className="wrap">
        <div className="breadcrumb mono">
          <a href="/">Reclaim Protocol</a>
          <span>›</span>
          <a href="/#verify">Solutions</a>
          <span>›</span>
          <span className="breadcrumb-current">Education enrollment</span>
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
          <div className="eyebrow"><span className="dot"></span>STUDENT VERIFICATION</div>
          <h1 style={{ marginTop: '20px' }}>
            Verify any student.<br />
            <strong>Any university. Any country.</strong>
          </h1>
          <p className="lead" style={{ marginTop: '20px' }}>
            Live enrollment data from <b style={{ color: 'var(--ink)' }}>29,000+ universities in 190+ countries</b> — pulled directly from the registrar&apos;s own systems, not a country specific central database that refreshes twice a year.
          </p>
          <div className="hero-actions">
            <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Talk to founder →</a>
            <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Integrate now →</a>
          </div>
          <div className="hero-meta">
            <span><b>29K+</b> universities</span>
            <span><b>190+</b> countries</span>
            <span><b>30+</b> languages</span>
            <span><b>0%</b> fraud rates</span>
          </div>
        </div>
        <div className="vert-hero-aside">
          <div className="uni-grid-wrap">
            <div className="uni-grid-head mono">Verified from</div>
            <div className="uni-grid">
              {[
                { name: 'Stanford', src: '/uni-stanford.png' },
                { name: 'MIT', src: '/uni-mit.png' },
                { name: 'Oxford', src: '/uni-oxford.png' },
                { name: 'IIT Bombay', src: '/uni-iitb.png' },
                { name: 'USP', src: '/uni-usp.png' },
                { name: 'Tsinghua', src: '/uni-tsinghua.png' },
                { name: 'Universitas Indonesia', src: '/uni-ui.png' },
                { name: 'Heidelberg', src: '/uni-heidelberg.png' },
              ].map((u) => (
                <div className="uni-cell" key={u.name} title={u.name}>
                  <img src={u.src} alt={u.name} loading="lazy" />
                </div>
              ))}
            </div>
            <div className="uni-grid-foot">
              <span><b>29,000+</b> universities · <b>190+</b> countries · <b>30+</b> languages</span>
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
      tag: '01 · DISCOUNTS',
      title: 'Student discounts & pricing',
      body: "Verify enrollment in 30 seconds for Spotify, Adobe, Apple, news outlets, or any pricing tier — without asking the user for a transcript upload, a .edu email, or a screenshot of their student ID.",
      foot: "Real students get in. AI-generated fakes don't.",
    },
    {
      tag: '02 · BACKGROUND',
      title: 'Education background checks',
      body: "Verify degrees, majors, dates of graduation, and transcripts for pre-employment screening — globally. Diploma mills, GPA inflation, and AI-generated transcripts all fail at the source.",
      foot: 'Cuts background-check time from weeks to seconds.',
    },
    {
      tag: '03 · ELIGIBILITY',
      title: 'Student-loan & scholarship eligibility',
      body: "Confirm enrollment status, year, and full-time/part-time directly with the registrar — for loan origination, scholarship platforms, and student-housing eligibility.",
      foot: 'No paperwork. No phone calls to bursar offices. Verified at the source.',
    },
  ];
  return (
    <section className="section-pad" id="use-cases" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Use cases</div>
            <h2 style={{ marginTop: '12px' }}>Three places student fraud<br />is silently eating margin.</h2>
          </div>
          <p className="right">
            Wherever &ldquo;student&rdquo; status unlocks a discount, a lower interest rate, or a
            background-check pass — AI-generated proof is already getting through. Pull
            from the source instead.
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
    { tag: 'Geography', head: 'Global. Not just American.', body: 'US-only verifiers cover ~6,500 American institutions. Reclaim covers 29,000+ universities in 190+ countries — including Bangladesh, Indonesia, Brazil, the EU, India. Same flow. Same API.' },
    { tag: 'Source of truth', head: 'Live registrar data. Not a snapshot.', body: "The dominant US clearing-house pulls registrar files on a schedule — weeks or months out of date. Reclaim queries the registrar at the moment of verification. Fresh today, fresh tomorrow." },
    { tag: 'Forgery resistance', head: 'No screenshots. No PDFs. No selfies of student IDs.', body: "In 2026, any one of those can be generated by a free chat model in under a minute. The only signal AI can't forge is one fetched directly from the registrar's authenticated session." },
    { tag: 'PII surface', head: 'One field. Cryptographically scoped.', body: "A traditional verifier pulls the student's entire record — name, DOB, transcripts, addresses, financial-aid status. Reclaim returns the single field you asked for. Everything else stays on the student's device." },
    { tag: 'Coverage', head: 'Vocational, certificate, online — all in.', body: 'Legacy verifiers cover degree-granting institutions. Reclaim covers anywhere a student has an authenticated login: bootcamps, online universities, vocational programs, K-12 portals.' },
    { tag: 'Integration', head: 'API key in 10 lines. No sales call required.', body: 'Standard onboarding for incumbents: weeks of sales calls and paperwork before you can verify a single student. With Reclaim: a self-serve API key, in test mode this afternoon.' },
  ];
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>vs. legacy student verification</div>
            <h2 style={{ marginTop: '12px' }}>The clearinghouse model<br />wasn&apos;t built for the global internet.</h2>
          </div>
          <p className="right">
            The dominant student-verification options today were built for US institutions and US students. Reclaim Protocol was built for the global, online, AI-saturated student population that actually exists.
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
            SOC 2 Type II · ISO 27001 · GDPR ready. Audited by Zellic and ZKSecurity.
            Open source on GitHub. Your security team can verify the claim — they don&apos;t have to take our word for it.
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
            <h2 style={{ marginTop: '14px' }}>Eliminate student-discount fraud.<br />Globally. In a week.</h2>
            <p>Run it against your toughest verifications — students from any university, in any country, in any language. If we can&apos;t catch the fraud, you don&apos;t pay.</p>
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
              <a href="https://www.linkedin.com/company/reclaimprotocol/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="foot-social">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M3.7 6.06H1V16.5h2.7V6.06zM2.35 1.5C1.43 1.5.85 2.1.85 2.9c0 .77.55 1.4 1.45 1.4h.02c.94 0 1.52-.63 1.52-1.4 0-.8-.58-1.4-1.49-1.4zM16.5 16.5v-5.98c0-3.2-1.71-4.7-3.99-4.7-1.84 0-2.67 1.01-3.13 1.72V6.06H6.68c.04.76 0 10.44 0 10.44h2.7v-5.83c0-.24.02-.49.09-.66.2-.49.65-.99 1.4-.99.99 0 1.39.75 1.39 1.85v5.63h2.74z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h5>Solutions</h5>
            <ul>
              <li><a href="/employment">Employment &amp; income</a></li>
              <li><a href="/education">Education enrollment</a></li>
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
              <li><a href="/#trust">Security audits</a></li>
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

export default function EducationPage() {
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
