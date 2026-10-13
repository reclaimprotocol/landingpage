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
  slug: 'research' | 'promotions';
  label: string;
  audience: string;
  headline: string;
  highlight: string;
  description: string;
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
