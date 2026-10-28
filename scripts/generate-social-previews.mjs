import { readFile } from 'node:fs/promises';
import sharp from 'sharp';

const logo = (await readFile(new URL('../public/reclaim-logo.png', import.meta.url))).toString('base64');
const pages = [
  { name: 'home', eyebrow: 'SOURCE-ACCOUNT VERIFICATION', lines: ['Verify your users’', 'claims.'], blue: ['Directly from', 'the source.'], source: 'Shopify account', field: 'Subscription', value: 'Active' },
  { name: 'research', eyebrow: 'RECLAIM FOR RESEARCH', lines: ['Verify that', 'participants'], blue: ['actually qualify.'], source: 'Product account', field: 'Membership', value: 'Active' },
  { name: 'promotions', eyebrow: 'RECLAIM FOR PROMOTIONS', lines: ['Verify the purchase'], blue: ['behind the claim.'], source: 'Retailer order history', field: 'Purchase amount', value: '$38.00 USD' },
  { name: 'government', eyebrow: 'RECLAIM FOR GOVERNMENT SERVICES', lines: ['Verify once.'], blue: ['Reuse across', 'programs.'], source: 'Applicant’s source account', field: 'Evidence', value: 'Reusable with consent' },
  { name: 'hiring', eyebrow: 'RECLAIM FOR HIRING', lines: ['Verify before'], blue: ['you interview.'], source: 'Candidate’s source account', field: 'Employment', value: 'Source-backed records' },
];
for (const page of pages) {
  const lines = [...page.lines, ...page.blue];
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#fff"/><rect y="620" width="1200" height="10" fill="#0000ee"/>
    <image href="data:image/png;base64,${logo}" x="54" y="45" width="34" height="34"/>
    <g font-family="Arial, Helvetica, sans-serif"><text x="100" y="69" font-size="23" font-weight="600" fill="#101010">Reclaim Protocol</text>
    <text x="55" y="149" font-size="13" letter-spacing="2" fill="#646476">${page.eyebrow}</text>
    ${lines.map((line, i) => `<text x="52" y="${230 + i * 68}" font-size="61" letter-spacing="-2.5" fill="${i >= page.lines.length ? '#0000ee' : '#111'}">${line}</text>`).join('')}
    <text x="55" y="566" font-size="18" fill="#555">One claim. A relevant source. Verifiable evidence.</text>
    <rect x="742" y="147" width="405" height="351" rx="16" fill="#f1f3ff" stroke="#e0e4f3"/>
    <rect x="768" y="176" width="353" height="291" rx="10" fill="#fff" stroke="#dfe3ee"/>
    <text x="790" y="208" font-size="12" fill="#62697c" letter-spacing="1">ILLUSTRATIVE RESULT</text>
    <line x1="768" x2="1121" y1="227" y2="227" stroke="#e6e8ef"/>
    <circle cx="800" cy="262" r="12" fill="#eaf6ec"/><path d="m794 262 4 4 8-9" stroke="#267138" stroke-width="2" fill="none"/>
    <text x="824" y="269" font-size="21" fill="#111">Evidence to work with.</text>
    <text x="790" y="314" font-size="13" fill="#777">${page.field}</text><text x="1096" y="314" text-anchor="end" font-size="14" fill="#111">${page.value}</text>
    <line x1="790" x2="1097" y1="332" y2="332" stroke="#eee"/>
    <text x="790" y="360" font-size="13" fill="#777">Source</text><text x="1096" y="360" text-anchor="end" font-size="13" fill="#111">${page.source}</text>
    <line x1="790" x2="1097" y1="378" y2="378" stroke="#eee"/>
    <text x="790" y="407" font-size="13" fill="#777">Verified at</text><text x="1096" y="407" text-anchor="end" font-size="13" fill="#111">13 Oct 2026 · 14:32 UTC</text>
    <text x="790" y="447" font-size="11" fill="#62697c">Requested fields + source + proof reference</text>
    </g></svg>`;
  await sharp(Buffer.from(svg)).png().toFile(new URL(`../public/social-${page.name}.png`, import.meta.url).pathname);
}

const teaser = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f8f9ff"/><rect y="620" width="1200" height="10" fill="#0000ee"/>
  <image href="data:image/png;base64,${logo}" x="54" y="45" width="34" height="34"/>
  <g font-family="Arial, Helvetica, sans-serif"><text x="100" y="69" font-size="23" font-weight="600" fill="#101010">Reclaim Protocol</text>
  <text x="55" y="185" font-size="14" letter-spacing="2" fill="#646476">STUDENT DISCOUNTS</text>
  <text x="52" y="283" font-size="75" letter-spacing="-3" fill="#111">Something is coming.</text>
  <text x="52" y="370" font-size="75" letter-spacing="-3" fill="#0000ee">Stay curious.</text>
  <text x="55" y="468" font-size="23" fill="#444">In partnership with the largest student verification company in the world.</text>
  <text x="55" y="560" font-size="17" fill="#646476">Details announcing soon.</text></g></svg>`;
await sharp(Buffer.from(teaser)).png().toFile(new URL('../public/social-student-discounts.png', import.meta.url).pathname);
