import { siteConfig } from './site';
import type { IconName } from '@/app/components/icons';

export interface VerificationExample {
  title: string;
  icon: IconName;
  claim: string;
  source: string;
  fields: string[];
  workflow: string;
}

export interface VerticalContent {
  slug: 'research' | 'promotions' | 'government' | 'hiring';
  label: string;
  audience: string;
  headline: string;
  highlight: string;
  description: string;
  heroNote?: string;
  examplesHeading?: string;
  exampleWorkflowLabel?: string;
  finalTitle?: string;
  video?: { id: string; title: string; description: string };
  workflow: { headline: string; description: string; steps: [string, string, string] };
  examples: [VerificationExample, VerificationExample, VerificationExample];
  boundaries: { title: string; body: string }[];
  cta: { label: string; href: string; action: 'demo' | 'booking' };
  // Only add evidence approved for this exact vertical. Omit the section when empty.
  evidence?: { customer: string; quote: string; sourceUrl: string; logoPath?: string }[];
  faq: { question: string; answer: string }[];
}

export const research: VerticalContent = {
  slug: 'research', label: 'Research', audience: 'RESEARCH PLATFORMS · RECRUITERS · PANELS',
  headline: 'Verify that participants', highlight: 'actually qualify.',
  description: 'Check study eligibility against participants’ source accounts, so your team can recruit with evidence behind the answers.',
  workflow: {
    headline: 'Keep your screener. Add evidence where it matters.',
    description: 'A screener can tell you what someone says they use or buy. For a criterion that is hard to establish, add a source-account check before your team confirms a place in the study.',
    steps: ['Screen for your study', 'Verify a specific criterion', 'Review and invite'],
  },
  examples: [
    { title: 'The right product experience', icon: 'briefcase', claim: '“I use Shopify for my business.”', source: 'The participant’s Shopify account or subscription record.', fields: ['Product name', 'Account or subscription status', 'Plan, if exposed'], workflow: 'Attach the evidence to the candidate’s screener before inviting them to a product study.' },
    { title: 'A purchase that fits the study', icon: 'bag', claim: '“I bought the product you’re researching.”', source: 'Retailer order history. Authenticated receipt email only where supported; email verification is in development.', fields: ['Product or item', 'Purchase date', 'Order ID, if available'], workflow: 'Check the product and purchase window against your study criteria before scheduling.' },
    { title: 'A relevant membership', icon: 'card', claim: '“I hold the membership this study requires.”', source: 'The issuing service’s membership or subscription account.', fields: ['Membership type', 'Current status', 'Renewal date, if exposed'], workflow: 'Use the returned status to review eligibility for a subscriber or member cohort.' },
  ],
  boundaries: [
    { title: 'One part of recruitment', body: 'Source evidence complements your screeners and existing identity checks. Your team decides whether a participant meets the full study criteria.' },
    { title: 'Be precise about what a source proves', body: 'Account access alone does not establish expertise, purchasing authority, or legal identity. Check those separately when your study requires them.' },
  ],
  cta: { label: 'Test one participant criterion', href: siteConfig.demoUrl, action: 'demo' },
  faq: [
    { question: 'Can I verify any product or membership?', answer: 'Start with one criterion and its candidate source. The site, account permissions, and available fields determine what can be checked. The examples on this page are workflows to test, not a supported-source directory.' },
    { question: 'Does this replace screeners or identity checks?', answer: 'No. Reclaim provides source evidence for a specific claim. Keep the screener, identity checks, and expert assessment you need to evaluate the participant.' },
    { question: 'What if a participant cannot complete verification?', answer: 'Keep the criterion unresolved and offer your existing review path. An unavailable field, failed session, or declined connection does not establish that the person is ineligible.' },
    { question: 'Can participants verify a received receipt email?', answer: 'Received-email verification is in development. Confirm support for the email source and required fields before including it in your study. Website account verification is the starting point today.' },
    { question: 'What should we bring to the first test?', answer: 'Choose one eligibility criterion, the source account that may contain the evidence, and the fields your recruiter needs. Use a test account you are authorized to access, then review whether the result answers the criterion.' },
  ],
};

