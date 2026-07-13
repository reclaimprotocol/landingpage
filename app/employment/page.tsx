import Image from 'next/image';
import Link from 'next/link';

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

const COMPARISON_ROWS = [
  {
    label: 'Published footprint',
    reclaim: '90+ countries',
    argyle: 'U.S. only (90%)',
    truv: 'U.S. only (96%)',
    measureOne: 'U.S. only (~100%)',
    workNumber: '2.6M employers',
  },
  {
    label: 'Published unit price',
    reclaim: '$0.10 per verification at full Enterprise usage',
    argyle: <>
      No published Argyle unit price · its ROI model assumes{' '}
      <a href="https://www.argyle.com/blog/how-payroll-connections-drive-roi-in-mortgage-lending" target="_blank" rel="noopener noreferrer">$10–$15 for direct payroll connections ↗</a>
    </>,
    truv: <>
      No published dollar unit price · $5–$25 reported ·{' '}
      <a href="https://truv.com/pricing" target="_blank" rel="noopener noreferrer">official pricing page ↗</a>
    </>,
    measureOne: <>
      No current published unit price ·{' '}
      <a href="https://web.archive.org/web/20250325061214/https://www.measureone.com/pricing" target="_blank" rel="noopener noreferrer">$1.25–$6 previously published pricing ↗</a>
    </>,
    workNumber: <>
      $69.75 pay-as-you-go starting price · enterprise pricing not published ·{' '}
      <a href="https://legalclarity.org/usps-employment-verification-process-for-verifiers/" target="_blank" rel="noopener noreferrer">third-party source ↗</a>
    </>,
  },
  {
    label: 'Source model',
    reclaim: 'User logs in to the actual source website · secured by cryptography',
    argyle: 'User logs in through a third-party connection widget · can raise phishing concerns',
    truv: 'User logs in through a third-party connection widget · can raise phishing concerns',
    measureOne: 'User logs in through a third-party connection widget · can raise phishing concerns',
    workNumber: 'Employer-contributed records selected using candidate SSN',
  },
  {
    label: 'What you can buy',
    reclaim: 'Current employer · previous employers on custom plans',
    argyle: 'Primarily current employer',
    truv: 'Primarily current employer',
    measureOne: 'Primarily current employer',
    workNumber: 'Current and past employers',
  },
];

