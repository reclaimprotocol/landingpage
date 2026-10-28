import { siteConfig } from '@/config/site';
import { SiteNav, SiteFooter } from '@/app/components/site-shell';
import TrackedLink from '@/app/components/tracked-link';
import Icon from '@/app/components/icons';
import { marketingMetadata } from '@/app/lib/metadata';
import '@/app/enterprise.css';

export const metadata = marketingMetadata('Student Discounts. Something is coming.', 'Brought to you in partnership with the largest student verification company in the world. Details announcing soon.', '/solutions/student-discounts', '/social-student-discounts.png');

export default function StudentDiscountsPage() {
  return <div className="enterprise-site"><SiteNav vertical="student-discounts" /><main id="main" className="student-teaser">
    <section className="student-teaser-content wrap">
      <p className="eyebrow"><span className="dot" /> STUDENT DISCOUNTS</p>
      <div className="student-teaser-mark" aria-hidden="true"><Icon name="graduation" size={38} /><span>+</span><span className="teaser-unknown">?</span></div>
      <h1>Something is coming.<br /><strong>Stay curious.</strong></h1>
      <p className="student-partnership">Brought to you in partnership with the <strong>largest student verification company in the world.</strong></p>
      <p className="student-soon mono">Details announcing soon.</p>
      <TrackedLink href={siteConfig.bookingUrl} vertical="student-discounts" action="booking" placement="hero" className="btn btn-primary">Talk to us <Icon name="arrow" size={17} /></TrackedLink>
    </section>
  </main><SiteFooter vertical="student-discounts" /></div>;
}