export const government: VerticalContent = {
  slug: 'government', label: 'Govt Services', audience: 'GOVERNMENT AGENCIES · BENEFITS PLATFORMS · GOVTECH',
  headline: 'Verify once.', highlight: 'Reuse across programs.',
  description: 'Help people access services without proving the same facts at every step. Turn income, residency, and enrollment records into reusable, source-backed evidence—with the applicant’s consent.',
  heroNote: 'One set of evidence. Multiple applications. Each program keeps its own rules.',
  examplesHeading: 'Reach the records traditional checks miss.',
  exampleWorkflowLabel: 'In your service workflow',
  finalTitle: 'Which verification gap is holding up your service?',
  video: { id: '3CDvfm9DYjw', title: 'Plaid for Government Benefits', description: 'The case for connecting people’s verified records to the programs that need them.' },
  workflow: {
    headline: 'Less repeated paperwork. More people moving forward.',
    description: 'An applicant should not have to upload the same records for housing support, a fee waiver, and a renewal. Add a reusable verification layer to your intake: retrieve evidence from the accounts they already use, then share the relevant fields across participating programs with their permission.',
    steps: ['Applicant connects a source', 'Verify and reuse evidence', 'Programs apply their rules'],
  },
  examples: [
    { title: 'Income beyond payroll databases', icon: 'briefcase', claim: '“My income comes from gig work.”', source: 'The applicant’s gig-platform earnings account, such as a delivery or rideshare account, where the required records are available.', fields: ['Earnings', 'Earnings period', 'Source', 'Verification date'], workflow: 'Fill a missing income check for an applicant outside your payroll coverage. Reuse the evidence for another program when consent and freshness requirements allow.' },
    { title: 'Residency beyond uploaded bills', icon: 'building', claim: '“I live in the area this program serves.”', source: 'An authenticated utility or telecom account that displays the account holder and service address.', fields: ['Account holder', 'Service address', 'Account status'], workflow: 'Retrieve an address record directly when a document upload is missing or hard to authenticate. Let each program assess whether it meets its residency requirements.' },
    { title: 'Enrollment beyond manual letters', icon: 'graduation', claim: '“I’m currently enrolled at this institution.”', source: 'The applicant’s university or training-provider portal, where current enrollment is shown.', fields: ['Institution', 'Enrollment status', 'Term or dates'], workflow: 'Support a student travel concession, training allowance, or fee waiver with the same enrollment evidence instead of requesting another letter.' },
  ],
  boundaries: [
    { title: 'Keep the checks that work. Fill the gaps.', body: 'When a payroll connection, database lookup, or document check cannot answer a question, add a source-account check at that point. Return the evidence to the same case-management workflow your team already uses.' },
    { title: 'Reusable evidence. Program-specific decisions.', body: 'Each participating program defines which evidence it accepts and how recent it must be. Store the verification along with the audit trail, for reuse later.' },
  ],
  cta: { label: 'Talk to us', href: siteConfig.bookingUrl, action: 'booking' },
  faq: [
    { question: 'What does reusable verification mean?', answer: 'A verified record can support more than one participating service without asking the applicant to retrieve the same information again. Each use depends on the applicant’s consent, the receiving program’s accepted evidence, and its freshness requirements.' },
    { question: 'Where can this fill a gap in our current verification?', answer: 'Start with a claim your current checks cannot resolve: gig income outside a payroll database, a service address behind a utility login, or enrollment in an institution without an integration. We test whether the applicant’s source account exposes the fields your program needs.' },
    { question: 'Can this work with our benefits portal or case-management system?', answer: 'Add a verification link to intake or a caseworker’s request for more evidence. Return structured fields and source context to your existing workflow, where your team applies program rules.' },
    { question: 'Does verified evidence automatically establish eligibility?', answer: 'Your program determines eligibility. A source record answers a specific question; your team still assesses all program requirements and maintains a review path for applicants who cannot connect an account.' },
  ],
};

