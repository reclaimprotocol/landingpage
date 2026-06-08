'use client';

import { useState, useRef, useEffect } from 'react';

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="/" className="brand">
          <img className="brand-mark" src="/reclaim-logo.png" alt="Reclaim Protocol" />
          <span>Reclaim Protocol</span>
        </a>
        <nav className="nav-links">
          <a href="#verify">Solutions</a>
          <a href="https://trust.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Trust Center</a>
          <a href="https://drive.google.com/file/d/1Tok4J6mv7PwRCbwxVNhv4alS82sQJI4E/view" target="_blank" rel="noopener noreferrer">Whitepaper</a>
          <a href="https://blog.reclaimprotocol.org" target="_blank" rel="noopener noreferrer">Blog</a>
        </nav>
        <div className="nav-cta">
          <a href="https://docs.reclaimprotocol.org" className="btn btn-sm btn-ghost">Docs</a>
          <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Talk to founder →</a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Banner ---------- */
function Banner() {
  return (
    <div className="banner">
      <span className="pill">New</span>
      <span><b>3,000,000+</b> verifications processed · <b>0</b> fraud</span>
      <span style={{ opacity: 0.6 }}>·</span>
      <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Integrate now with 10 lines of code →</a>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="hero no-border" style={{ borderTop: 0 }}>
      <div className="wrap hero-wrap">
        <div className="hero-kicker">
          <div className="eyebrow"><span className="dot"></span>EDUCATION | EMPLOYMENT | AIRLINE STATUS | AND MORE</div>
          <span className="yc-badge"><span className="yc-badge-mark">Y</span>Backed by YC</span>
        </div>
        <h1 style={{ marginTop: '20px' }}>
          <strong>Education, Employment &amp; Loyalty</strong> verifications that won&apos;t get you sued.
        </h1>
        <p className="lead" style={{ marginTop: '20px' }}>
          Global. Compliant. 45%+ conversion rates. Fully private &amp; secure.
        </p>
        <div className="hero-actions">
          <a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Talk to founder →</a>
          <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Integrate now →</a>
        </div>
        <div className="hero-meta">
          <span><b>3M+</b> verifications</span>
          <span><b>0</b> fraud</span>
          <span><b>0</b> data leakage</span>
          <span><b>29k+</b> universities</span>
          <span><b>10k+</b> employers</span>
          <span><b>100+</b> airlines &amp; hotels</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Verticals ---------- */
function Verticals() {
  const items = [
    {
      title: 'Employment & income',
      tag: '10K+ EMPLOYERS',
      href: '/employment',
      body: "Verify employer and gross income from today's payroll. Most solutions rely on stale databases or phishing websites. Huge liability.",
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
      tag: '29K+ SCHOOLS',
      href: '/education',
      body: "Pull live enrollment directly from universities. Not guessing using a .edu email, not using a transcript upload that's trivial to fake these days.",
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
    {
      title: 'Loyalty & status match',
      tag: '100+ AIRLINES & HOTELS',
      href: '/status-match',
      body: 'Instant tier verification across 100+ airlines and hotels. No screenshots, no email back-and-forth. This industry is ridden with AI generated fraud.',
      proof: {
        kind: 'photo' as const,
        src: '/loyalty-awards.png',
        alt: 'Golden Loyalty Awards 2025',
        caption: 'Winner — Startup of the Year, Loyalty Awards, Amsterdam',
      },
    },
  ];

  return (
    <section className="section-pad" id="verify" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>What you can verify</div>
            <h2 style={{ marginTop: '12px' }}>Any verification.<br />Global coverage.</h2>
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
                    {it.proof.kind === 'logos' ? (
                      <div className="proof-logos-grid">
                        {it.proof.sources.map((s) => (
                          <div className="proof-logo-cell" key={s.name} title={s.name}>
                            <img src={s.src} alt={s.name} loading="lazy" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <img src={(it.proof as { kind: 'photo'; src: string; alt: string; caption: string }).src} alt={(it.proof as { kind: 'photo'; src: string; alt: string; caption: string }).alt} loading="lazy" />
                    )}
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
                  Read more <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="ask-strip">
          <span>Need to verify something else?</span>
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
            <div className="eyebrow"><span className="dot"></span>How it works</div>
            <h2 style={{ marginTop: '12px' }}>3 steps.<br />Fully secured by cryptography.</h2>
          </div>
          <p className="right">
            The protocol uses zero-knowledge cryptography to fetch a single, verified fact
            straight from the issuing source — never seeing the user&apos;s credentials, never
            storing their data.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-num mono">STEP 01</div>
            <h3>User logs in to the source</h3>
            <p>Your user signs into their university, employer, airline, or bank as they always do. Not an unfamiliar phishing site. Familiarity builds trust.</p>
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
            <h3>Only the needed fact is extracted</h3>
            <p>Name, enrollment status, tier, age. Only the field you asked for. Everything else stays on-device. No PII leaks. Consistent with GDPR data minimization laws.</p>
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
            <h3>A cryptographic proof is generated</h3>
            <p>A zero-knowledge proof is generated on device. Akin to a digital notary. Unforgeable. You receive the proof on user consent. You can verify yourself.</p>
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

/* ---------- Compliance ---------- */
function Compliance() {
  return (
    <section className="section-pad" id="compliance" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <div className="compliance-hero">
          <div className="compliance-copy">
            <div className="eyebrow"><span className="dot"></span>Compliance &amp; security</div>
            <h2 style={{ marginTop: '12px' }}>
              Reclaim never asks users to log in<br />on a third-party portal.
            </h2>
            <p className="lead" style={{ marginTop: '18px' }}>
              Tricking users into handing over a username and password to your verification
              vendor isn&apos;t a UX shortcut — it&apos;s a credential-phishing pattern. The
              regulator agrees. Your users do too.
            </p>
            <p style={{ marginTop: '14px', color: 'var(--mute)', fontSize: '14.5px' }}>
              With Reclaim, the user logs in on the real source (the employer, the university, the airline).
              We never see the password. All the verification happens on the browser, not our backend.
            </p>
          </div>
          <div className="aphone-wrap">
            <div className="aphone">
              <div className="aphone-status mono">
                <span className="aphone-lock">
                  <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                    <rect x="0.5" y="4.5" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1" />
                    <path d="M2.5 4.5V3a2 2 0 014 0v1.5" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </span>
                <span>thirdparty-portal.com</span>
              </div>
              <div className="aphone-body">
                <div className="aphone-logo"><span>A</span></div>
                <div className="aphone-title">Sign in to Acme Corp</div>
                <div className="aphone-sub">Connect your employer to continue verification.</div>
                <div className="aphone-field">
                  <label>Username</label>
                  <div className="aphone-input">jordan.reyes</div>
                </div>
                <div className="aphone-field">
                  <label>Password</label>
                  <div className="aphone-input"><span className="aphone-dots">••••••••••••</span></div>
                </div>
                <div className="aphone-btn">Sign in</div>
                <div className="aphone-disclaimer">&ldquo;We won&apos;t store your password. Pinky promise!&rdquo;</div>
              </div>
            </div>
            <div className="aphone-callout">
              <div className="aphone-callout-tag mono">↘ small print</div>
              <div className="aphone-callout-quote">&ldquo;We won&apos;t store your password. Pinky promise!&rdquo;</div>
              <div className="aphone-callout-foot mono">— literally every credential-aggregator</div>
            </div>
            <svg className="aphone-callout-line" viewBox="0 0 160 280" fill="none">
              <path d="M8 8 C 30 80, 80 180, 148 268" stroke="var(--blue)" strokeWidth="1.4" strokeDasharray="3 3" />
              <circle cx="148" cy="268" r="3" fill="var(--blue)" />
            </svg>
          </div>
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

/* ---------- Numbers ---------- */
function Numbers() {
  const stats = [
    { num: '3M+',  lbl: 'Verifications processed' },
    { num: '0%',   lbl: 'Fraud' },
    { num: '45%+', lbl: 'Conversion rates, upto' },
    { num: '29K+', lbl: 'Universities' },
    { num: '10K+', lbl: 'Employers' },
    { num: '100+', lbl: 'Airlines & hotels' },
  ];
  return (
    <section className="section-pad" id="numbers">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Reclaim Protocol in numbers</div>
            <h2 style={{ marginTop: '12px' }}>Verifiable.<br />At scale.</h2>
          </div>
        </div>
        <div className="numbers-grid">
          {stats.map((s, i) => (
            <div className="numbers-cell" key={i}>
              <div className="numbers-num">{s.num}</div>
              <div className="numbers-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
        <p className="breadth-line" style={{ marginTop: '40px' }}>
          Across customers in <b>airline loyalty</b>, <b>mortgage &amp; lending</b>, and <b>background checks</b> — happy to introduce on request.
        </p>
        <div className="note" style={{ marginTop: '40px' }}>
          <div className="note-avatar">
            <img src="/maddy.png" alt="Madhavan Malolan" />
          </div>
          <div>
            <p>&ldquo;We started this research in 2022 because we could see what AI was about to do to the internet. Documents would become trivially forgeable; the verification stack the entire economy runs on would silently break. We built Reclaim Protocol so every fact you verify is straight from the source — no document uploads, no phishing. All verified using cryptography, so even a single byte or pixel tampered with is caught trivially.&rdquo;</p>
            <p style={{ marginTop: '12px' }}>&ldquo;The better the AI models get, the more fraud there is — and the more you&apos;ll need Reclaim Protocol.&rdquo;</p>
            <div className="signoff">Madhavan (Maddy) Malolan <span>· Cofounder &amp; CEO</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Fraud widget (real API-calling version) ---------- */
function FraudWidget() {
  const [stage, setStage] = useState<'idle' | 'loading' | 'forged' | 'reclaim'>('idle');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [instruction, setInstruction] = useState('');
  const [consent, setConsent] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [isImage, setIsImage] = useState(false);
  const [processingTime, setProcessingTime] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (stage === 'loading') {
      setProgress(0);
      progressInterval.current = setInterval(() => {
        setProgress((prev) => (prev < 92 ? prev + 1 : prev));
      }, 900);
    } else {
      if (progressInterval.current) clearInterval(progressInterval.current);
    }
    return () => { if (progressInterval.current) clearInterval(progressInterval.current); };
  }, [stage]);

  const canForge = consent && instruction.trim().length > 0 && !!uploadedFile && stage === 'idle';

  const convertPDFToImage = async (file: File): Promise<Blob> => {
    const pdfjsLib = await import('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.mjs', import.meta.url).toString();
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 2.0 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    await page.render({ canvas, canvasContext: context, viewport }).promise;
    return new Promise((resolve) => { canvas.toBlob((blob) => resolve(blob!), 'image/png'); });
  };

  const handleForge = async () => {
    if (!uploadedFile || !instruction) return;
    setStage('loading');
    const startTime = Date.now();
    const formData = new FormData();
    try {
      if (uploadedFile.type === 'application/pdf') {
        const imageBlob = await convertPDFToImage(uploadedFile);
        formData.append('image', imageBlob, 'converted.png');
        formData.append('originalFile', uploadedFile);
      } else {
        formData.append('image', uploadedFile);
      }
      formData.append('prompt', 'Change the value of ' + instruction);
      formData.append('model', 'qwen3');
      const response = await fetch('/api/edit-document', { method: 'POST', body: formData });
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      setProcessingTime(elapsed);
      if (response.ok) {
        const blob = await response.blob();
        const contentType = response.headers.get('content-type') || '';
        const url = URL.createObjectURL(blob);
        setResultUrl(url);
        setIsImage(contentType.includes('image'));
        setStage('forged');
      } else {
        setStage('forged');
        setResultUrl(null);
      }
    } catch {
      setStage('forged');
      setResultUrl(null);
    }
  };

  const reset = () => {
    setStage('idle');
    setUploadedFile(null);
    setInstruction('');
    setConsent(false);
    setResultUrl(null);
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="rwid" id="widget">
      <div className="rwid-banner">
        <div className="rwid-title">Try it yourself!</div>
        <div className="rwid-sub">See how trivial it is to generate a fake document</div>
      </div>
      <div className="rwid-body">
        {stage === 'idle' && (
          <>
            <div
              className={`rwid-upload ${uploadedFile ? 'is-filled' : ''}`}
              onClick={() => fileInputRef.current?.click()}
              role="button"
              tabIndex={0}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,image/png,image/jpeg"
                hidden
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) setUploadedFile(f);
                }}
              />
              <div className="rwid-upload-icon">
                <svg width="44" height="52" viewBox="0 0 44 52" fill="none">
                  <path d="M6 4h22l10 10v32a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#0000ee" strokeWidth="1.5" fill="#fff" />
                  <path d="M28 4v10h10" stroke="#0000ee" strokeWidth="1.5" fill="none" />
                  <line x1="11" y1="22" x2="31" y2="22" stroke="#0000ee" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="11" y1="28" x2="31" y2="28" stroke="#0000ee" strokeWidth="1.4" strokeLinecap="round" />
                  <line x1="11" y1="34" x2="25" y2="34" stroke="#0000ee" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              {!uploadedFile ? (
                <>
                  <div className="rwid-upload-text">Click to upload</div>
                  <div className="rwid-upload-hint">PDF or Image (PNG, JPG)</div>
                </>
              ) : (
                <>
                  <div className="rwid-upload-text">{uploadedFile.name}</div>
                  <div className="rwid-upload-hint">Click to change</div>
                </>
              )}
            </div>
            <div>
              <div className="rwid-label">What to change?</div>
              <div className="rwid-instr">
                <span className="rwid-instr-pill">Change the value of</span>
                <input
                  className="rwid-instr-input"
                  placeholder="e.g., name to John Doe"
                  value={instruction}
                  onChange={(e) => setInstruction(e.target.value.slice(0, 140))}
                />
              </div>
              <div className="rwid-counter mono">{instruction.length}/140</div>
            </div>
            <label className="rwid-consent">
              <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>I understand this is for educational purposes alone</span>
            </label>
            <button
              className={`rwid-cta ${canForge ? 'is-on' : 'is-off'}`}
              disabled={!canForge}
              onClick={handleForge}
            >
              <span>🔧</span>&nbsp;&nbsp;Generate fake document
            </button>
          </>
        )}

        {stage === 'loading' && (
          <button className="rwid-cta is-loading" disabled>
            <div className="rwid-progress-fill" style={{ width: `${progress}%` }} />
            <span className="rwid-cta-label">⚡ Processing...</span>
          </button>
        )}

        {stage === 'forged' && (
          <>
            <div className="rwid-result rwid-result--bad">
              <div className="rwid-result-tag mono">● VERIFICATION — DOCUMENT UPLOAD</div>
              <div className="rwid-result-h">
                Fake document generated in <b>{processingTime}s</b>. Your current pipeline would <b>accept</b> this forgery.
              </div>
              <div className="rwid-result-p">OCR + selfie + liveness can&apos;t tell. Pixels are pixels.</div>
              {resultUrl && (
                <div className="rwid-result-preview">
                  {isImage ? (
                    <img src={resultUrl} alt="Forged document" />
                  ) : (
                    <iframe src={`${resultUrl}#toolbar=0&navpanes=0&scrollbar=0`} title="Forged document" />
                  )}
                  <a href={resultUrl} download={`forged-${uploadedFile?.name}`} className="rwid-result-download" title="Download">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v10M8 11L4 7M8 11l4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              )}
              <button className="btn btn-sm btn-primary" style={{ marginTop: '14px' }} onClick={() => setStage('reclaim')}>
                Now try Reclaim →
              </button>
            </div>
          </>
        )}

        {stage === 'reclaim' && (
          <>
            <div className="rwid-result rwid-result--good">
              <div className="rwid-result-tag mono" style={{ color: 'var(--blue)' }}>● VERIFICATION — RECLAIM PROTOCOL</div>
              <div className="rwid-result-h">Forgery <b>rejected</b>. The real answer came straight from the source.</div>
              <div className="mono" style={{ fontSize: '11px', color: 'var(--mute)', marginTop: '10px', wordBreak: 'break-all', lineHeight: 1.55 }}>
                zkProof: 0x{Array.from({ length: 64 }, (_, i) => '0123456789abcdef'[(i * 31 + 7) % 16]).join('')}
              </div>
              <div style={{ marginTop: '14px' }}>
                <a href="#pilot" className="btn btn-sm btn-primary">Launch a pilot →</a>
                <button className="btn btn-sm btn-link" style={{ marginLeft: '12px' }} onClick={reset}>Reset demo</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Fraud section ---------- */
function FraudSection() {
  return (
    <section className="section-pad" id="fraud" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap fraud-wrap">
        <div className="fraud-copy">
          <div className="eyebrow"><span className="dot"></span>Changing landscape</div>
          <h2 style={{ marginTop: '12px' }}>New world. But,<br />old verification stack?</h2>
          <p className="lead" style={{ marginTop: '18px' }}>
            <b style={{ color: 'var(--ink)' }}>AI fakes any document in 10 seconds.</b>{' '}
            <b style={{ color: 'var(--ink)' }}>Regulators are watching more closely than ever before.</b>{' '}
            <b style={{ color: 'var(--ink)' }}>Your users are globally distributed.</b>
            <br />The old guard wasn&apos;t built for any of it:
          </p>
          <ul className="fraud-points">
            <li><b>Document uploads</b> AI can fake it pixel to pixel. Impossible to catch.</li>
            <li><b>Central Databases</b> Country specific, and often stale.</li>
            <li><b>Phishing websites</b> Strict laws against storing and using user credentials.</li>
          </ul>
        </div>
        <FraudWidget />
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
          <div className="eyebrow"><span className="dot"></span>Integration</div>
          <h2 style={{ marginTop: '12px' }}>The engineering team will love you for this.</h2>
          <p className="lead" style={{ marginTop: '16px' }}>Grab an API key, paste the SDK snippet, ship to staging this afternoon. Built by engineers, for engineers.</p>
          <div className="checklist">
            <div className="check-row">Self-serve API keys and docs for all frameworks. No sales call needed.</div>
            <div className="check-row">AI and MCP support that works with coding agents.</div>
            <div className="check-row">Cryptography that makes data security nightmares go away.</div>
            <div className="check-row">Open-source code with permissive licenses.</div>
          </div>
          <div className="row" style={{ marginTop: '28px' }}>
            <a href="https://docs.reclaimprotocol.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Integrate now →</a>
            <a href="https://drive.google.com/file/d/1Tok4J6mv7PwRCbwxVNhv4alS82sQJI4E/view" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Read Whitepaper</a>
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
            <h2 style={{ marginTop: '14px' }}>Lower fraud. Stronger compliance.<br />One integration.</h2>
            <p>
              Plug in a test API key in 10 lines of code. Throw your fraud team&apos;s hardest examples
              at it. If we can&apos;t catch it, you don&apos;t pay.
            </p>
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

/* ---------- Footer ---------- */
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
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M9 0a9 9 0 00-2.85 17.54c.45.08.62-.2.62-.43v-1.66c-2.5.54-3.03-1.07-3.03-1.07-.41-1.04-1-1.32-1-1.32-.81-.55.06-.54.06-.54.9.06 1.37.93 1.37.93.8 1.37 2.1.97 2.61.74.08-.58.31-.97.57-1.2-2-.22-4.1-1-4.1-4.46 0-.98.35-1.79.93-2.42-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.49.93a8.65 8.65 0 014.54 0c1.72-1.17 2.48-.93 2.48-.93.5 1.25.18 2.17.09 2.4.58.63.92 1.44.92 2.42 0 3.47-2.1 4.24-4.11 4.46.32.28.6.83.6 1.67v2.47c0 .24.17.52.63.43A9 9 0 009 0z" />
                </svg>
              </a>
              <a href="https://x.com/reclaimprotocol" target="_blank" rel="noopener noreferrer" aria-label="X" className="foot-social">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M13.86 1.5h2.5l-5.46 6.24L17 16.5h-5.02l-3.93-5.14L3.55 16.5H1.04l5.84-6.68L1 1.5h5.15l3.55 4.7L13.86 1.5zm-.88 13.5h1.39L5.08 2.94H3.59L12.98 15z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/reclaim-protocol" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="foot-social">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M3.7 6.06H1V16.5h2.7V6.06zM2.35 1.5C1.43 1.5.85 2.1.85 2.9c0 .77.55 1.4 1.45 1.4h.02c.94 0 1.52-.63 1.52-1.4 0-.8-.58-1.4-1.49-1.4zM16.5 16.5v-5.98c0-3.2-1.71-4.7-3.99-4.7-1.84 0-2.67 1.01-3.13 1.72V6.06H6.68c.04.76 0 10.44 0 10.44h2.7v-5.83c0-.24.02-.49.09-.66.2-.49.65-.99 1.4-.99.99 0 1.39.75 1.39 1.85v5.63h2.74z" />
                </svg>
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
              <li><a href="#compliance">Security audits</a></li>
              <li><a href="https://calendly.com/madhavanmalolan/call" target="_blank" rel="noopener noreferrer">Talk to founder</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Reclaim Protocol, Inc. · All rights reserved.</span>
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
      <Verticals />
      <HowItWorks />
      <Compliance />
      <Numbers />
      <FraudSection />
      <Integration />
      <FinalCTA />
      <Footer />
    </>
  );
}
