'use client';

import { siteConfig } from '@/config/site';

export default function Education() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="education-hero flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and CTAs */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                World's first Global Student Verification
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Verify enrollment from 29,000+ universities. Not just a .edu email — actual academic data.
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
              <div className="screenshot-container">
                <img src="/stanford-fake.png" alt="Stanford Student ID" className="screenshot-image" />
                <div className="fake-callout">
                  <p>This is a fake student ID, can your system catch it?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            One solution, global coverage
          </h2>

          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Govt Database</th>
                  <th>University Oauth</th>
                  <th>Document Verification</th>
                  <th className="highlight-column">Reclaim Protocol</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">Coverage</td>
                  <td>1 country</td>
                  <td>1 university</td>
                  <td>Global</td>
                  <td className="highlight-column">Global</td>
                </tr>
                <tr>
                  <td className="row-label">Speed</td>
                  <td>1s</td>
                  <td>1s</td>
                  <td>2 weeks</td>
                  <td className="highlight-column">30s</td>
                </tr>
                <tr>
                  <td className="row-label">Freshness</td>
                  <td>Stale</td>
                  <td>Fresh</td>
                  <td>Maybe stale</td>
                  <td className="highlight-column">Fresh</td>
                </tr>
                <tr>
                  <td className="row-label">Privacy</td>
                  <td>Medium</td>
                  <td>High</td>
                  <td>Low</td>
                  <td className="highlight-column">High</td>
                </tr>
                <tr>
                  <td className="row-label">Granularity</td>
                  <td>Limited</td>
                  <td>None</td>
                  <td>High</td>
                  <td className="highlight-column">High</td>
                </tr>
                <tr>
                  <td className="row-label">Partnership Process</td>
                  <td>Medium</td>
                  <td>High</td>
                  <td>Low</td>
                  <td className="highlight-column">Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="verify-seconds-section py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left side - Text and CTA */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                .edu emails are easy to buy, documents are easy to fake
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Don't get fooled, verify cryptographically in seconds - not review for weeks.
              </p>
              <button
                className="btn-primary"
                onClick={() => window.location.href = siteConfig.bookingUrl}
              >
                Talk to the founder
              </button>
            </div>

            {/* Right side - Video */}
            <div className="flex justify-center lg:justify-end">
              <div className="video-container-education">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="education-video"
                >
                  <source src="/videos/education.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer-content max-w-7xl mx-auto mt-20 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Product Column */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Product</h4>
              <ul className="footer-links">
                <li><a href="/status-match">Status Match</a></li>
                <li><a href="/education">Education</a></li>
                <li><a href="#employment">Employment</a></li>
                <li><a href="#id-verification">ID Verification</a></li>
              </ul>
            </div>

            {/* Resources Column */}
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

            {/* Company Column */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About</a></li>
                <li><a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">Contact</a></li>
                <li><a href={siteConfig.careersUrl} target="_blank" rel="noopener noreferrer">Careers</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom text-center text-white/70 text-sm pt-8 border-t border-white/10">
            © 2025 Reclaim Protocol · <a href={siteConfig.privacyPolicyUrl} target="_blank" rel="noopener noreferrer">Privacy Policy</a> · <a href={siteConfig.termsUrl} target="_blank" rel="noopener noreferrer">Terms</a>
          </div>
        </footer>
      </section>
    </div>
  );
}
