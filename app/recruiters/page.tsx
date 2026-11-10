import Link from 'next/link';
import Icon, { type IconName } from '@/app/components/icons';
import { FinalCTA, SiteFooter, SiteNav } from '@/app/components/site-shell';
import TrackedLink from '@/app/components/tracked-link';
import { marketingMetadata } from '@/app/lib/metadata';
import { siteConfig } from '@/config/site';
import '../enterprise.css';
import './recruiters.css';

export const metadata = marketingMetadata(
  'Recruiters: verify candidates before the interview',
  'Verify applicants’ current university, employer, designation, pay, project contributions, indie revenue, and CRM metrics during prescreening.',
  '/recruiters',
  '/social-recruiters.png',
);

const checks: { title: string; icon: IconName; description: string; source: string }[] = [
  {
    title: 'Current university',
    icon: 'graduation',
    description: 'Confirm where an applicant is currently enrolled, directly from their university account.',
    source: 'University portal',
  },
  {
    title: 'Current employer & designation',
    icon: 'briefcase',
    description: 'Verify who they work for and their current job title using employer or payroll records.',
    source: 'HR · Payroll',
  },
  {
    title: 'Current pay',
    icon: 'card',
    description: 'Ask candidates to verify their current compensation from their payroll account.',
    source: 'Payroll account',
  },
  {
    title: 'Project contributions',
    icon: 'code',
    description: 'Check recorded contributions to code, designs, and shared projects on GitHub, Figma, and similar tools.',
    source: 'GitHub · Figma · More',
  },
  {
    title: 'Indie project revenue',
    icon: 'bag',
    description: 'Verify revenue from a side project or independent business using payment or sales records.',
    source: 'Payment dashboards · Sales platforms',
  },
  {
    title: 'Sales & growth metrics',
    icon: 'building',
    description: 'Check deals closed, pipeline, revenue, and other sales or growth metrics recorded in their CRM.',
    source: 'Salesforce · HubSpot · Other CRMs',
  },
];

const steps = [
  { title: 'Request what matters.', description: 'Choose the claims relevant to the role.' },
  { title: 'The candidate verifies.', description: 'They sign in to the relevant source and share the requested evidence.' },
  { title: 'Review, then shortlist.', description: 'Use verified claims alongside the application before scheduling interviews.' },
];

export default function RecruitersPage() {
  return (
    <div className="enterprise-site recruiters-page">
      <SiteNav vertical="recruiters" />
      <main id="main">
        <section className="enterprise-hero vertical-hero">
          <div className="wrap">
            <nav className="enterprise-breadcrumb mono" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Recruiters</span>
            </nav>
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow"><span className="dot" /> FOR RECRUITERS · AT PRESCREENING</p>
                <h1>Verify key claims. <strong>Before the first interview.</strong></h1>
                <p className="lead">Ask applicants to back up the details that matter with evidence from the accounts they already use.</p>
                <div className="hero-actions">
                  <TrackedLink href={siteConfig.recruitersSignupUrl} placement="hero" vertical="recruiters" className="btn btn-primary">Sign up <Icon name="arrow" size={17} /></TrackedLink>
                  <a href="#checks" className="text-link">See what you can verify ↓</a>
                </div>
                <p className="hero-small">Focused prescreening checks, not a full background verification.</p>
              </div>
              <aside className="recruiters-workflow" aria-labelledby="recruiters-workflow-title">
                <p className="eyebrow" id="recruiters-workflow-title">FROM APPLICATION TO SHORTLIST</p>
                <ol>
                  {steps.map((step, index) => (
                    <li key={step.title}>
                      <span className="recruiters-step-number mono">0{index + 1}</span>
                      <div><h2>{step.title}</h2><p>{step.description}</p></div>
                    </li>
                  ))}
                </ol>
                <p className="recruiters-consent"><Icon name="shield" size={17} /> Candidate-led. Shared with their permission.</p>
              </aside>
            </div>
          </div>
        </section>
        <section className="section-pad recruiters-checks" id="checks" aria-labelledby="checks-title">
          <div className="wrap">
            <div className="section-head">
              <div><p className="eyebrow"><span className="dot" /> WHAT YOU CAN VERIFY</p><h2 id="checks-title">Bring evidence to the shortlist.</h2></div>
              <p className="right">Choose the checks that fit the role. Each check uses the records available in the candidate’s source account.</p>
            </div>
            <div className="recruiters-check-grid">
              {checks.map(check => (
                <article className="recruiters-check" key={check.title}>
                  <span className="use-case-icon"><Icon name={check.icon} size={23} /></span>
                  <h3>{check.title}</h3>
                  <p>{check.description}</p>
                  <span className="recruiters-source mono">{check.source}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <FinalCTA vertical="recruiters" title="What would you verify before an interview?" label="Sign up" href={siteConfig.recruitersSignupUrl} action="navigate" />
      </main>
      <SiteFooter vertical="recruiters" />
    </div>
  );
}
