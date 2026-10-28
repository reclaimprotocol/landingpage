# Enterprise website implementation

## Preview and checks

```sh
npm run dev
npm run build
npm run lint
npx tsc --noEmit
npx playwright install chromium
npm run test:e2e
```

To use an existing Chromium installation instead of downloading one:

```sh
PLAYWRIGHT_CHROMIUM_PATH=/usr/bin/chromium npm run test:e2e
```

The browser suite covers desktop and mobile layouts, WCAG A/AA automated checks, keyboard interactions, images, metadata, attribution, booking and demo handoffs, JavaScript-disabled content, and legacy routes. Screenshots are written to the ignored `test-results/` directory. Third-party navigation is intercepted in automated tests; the tests never submit a booking or connect a real account.

Validated against the local production build: all 32 desktop and mobile browser checks passed; build, TypeScript, and lint passed (11 existing warnings). Checks cover the five-card solution order, gap-section placement, new landing pages, verified-result view, government video, and attribution. The requested text removals and government reuse wording were also confirmed in the generated production HTML. The build still reports the existing AVIF files named `icon.png` and `apple-icon.png` as unoptimized assets.

## Content and extension

- Homepage: `app/page.tsx`.
- The homepage hero uses `app/components/verification-showcase.tsx`: a six-step, user-controlled walkthrough of an employment check. Original supplied screenshots live in `public/showcase/employment/`; each step has a caption, direct selection, Previous/Next controls, and replay. Screenshot navigation does not emit live-verification events. Research and promotions retain their illustrative demos.
- Vertical content: `config/verticals.ts`; shared rendering: `app/components/vertical-page.tsx`.
- New verticals need an explicit route, distinct metadata, three examples, workflow, boundaries, CTA, and FAQ. Do not add placeholder routes.
- The main solution cards are Govt Services, Hiring BGV, Status match, Student Discounts, and Other workflows, in that order. Government and hiring use the shared vertical template with purpose-specific illustrations; Student Discounts uses a minimal announcement page. Research and promotions remain accessible from the footer.
- New routes: `/solutions/government`, `/solutions/hiring`, and `/solutions/student-discounts`. The government video (`3CDvfm9DYjw`) is configured in `config/verticals.ts` and appears below the workflow section using a lazy-loaded YouTube privacy-enhanced embed.
- The homepage gap section (`app/components/verification-gaps.tsx`) follows `#how` and shows existing checks → Reclaim for missing evidence → the existing decision workflow.
- `evidence` accepts approved, vertical-specific customer quotes and source links. No approved research or purchase-verification case study was available, so no testimonial section is published. Existing customer assets remain available in `public/customers/` and `config/logos.ts`.
- Existing pricing values, allocations, rates, and terms are preserved in `app/components/pricing.tsx`.
- The existing routes and `/identity` redirect remain. Homepage anchors `verify`, `pricing`, `results`, `trust`, `integrate`, and `pilot` remain available.
- Enterprise styling is scoped under `.enterprise-site` in `app/enterprise.css` and uses the existing brand colors, logo, typography, source logos, and compliance artwork.
- Social previews: `npm run social:generate`. The generator uses the existing logo and native SVG layout, rendered to PNG with the existing Sharp dependency.

## Measurement

No analytics vendor, tag-manager installation, or analytics environment configuration was present in this checkout. A typed adapter is ready for the existing deployment's collector, but **there is no newly configured remote analytics destination**.

Events are sent to `window.reclaimAnalytics.track(event, properties)` when installed, otherwise to an existing `window.dataLayer`. They also dispatch the browser event `reclaim:analytics` for integration and inspection. The adapter does not create a tracking vendor, cookie, endpoint, or unbounded event queue.

| Event | Trigger |
| --- | --- |
| `cta_click` | A tracked CTA or vertical-selection link is clicked |
| `demo_handoff` | Navigation to the live letters demo |
| `booking_handoff` | Navigation to Calendly |
| `illustration_started` | Leaving the request stage of the local sample |
| `illustration_completed` | Opening the local illustrative result |