export const hiring: VerticalContent = {
  slug: 'hiring', label: 'Hiring BGV', audience: 'FOUNDERS · HIRING TEAMS · RECRUITING PLATFORMS',
  headline: 'Verify', highlight: 'before you interview.',
  description: 'Founders and hiring teams are flooded with unverified job applications from AI agents. Put affordable, global verification at the top of your funnel, so the claims behind your shortlist have evidence before your team spends time interviewing.',
  heroNote: 'At application time. Across borders. Priced for volume.',
  examplesHeading: 'Check the claims your résumé screen cannot.',
  exampleWorkflowLabel: 'Before the first interview',
  finalTitle: 'What should you know before the first interview?',
  workflow: {
    headline: 'Move verification to the top of the funnel.',
    description: 'Ask for the evidence that matters when someone applies. A candidate connects the relevant account, Reclaim returns the available records, and your team reviews a shortlist with verified claims. Save interview time for applicants whose experience you can substantiate.',
    steps: ['Receive an application', 'Verify key claims', 'Shortlist and interview'],
  },
  examples: [
    { title: 'Employment across borders', icon: 'globe', claim: '“I worked at this company for three years.”', source: 'The candidate’s employer, payroll, or employment-record portal, including sources outside your usual database coverage.', fields: ['Employer', 'Role, if shown', 'Employment dates'], workflow: 'Check an overseas role or employment period before scheduling, without waiting for a manual reference email to move forward.' },
    { title: 'Education at the source', icon: 'graduation', claim: '“I graduated from this university.”', source: 'The candidate’s university or academic-record portal, where the qualification and completion status are available.', fields: ['Institution', 'Qualification', 'Completion status', 'Dates'], workflow: 'Verify a qualification for a role that requires it, even when the institution is outside your usual screening coverage.' },
    { title: 'Work activity beyond a résumé', icon: 'code', claim: '“I contribute to software projects.”', source: 'The candidate’s development-platform account, such as GitHub, where contribution records can be retrieved.', fields: ['Account', 'Project activity', 'Contribution dates'], workflow: 'Bring evidence of relevant activity into the first conversation. Use interviews and assessments to evaluate skill, authorship, and the quality of the work.' },
  ],
  boundaries: [
    { title: 'Global sources. Lower-cost screening.', body: 'Reach candidate-authorized records across countries and platforms. Use automated source checks for the few claims that matter at application time, with volume pricing that makes earlier verification practical. Confirm source coverage and pricing for your hiring flow.' },
    { title: 'Verify more than the usual database can.', body: 'A missing database entry does not have to end the check. An accessible employer, university, or work-platform account can provide another route to evidence. Review unavailable records with the candidate; account activity alone does not establish identity or job performance.' },
  ],
  cta: { label: 'Talk to us', href: siteConfig.bookingUrl, action: 'booking' },
  faq: [
    { question: 'Why verify before the interview?', answer: 'Verification at application time gives recruiters evidence before they invest in interviews. Start with one or two role-relevant claims, such as a required qualification or a period of employment, then review the results alongside the application.' },
    { question: 'Can we verify candidates in different countries?', answer: 'Reclaim can retrieve evidence from supported source accounts across countries. Coverage depends on the specific employer, institution, or platform and the fields it exposes. Bring the sources your candidates use so we can confirm the checks you need.' },
    { question: 'Is early verification affordable at application volume?', answer: 'Automated source checks and volume pricing let you design a low-cost screening step around specific claims. Discuss your application volume, sources, and required fields with us to price the workflow.' },
    { question: 'Does this replace all background checks?', answer: 'Reclaim supplies evidence for specific claims. Your team decides which additional identity, reference, assessment, or background checks a role needs. Candidates who cannot complete a check should have a way to provide alternative evidence.' },
  ],
};

