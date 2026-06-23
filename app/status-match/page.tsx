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
          <span className="breadcrumb-current">Loyalty &amp; status match</span>
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
          <div className="eyebrow"><span className="dot"></span>STATUS MATCH</div>
          <h1 style={{ marginTop: '20px' }}>
            Status match.<br />
            <strong>Cryptographically verified.</strong>
          </h1>
          <p className="lead" style={{ marginTop: '20px' }}>
            Screenshots were state-of-the-art in 2006. In 2026, a free chat model renders a flawless Platinum status page in 30 seconds.{' '}
            <b style={{ color: 'var(--ink)' }}>The only way to be sure is to verify directly with the airline.</b>
          </p>
          <div className="hero-actions">
            <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Talk to founder →</a>
            <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Integrate now →</a>
          </div>
          <div className="hero-meta">
            <span><b>100+</b> programs</span>
            <span><b>30s</b> to verify</span>
            <span><b>0%</b> screenshot fraud</span>
            <span><b>0%</b> data leakage</span>
          </div>
        </div>
        <div className="vert-hero-aside">
          <div className="award-card">
            <div className="award-card-img">
              <img src="/loyalty-awards.png" alt="Loyalty Awards" loading="lazy" />
            </div>
            <div className="award-card-meta">
              <div className="award-card-eyebrow mono">★ Winner · 2025</div>
              <div className="award-card-title">Startup of the Year</div>
              <div className="award-card-sub">Loyalty Awards · Amsterdam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    { tag: '01', title: 'Airline status match', body: "Match a Diamond, Platinum, or Star Alliance Gold elsewhere — straight from the user's airline session. No screenshots, no boarding-pass photos." },
    { tag: '02', title: 'Hotel loyalty match', body: 'Cross-match Marriott Titanium, Hilton Diamond, Hyatt Globalist into your hotel&apos;s top tier. The proof comes from the source program.' },
    { tag: '03', title: 'Credit-card lounge access', body: 'Verify a premium-card tier (Amex Platinum, Centurion, Visa Infinite) for lounge / partner access — without holding card data.' },
    { tag: '04', title: 'Cruise & rental tier', body: 'Match status across cruises, rental cars, and rideshare — for any program with a customer login.' },
  ];
  return (
    <section className="section-pad" id="use-cases" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Use cases</div>
            <h2 style={{ marginTop: '12px' }}>Anywhere tier matters.<br />Anywhere a screenshot fails.</h2>
          </div>
          <p className="right">
            Loyalty has become a $300B asset and the #1 acquisition lever in travel.
            AI-generated proofs are eating into every program. We close the gap at the source.
          </p>
        </div>
        <div className="sm-usecase-grid">
          {cases.map((c) => (
            <div className="sm-usecase-card" key={c.tag}>
              <div className="sm-usecase-tag mono">{c.tag}</div>
              <h3 className="sm-usecase-h">{c.title}</h3>
              <p className="sm-usecase-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SnakeOil() {
  return (
    <section className="section-pad" id="snake-oil">
      <div className="wrap">
        <div className="snake-grid">
          <div className="snake-copy">
            <div className="eyebrow"><span className="dot"></span>vs. screenshot-based verification</div>
            <h2 style={{ marginTop: '12px' }}>
              &ldquo;Our secret ingredient<br />catches the fakes.&rdquo;
            </h2>
            <p className="snake-rebuttal mono">No, it doesn&apos;t.</p>
            <p className="snake-body">
              Heuristic detection — OCR, font matching, EXIF analysis, image forensics — was workable when fakes were built in Photoshop. In 2026, a twelve-year-old with ChatGPT generates a flawless Platinum status page <b>in 30 seconds</b>, with the right typography, correct color profile, and synthetic EXIF. Every &ldquo;proprietary detection engine&rdquo; is just a faster version of the same OCR + LLM toolkit the fraudster used.
            </p>
            <p className="snake-body">
              You can&apos;t out-AI an AI fake. Detection is an arms race the defender is already losing.
            </p>
            <p className="snake-kicker">
              <b>If they won&apos;t tell you how it works, it&apos;s because it doesn&apos;t.</b>{' '}
              Reclaim&apos;s cryptography is published, audited, open-source. No magic ingredient. Just math.
            </p>
          </div>
          <div className="snake-visual">
            <div className="vs-card vs-card--them">
              <div className="vs-card-tag mono">SCREENSHOT-BASED</div>
              <div className="vs-card-h">Detect after the fact.</div>
              <ul className="vs-list">
                <li>● OCR + image forensics</li>
                <li>● Font / EXIF heuristics</li>
                <li>● &ldquo;Proprietary&rdquo; detection score</li>
                <li className="vs-list-bad">✕ Every fake improvement breaks it</li>
              </ul>
              <div className="vs-card-foot mono">— same tools that made the fake</div>
            </div>
            <div className="vs-card-arrow">↓</div>
            <div className="vs-card vs-card--us">
              <div className="vs-card-tag mono">RECLAIM</div>
              <div className="vs-card-h">Verify at the source.</div>
              <ul className="vs-list">
                <li>● No screenshot in the loop</li>
                <li>● Proof bound to the airline&apos;s TLS session</li>
                <li>● Even we can&apos;t fake it</li>
                <li className="vs-list-good">✓ Mathematically impossible to forge</li>
              </ul>
              <div className="vs-card-foot mono">— prevention, not detection</div>
            </div>
          </div>
        </div>
        <a className="snake-video" href="https://www.youtube.com/watch?v=NLYJjBBnoWA" target="_blank" rel="noopener noreferrer">
          <div className="snake-video-thumb">
            <img className="snake-video-img" src="https://img.youtube.com/vi/NLYJjBBnoWA/hqdefault.jpg" alt="" loading="lazy" />
            <div className="snake-video-play">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <polygon points="7,4 18,11 7,18" fill="#fff" />
              </svg>
            </div>
          </div>
          <div className="snake-video-meta">
            <div className="snake-video-eyebrow mono">▶ WATCH</div>
            <div className="snake-video-title">We faked a status screenshot in 30 seconds.</div>
            <div className="snake-video-sub">No Photoshop. No premium AI tool. Just ChatGPT and a prompt. With Reclaim Protocol, there is no possibility to use AI, because AI cannot fake cryptography.</div>
          </div>
          <div className="snake-video-cta mono">YouTube ↗</div>
        </a>
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
            SOC 2 Type II · ISO 27001 · GDPR ready. Audited by Zellic and ZKSecurity. Open source on GitHub.
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
            <h2 style={{ marginTop: '14px' }}>Stop matching fakes.<br />Pilot in a week.</h2>
            <p>Plug in a test API key. Throw your toughest status-match cases at it. If we can&apos;t catch the fake, you don&apos;t pay.</p>
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

export default function StatusMatchPage() {
  return (
    <>
      <Nav />
      <Breadcrumb />
      <Hero />
      <UseCases />
      <SnakeOil />
      <TrustBar />
      <FinalCTA />
      <Footer />
    </>
  );
}
