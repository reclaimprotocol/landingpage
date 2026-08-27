import type { Metadata } from "next";
import { privacyHtml } from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy | Reclaim Protocol",
  description: "How CreatorOS Inc (Reclaim Protocol) collects, uses, and protects personal information.",
  metadataBase: new URL('https://reclaimprotocol.org'),
  alternates: { canonical: 'https://reclaimprotocol.org/privacy' },
  robots: { index: true, follow: true },
};

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

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="wrap legal-page">
        <h1>Privacy Policy</h1>
        <p className="legal-updated mono">Last updated August 01, 2025</p>
        <div className="legal-body" dangerouslySetInnerHTML={{ __html: privacyHtml }} />
      </main>
      <Footer />
    </>
  );
}