export const promotions: VerticalContent = {
  slug: 'promotions', label: 'Promotions', audience: 'CASHBACK · SAMPLING · CREATOR REIMBURSEMENTS',
  headline: 'Verify the purchase', highlight: 'behind the claim.',
  description: 'Retrieve purchase evidence from shoppers’ source accounts to support cashback, sampling, and reimbursement decisions.',
  workflow: {
    headline: 'Give the difficult claims a clearer next step.',
    description: 'Keep your usual receipt and campaign checks. Add an account connection when its value justifies another user step, particularly for receipt exceptions or higher-value claims.',
    steps: ['Receive a reward claim', 'Retrieve purchase evidence', 'Apply your campaign rules'],
  },
  examples: [
    { title: 'Cashback and rebates', icon: 'card', claim: '“I made a purchase that qualifies for this offer.”', source: 'The shopper’s account on the retailer’s website.', fields: ['Merchant', 'Item', 'Purchase date', 'Amount', 'Order ID'], workflow: 'Compare available purchase fields with your campaign’s product, date, and spend requirements before approving cashback.' },
    { title: 'Creator and tester reimbursements', icon: 'users', claim: '“I bought the item for this campaign.”', source: 'The creator’s or product tester’s retailer order history.', fields: ['Merchant', 'Item', 'Amount', 'Order ID'], workflow: 'Attach purchase evidence to the reimbursement request. Review content, testing, or other deliverables separately.' },
    { title: 'Receipt exceptions', icon: 'bag', claim: '“My receipt is missing, damaged, or disputed.”', source: 'The retailer’s authenticated order page. Receipt email only where supported; email verification is in development.', fields: ['Merchant', 'Purchase date', 'Amount', 'Order ID', 'Order status, if checked'], workflow: 'Give your review team another source of evidence when the usual receipt flow cannot resolve the claim.' },
  ],
  boundaries: [
    { title: 'Your campaign. Your decision.', body: 'Reclaim supplies evidence. You apply eligibility rules, duplicate-claim checks, and reward approval logic. Account connection is best placed where the additional evidence earns the extra user step.' },
    { title: 'A purchase has limits as evidence', body: 'Purchase evidence alone does not prove affiliate attribution, physical possession, completion of a review, or absence of a later return. Current order status is reported only when the source exposes it and the verification checks it.' },
  ],
  cta: { label: 'Test one purchase-verification flow', href: siteConfig.bookingUrl, action: 'booking' },
  faq: [
    { question: 'Does Reclaim decide whether to approve a reward?', answer: 'No. Reclaim returns the available evidence from the source. Your application applies campaign rules, duplicate checks, and any other requirements before making a reward or reimbursement decision.' },
    { question: 'Which purchase fields can be returned?', answer: 'Candidate fields include merchant, item, purchase date, amount, and order ID. Availability depends on the retailer, account, and verification configuration. Test the required fields with your source before deploying.' },
    { question: 'Can you prove that an item was not returned?', answer: 'A purchase record does not establish the absence of a later return. A verification can report current order status only if the source exposes it and the configured check retrieves it. Any later change needs a separate check.' },
    { question: 'Should every shopper connect an account?', answer: 'Place this step where its value justifies the effort, such as a higher-value reimbursement or a missing, damaged, or disputed receipt. Keep a fallback review path for shoppers who cannot complete verification.' },
    { question: 'Can you check an emailed receipt?', answer: 'Received-email verification is in development. Confirm source support before offering it in a campaign. Start with authenticated retailer order history where the required purchase information is available.' },
    { question: 'What happens when we test a flow?', answer: 'We discuss your promotions workflow, select a source and purchase fields, and test the evidence against your approval rules. Bring one campaign or receipt exception to begin.' },
  ],
};