Properties are restricted to `page`, `vertical`, `placement`, and validated `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_id`. Campaign values must be non-personal tokens, 1–100 characters, containing only letters, digits, underscores, dots, and hyphens. `utm_term`, arbitrary URL parameters, referrer URLs, claims, account details, proof IDs, and verification results are never collected. Session storage preserves campaign tokens during navigation. Unavailable storage or a failed collector never prevents navigation.

Government, hiring, and student-discount landing pages record their own page identity and carry their vertical context through booking links. Browser accessibility checks audit the page, excluding the third-party YouTube player; the embed’s title and destination are checked separately.

Promotions links always carry `vertical=promotions`. Calendly links additionally carry `utm_content=promotions`, or append `.promotions` to an existing campaign content token, so the vertical appears in Calendly's supported UTM field. This context exists in server-rendered links even without JavaScript; incoming campaign preservation requires JavaScript. Booking clicks are not counted as confirmed bookings.

The external demo has no documented cross-origin lifecycle callback to this site. Its API requires private task credentials for status polling. Therefore, this landing page only measures the handoff, not live demo starts or completions. No private demo credentials are created, forwarded, or recorded. Instrument actual starts/completions in the demo application before reporting those conversion metrics. No contact form is added; conversion uses the requested demo and booking destinations.

## Capability and copy checks (13 October 2026)

| Topic | Evidence and decision |
| --- | --- |
| SDK excerpt | Copied the initialization and export calls from the [current Node.js usage guide](https://docs.reclaimprotocol.org/manual/js-sdk/usage); checked against installed `@reclaimprotocol/js-sdk` 5.0.0-dev.2. Example is explicitly server-side and uses the docs' example provider ID, not an invented Shopify ID. |
| Result terminology | `isVerified`, `extractedParameters`, `onError`, and the cancel callback are documented. An empty success callback may mean delivery to the configured backend, not missing information. See [message anatomy](https://docs.reclaimprotocol.org/troubleshooting/anatomy). Display records are labeled illustrative application views, not exact API payloads. |
| Live demo | [Letters](https://letters.reclaimprotocol.org) returned HTTP 200 and renders the claim-entry flow. Its [agent instructions](https://letters.reclaimprotocol.org/agents.md), [API specification](https://letters.reclaimprotocol.org/openapi.json), and client bundle were inspected. Verification is free; PDF download has separate pricing. No real user verification or paid download was attempted. No new pricing claims about this demo are made on the site. |
| Received email | No established received-email integration was found in this checkout or the inspected letters contracts. Copy labels it in development and conditional on support. |
| Website coverage | Shopify and retailer records are illustrative candidate workflows. No universal-coverage claim or new supported-source directory is published. Confirm each pilot's required source and fields. |
| Trust | The [Trust Center](https://trust.reclaimprotocol.org/section/compliance) lists SOC 2 Type II, ISO 27001, and GDPR readiness. [Y Combinator](https://www.ycombinator.com/companies/reclaim-protocol) lists Reclaim. “NIST 500” was not substantiated and is not published; clarify the intended standard and supporting evidence. |
| Customer evidence | Existing logos are not treated as endorsements of these new verticals. Add approved vertical-specific references through `evidence`. |
| Booking | Calendly returned HTTP 200 with promotions attribution parameters. No appointment was submitted. |
| Status match | The requested domain returned HTTP 200 after redirecting to its admin login. |
| Hiring BGV | `https://smartverify.in` timed out during validation and was inaccessible through a second fetch mechanism. The user-specified destination is preserved; confirm its availability. |

## Remaining decisions

1. Which existing analytics destination should receive the prepared event adapter?
2. What received-email sources and fields, if any, are approved for production claims?
3. What exact NIST standard and evidence were intended by “NIST 500”?
4. Which customer references are approved for these specific verticals?
5. Is the requested Hiring BGV destination available?

Nothing has been deployed to production.
