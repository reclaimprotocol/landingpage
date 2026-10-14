import TrackedLink from './tracked-link';

export default function Pricing() {
  const plans = [
    {
      name: 'Hacker',
      price: 'Free',
      cadence: 'No credit card needed',
      bestFor: 'Best for trying out',
      details: ['25 included verifications per month', 'Up to 100 zkFetches', 'Use AI tools for integration'],
      cta: 'Start free →',
      href: 'https://docs.reclaimprotocol.org',
    },
    {
      name: 'Solopreneur',
      price: '$2,000/m',
      cadence: '2,000 included verifications',
      bestFor: 'Best for pilots and PoCs',
      details: ['$1.00 effective rate at full included usage', '20,000 zkFetches included', 'Email support'],
      cta: 'Integrate now →',
      href: 'https://docs.reclaimprotocol.org',
    },
    {
      name: 'Startup',
      price: '$5,000/m',
      cadence: '10,000 verifications / month',
      bestFor: 'Best for projects getting traction',
      details: ['$0.50 effective rate at full included usage', '100,000 zkFetches included', 'Dedicated shared Slack channel'],
      cta: 'Integrate now →',
      href: 'https://docs.reclaimprotocol.org',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Talk to us',
      cadence: '100,000 verifications per month',
      bestFor: 'Best for full scale products',
      details: ['$0.10 effective rate at full included usage', '1M zkFetches included', '24-hour SLA, 7 days a week', 'Other custom requests'],
      cta: 'Speak to founder →',
      href: 'https://calendly.com/madhavanmalolan/call',
    },
  ];

  return (
    <section className="section-pad pricing-section" id="pricing">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Simple transparent pricing</div>
            <h2 style={{ marginTop: '12px' }}>Start with a test. Build from there.</h2>
          </div>
          <p className="right">
            Existing plans for your first verification, a pilot, and a production deployment.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card${plan.featured ? ' price-card--featured' : ''}`} key={plan.name}>
              {plan.featured && <div className="price-badge mono">RECOMMENDED</div>}
              <div className="price-name mono">{plan.name}</div>
              <div className="price-amount">{plan.price}</div>
              <div className="price-cadence">{plan.cadence}</div>
              {plan.bestFor && <div className="price-included">{plan.bestFor}</div>}
              <ul className="price-details">
                {plan.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <TrackedLink className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`} href={plan.href} placement="pricing" action={plan.name === 'Enterprise' ? 'booking' : 'navigate'}>{plan.cta}</TrackedLink>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
