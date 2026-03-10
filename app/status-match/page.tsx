'use client';

import { siteConfig } from '@/config/site';

export default function StatusMatch() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="status-match-hero flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and CTAs */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Verify status in seconds, not weeks. With Zero fraud.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Instant loyalty tier verification. 100+ airline and hotel programs. No screenshots.
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
                <img src="/delta-fake.png" alt="Delta Screenshot" className="screenshot-image" />
                <div className="fake-callout">
                  <p>This is a fake screenshot. Can your system catch it?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Awards Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and Logo */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Winner of Startup of the Year
              </h2>
              <img
                src="/loyaltyawards.avif"
                alt="Loyalty Awards"
                className="loyalty-logo mb-8"
              />
              <div className="flex flex-wrap gap-4">
                <button
                  className="btn-blue-solid"
                  onClick={() => window.location.href = siteConfig.bookingUrl}
                >
                  Talk to the founder
                </button>
                <button
                  className="btn-secondary-orange"
                  onClick={() => window.open('https://www.youtube.com/watch?v=example', '_blank')}
                >
                  See pitch video
                </button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/loyalty-winner-subhash.jpg"
                alt="Loyalty Awards Winner"
                className="award-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Loyalty Status Co</th>
                  <th className="highlight-column">Reclaim Protocol</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-label">Time taken</td>
                  <td>2 weeks</td>
                  <td className="highlight-column">30s</td>
                </tr>
                <tr>
                  <td className="row-label">Cost</td>
                  <td>$100+ per verification</td>
                  <td className="highlight-column">90% cheaper</td>
                </tr>
                <tr>
                  <td className="row-label">Audience Relationship</td>
                  <td>Theirs</td>
                  <td className="highlight-column">Yours</td>
                </tr>
                <tr>
                  <td className="row-label">Verification process</td>
                  <td>Document/Screenshot upload</td>
                  <td className="highlight-column">Cryptographic verification</td>
                </tr>
                <tr>
                  <td className="row-label">Defraudability</td>
                  <td>Easy</td>
                  <td className="highlight-column">Impossible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-16">
            The only fraudproof, instant status verification
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">User logs in</h3>
              <p className="step-description">
                User logs in into airline/hotel where they have status
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Status is extracted and verified</h3>
              <p className="step-description">
                Reclaim Protocol extracts and verifies their status
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Verification result sent</h3>
              <p className="step-description">
                Reclaim Protocol sends verification result to you, for you to process the status-match request
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All in One Solution Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              The all in one solution for status match
            </h2>
            <p className="text-xl text-slate-600">
              Coverage across 100+ travel products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Logo sections */}
            <div className="space-y-8">
              {/* Airlines */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Airlines</h3>
                <div className="logo-grid">
                  {[
                    { name: 'Delta', logo: '/airlines/delta.png' },
                    { name: 'American Airlines', logo: '/airlines/american-airlines.png' },
                    { name: 'United', logo: '/airlines/united.png' },
                    { name: 'Emirates', logo: '/airlines/emirates.png' },
                    { name: 'Singapore Airlines', logo: '/airlines/singapore-airlines.png' },
                    { name: 'Lufthansa', logo: '/airlines/lufthansa.png' },
                    { name: 'Qatar Airways', logo: '/airlines/qatar-airways.png' },
                    { name: 'British Airways', logo: '/airlines/british-airways.png' }
                  ].map((airline, i) => (
                    <div key={`airline-${i}`} className="logo-item">
                      <img src={airline.logo} alt={airline.name} />
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-center mt-4 font-medium">75+ more</p>
              </div>

              {/* Hotels */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Hotels</h3>
                <div className="logo-grid">
                  {[
                    { name: 'Marriott', logo: '/hotels/marriott.png' },
                    { name: 'Hilton', logo: '/hotels/hilton.png' },
                    { name: 'Hyatt', logo: '/hotels/hyatt.png' },
                    { name: 'IHG', logo: '/hotels/ihg.png' },
                    { name: 'Accor', logo: '/hotels/accor.png' },
                    { name: 'Wyndham', logo: '/hotels/wyndham.png' },
                    { name: 'Choice Hotels', logo: '/hotels/choice-hotels.png' },
                    { name: 'Best Western', logo: '/hotels/best-western.png' }
                  ].map((hotel, i) => (
                    <div key={`hotel-${i}`} className="logo-item">
                      <img src={hotel.logo} alt={hotel.name} />
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-center mt-4 font-medium">20+ more</p>
              </div>

              {/* Cruises */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Cruises</h3>
                <div className="logo-grid">
                  {[
                    { name: 'Carnival', logo: '/cruises/carnival.png' },
                    { name: 'Royal Caribbean', logo: '/cruises/royal-caribbean.png' },
                    { name: 'Norwegian Cruise Line', logo: '/cruises/norwegian.png' },
                    { name: 'MSC Cruises', logo: '/cruises/msc.png' }
                  ].map((cruise, i) => (
                    <div key={`cruise-${i}`} className="logo-item">
                      <img src={cruise.logo} alt={cruise.name} />
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-center mt-4 font-medium">10+ more</p>
              </div>
            </div>

            {/* Right side - Video */}
            <div className="flex justify-center lg:justify-end">
              <div className="video-container-status">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="status-video"
                >
                  <source src="/videos/status-match.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verify in Seconds Section */}
      <section className="verify-seconds-section py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Verify status in seconds, not weeks
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Give a great experience to your customers by verifying instantly, without requiring any human reviews. Confidently.
          </p>
          <button
            className="btn-primary"
            onClick={() => window.location.href = siteConfig.bookingUrl}
          >
            Talk to the founder
          </button>
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