function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <Image className="brand-mark" src="/reclaim-logo.png" alt="Reclaim Protocol" width={26} height={26} priority />
          <span>Reclaim Protocol</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/#verify">Solutions</Link>
          <Link href="/#pricing">Pricing</Link>
          <a href="https://trust.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Trust Center</a>
          <a href="https://blog.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Blog</a>
          <a href="https://drive.google.com/file/d/1Tok4J6mv7PwRCbwxVNhv4alS82sQJI4E/view" target="_blank" rel="noopener noreferrer">Whitepaper</a>
        </nav>
        <div className="nav-cta">
          <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-ghost">Talk to founder</a>
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
          <Link href="/">Reclaim Protocol</Link>
          <span>›</span>
          <Link href="/#verify">Solutions</Link>
          <span>›</span>
          <span className="breadcrumb-current">Employment &amp; income</span>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="vert-hero displacement-hero">
      <div className="wrap vert-hero-inner">
        <div>
          <div className="eyebrow"><span className="dot"></span>GLOBAL EMPLOYMENT VERIFICATION · FROM $0.10 AT SCALE</div>
          <h1 style={{ marginTop: '20px' }}>
            Global coverage.<br />
            <strong>No legacy pricing.</strong>
          </h1>
          <p className="lead" style={{ marginTop: '20px' }}>
            The Work Number, Argyle, Truv, and MeasureOne cannot match both Reclaim&apos;s reach across 90+ countries and its published $0.10 Enterprise rate. Stop paying yesterday&apos;s prices for a single-country solution.
          </p>
          <div className="hero-actions">
            <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Start free →</a>
            <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Talk to founder →</a>
          </div>
          <div className="hero-meta">
            <span><b>90+</b> countries</span>
            <span><b>$0.10</b> at scale</span>
            <span><b>2–30s</b> proof generation</span>
          </div>
        </div>
        <div className="vert-hero-aside">
          <div className="src-grid-wrap">
            <div className="src-grid-head mono">Live sources around the world</div>
            <div className="src-grid">
              {SOURCES.map((source) => (
                <div className="src-cell" key={source.name} title={source.name}>
                  <Image src={source.src} alt={source.name} width={96} height={48} />
                </div>
              ))}
            </div>
            <div className="src-grid-foot">
              <span>Payroll · Tax · HR · Gig — across <b>90+ countries</b></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="section-pad displacement-comparison" id="compare">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>How we compare</div>
            <h2 style={{ marginTop: '12px' }}>Global coverage is not an edge case.</h2>
          </div>
          <p className="right">
            None of the incumbents compared here publishes both multi-country coverage and a per-verification price. Reclaim does.
          </p>
        </div>

        <div className="comparison-wrap" role="region" aria-label="Employment verification provider comparison" tabIndex={0}>
          <table className="comparison-table">
            <caption>Reclaim Protocol compared with Argyle, Truv, MeasureOne and The Work Number</caption>
            <thead>
              <tr>
                <th scope="col">Dimension</th>
                <th scope="col" className="comparison-highlight">Reclaim</th>
                <th scope="col">Argyle</th>
                <th scope="col">Truv</th>
                <th scope="col">MeasureOne</th>
                <th scope="col">The Work Number</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td className="comparison-highlight">{row.reclaim}</td>
                  <td>{row.argyle}</td>
                  <td>{row.truv}</td>
                  <td>{row.measureOne}</td>
                  <td>{row.workNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function WhySwitch() {
  const reasons = [
    {
      tag: '01 · GLOBAL',
      title: 'Stop treating the rest of the world as an edge case.',
      body: 'Run one verification flow across 90+ countries instead of building a U.S. stack first and a country-by-country fallback later.',
      foot: '90+ countries · one integration',
    },
    {
      tag: '02 · PRICE',
      title: 'A verification should cost cents, not tens of dollars.',
      body: "Advancements in AI and cryptography have slashed prices. Don't overpay.",
      foot: 'Published starting rates · free tier included',
    },
    {
      tag: '03 · PRIVACY FIRST',
      title: 'Secured by technology, not promises.',
      body: <>
        Don&apos;t rely on our compliance certificates—review our security yourself at{' '}
        <a href="https://trust.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">trust.reclaimprotocol.org</a>.
      </>,
      foot: 'SOC 2 · ISO 27001 · GDPR',
    },
  ];

  return (
    <section className="section-pad displacement-switch" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>WHY SWITCH</div>
            <h2 style={{ marginTop: '12px' }}>Global Reach.<br />Lowest Prices.</h2>
          </div>
          <p className="right">
            The market already has credible providers. Reclaim wins when your product needs worldwide coverage and radically better unit economics.
          </p>
        </div>
        <div className="usecase-grid displacement-grid">
          {reasons.map((reason) => (
            <article className="usecase-card displacement-card" key={reason.tag}>
              <div className="usecase-tag mono">{reason.tag}</div>
              <h3 className="usecase-h">{reason.title}</h3>
              <p className="usecase-body">{reason.body}</p>
              <div className="usecase-foot">{reason.foot}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    {
      tag: '01',
      title: 'Hiring',
      body: 'Confirm a candidate’s current employer, title, and supported income facts before making the offer—across 90+ countries.',
      foot: 'Employer · title · income',
    },
    {
      tag: '02',
      title: 'Tenant screening',
      body: 'Confirm current employment and income inside the rental application instead of chasing documents and employer callbacks.',
      foot: 'Employment · income',
    },
    {
      tag: '03',
      title: 'Background verification',
      body: 'Let candidates verify current employment and, on custom plans, previous employers from authenticated sources.',
      foot: 'Current · previous employers',
    },
    {
      tag: '04',
      title: 'Profile enrichment',
      body: 'Turn claimed work data into verified employer and title facts for marketplaces, professional communities, and financial products.',
      foot: 'Employer · title · verified profiles',
    },
  ];

  return (
    <section className="section-pad" id="use-cases">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>USE CASES</div>
            <h2 style={{ marginTop: '12px' }}>Employment verification<br />for every decision.</h2>
          </div>
          <p className="right">Use one global verification layer across hiring, screening, background checks, and product profiles.</p>
        </div>
        <div className="usecase-grid usecase-grid--four">
          {cases.map((item) => (
            <article className="usecase-card" key={item.tag}>
              <div className="usecase-tag mono">{item.tag}</div>
              <h3 className="usecase-h">{item.title}</h3>
              <p className="usecase-body">{item.body}</p>
              <div className="usecase-foot">{item.foot}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HonestFit() {
  return (
    <section className="section-pad-sm displacement-fit" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="displacement-fit-grid">
          <div>
            <div className="eyebrow"><span className="dot"></span>Compare yourself</div>
            <h2 style={{ marginTop: '12px' }}>Do not switch on faith.<br />Run both.</h2>
            <p className="lead" style={{ marginTop: '16px' }}>
              Put Reclaim beside your existing service provider for 30 days. Compare successful completions, country coverage, result time and cost on your own traffic.
            </p>
          </div>
          <div className="displacement-caveat">
            <div className="mono">WHERE INCUMBENTS STILL WIN</div>
            <p>
              Argyle and Truv publish Fannie Mae support. We do not yet. For mortgage-related use cases, contact us for the latest support details.
            </p>
            <p><b>For all other use cases, run Reclaim Protocol as part of your employment-verification waterfall without displacing your existing service providers.</b></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="section-pad-sm displacement-trust">
      <div className="wrap">
        <div className="displacement-trust-inner">
          <div>
            <div className="eyebrow"><span className="dot"></span>TRUST, WHERE IT BELONGS</div>
            <h2 style={{ marginTop: '12px' }}>Enterprise-ready infrastructure.</h2>
            <p>SOC 2 Type II · ISO 27001 · GDPR ready · audited by Zellic and ZKSecurity · open source.</p>
          </div>
          <div className="hero-actions">
            <a href="https://trust.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Open trust center ↗</a>
            <a href="https://github.com/reclaimprotocol" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Review the code ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad-sm">
      <div className="wrap">
        <div className="final-cta displacement-final">
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <span className="dot" style={{ background: '#fff' }}></span>Run a side-by-side test
            </div>
            <h2 style={{ marginTop: '14px' }}>Add Reclaim Protocol to your waterfall.</h2>
            <p>Compare global coverage, completion and cost with your own users. Start with 25 free verifications. Scale from $0.10 each.</p>
            <div className="cta-fineprint mono">
              <span>● 90+ countries</span>
              <span>● Free API keys</span>
              <span>● From $0.10 at Enterprise scale</span>
            </div>
          </div>
          <div className="cta-side">
            <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-white">Start free →</a>
            <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-outline-w">Talk to founder →</a>
            <a href="mailto:support@reclaimprotocol.org?subject=Employment%20verification%20pilot" className="cta-side-link mono">support@reclaimprotocol.org ↗</a>
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
            <Link href="/" className="brand">
              <Image className="brand-mark" src="/reclaim-logo.png" alt="Reclaim Protocol" width={26} height={26} />
              <span>Reclaim Protocol</span>
            </Link>
            <p className="foot-tag">Global employment and education verification—from $0.10 at scale.</p>
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
              <li><Link href="/#trust">Security audits</Link></li>
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
      <Comparison />
      <WhySwitch />
      <UseCases />
      <HonestFit />
      <TrustBar />
      <FinalCTA />
      <Footer />
    </>
  );
}
