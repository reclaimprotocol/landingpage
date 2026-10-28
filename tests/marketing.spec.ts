import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  { path: '/', heading: 'Verify your users’ claims.Directly from the source.', social: 'home' },
  { path: '/solutions/research', heading: 'Verify that participants actually qualify.', social: 'research' },
  { path: '/solutions/promotions', heading: 'Verify the purchase behind the claim.', social: 'promotions' },
  { path: '/solutions/government', heading: 'Verify once. Reuse across programs.', social: 'government' },
  { path: '/solutions/hiring', heading: 'Verify before you interview.', social: 'hiring' },
  { path: '/solutions/student-discounts', heading: 'Something is coming.Stay curious.', social: 'student-discounts' },
];

for (const route of routes) {
  test(`${route.path} renders, has distinct metadata, and passes accessibility checks`, async ({ page, request }, testInfo) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(route.heading);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://reclaimprotocol.org${route.path === '/' ? '' : route.path}`);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', `https://reclaimprotocol.org/social-${route.social}.png`);
    expect((await request.get(`/social-${route.social}.png`)).status()).toBe(200);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    // YouTube owns the embedded player. Its iframe title is checked separately below.
    const audit = await new AxeBuilder({ page }).exclude('.solution-video').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(audit.violations).toEqual([]);
    for (const image of await page.locator('main img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty('complete', true);
      expect(await image.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: testInfo.outputPath(`${route.social}.png`), fullPage: true });
    expect(errors).toEqual([]);
  });
}

test('hero screenshot walkthrough explains each step without recording live verification', async ({ page }) => {
  const events: Record<string, unknown>[] = [];
  await page.exposeFunction('captureMarketing', (event: Record<string, unknown>) => events.push(event));
  await page.addInitScript(() => {
    window.addEventListener('reclaim:analytics', event => {
      (window as unknown as { captureMarketing: (event: unknown) => void }).captureMarketing((event as CustomEvent).detail);
    });
  });
  await page.goto('/');
  const showcase = page.getByRole('region', { name: 'Employment verification walkthrough' });
  await expect(page.locator('.enterprise-hero .verification-showcase')).toBeVisible();
  await expect(showcase.getByRole('button', { name: 'Previous step' })).toBeDisabled();
  for (const step of ['Choose the source', 'Open a verification session.', 'Login into the source', 'Finish signing in.', 'Verify cryptographically', 'See the verified result.']) {
    await expect(showcase.getByRole('heading', { name: step, exact: true })).toBeVisible();
    const screenshot = showcase.getByRole('img');
    await expect(screenshot).toHaveJSProperty('complete', true);
    expect(await screenshot.evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
    if (step !== 'See the verified result.') await showcase.getByRole('button', { name: 'Next step', exact: true }).click();
  }
  await showcase.getByRole('button', { name: 'Previous step' }).click();
  await expect(showcase.getByRole('heading', { name: 'Verify cryptographically' })).toBeVisible();
  await showcase.getByRole('button', { name: 'Step 6: See the verified result.' }).click();
  await showcase.getByRole('button', { name: 'Replay showcase' }).click();
  await expect(showcase.getByRole('heading', { name: 'Choose the source' })).toBeVisible();
  expect(events).toEqual([]);
});

test('result section shows the verified view', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.result-select')).toHaveText('Verified');
  await expect(page.getByRole('heading', { name: 'Requested evidence is available.' })).toBeVisible();
  await expect(page.locator('.result-record')).toContainText('Shopify account');
  const audit = await new AxeBuilder({ page }).include('.result-explorer').withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(audit.violations).toEqual([]);
});

test('promotions campaign survives navigation and booking without private query data', async ({ page }) => {
  const events: Record<string, unknown>[] = [];
  await page.exposeFunction('captureMarketing', (event: Record<string, unknown>) => events.push(event));
  await page.addInitScript(() => {
    window.addEventListener('reclaim:analytics', event => {
      (window as unknown as { captureMarketing: (event: unknown) => void }).captureMarketing((event as CustomEvent).detail);
    });
  });
  await page.goto('/?utm_source=outreach&utm_medium=email&utm_campaign=retail-Q4&utm_content=variant-a&email=private@example.com&claim=private-claim&utm_term=private-search');
  await page.getByRole('contentinfo').getByRole('link', { name: 'Promotions', exact: true }).click();
  await expect(page).toHaveURL(/\/solutions\/promotions\?.*utm_campaign=retail-Q4/);
  const cta = page.getByRole('link', { name: 'Test one purchase-verification flow' }).first();
  await expect(cta).toHaveAttribute('href', /utm_content=variant-a.promotions/);
  const url = new URL((await cta.getAttribute('href'))!);
  expect(url.searchParams.get('vertical')).toBe('promotions');
  expect(url.searchParams.get('utm_source')).toBe('outreach');
  expect(url.toString()).not.toContain('private');
  await page.route('https://calendly.com/**', route => route.fulfill({ status: 200, contentType: 'text/html', body: '<h1>Booking handoff test</h1>' }));
  await cta.click();
  await expect(page.getByRole('heading', { name: 'Booking handoff test' })).toBeVisible();
  expect(events.some(event => event.event === 'booking_handoff' && event.vertical === 'promotions' && event.utm_campaign === 'retail-Q4')).toBe(true);
  expect(JSON.stringify(events)).not.toContain('private');
  for (const event of events) expect(Object.keys(event).every(key => ['event', 'page', 'vertical', 'placement', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_id'].includes(key))).toBe(true);
});

test('live demo CTA records only a handoff, even when no analytics service is installed', async ({ page }) => {
  await page.addInitScript(() => { window.dataLayer = []; });
  await page.goto('/solutions/research?utm_campaign=panel-pilot');
  await page.route('https://letters.reclaimprotocol.org/**', route => route.abort());
  const cta = page.getByRole('link', { name: 'Test one participant criterion' }).first();
  await expect(cta).toHaveAttribute('href', /vertical=research/);
  // Prevent document navigation after the React click handler, while retaining the real event path.
  await page.evaluate(() => document.addEventListener('click', event => event.preventDefault()));
  await cta.click();
  const events = await page.evaluate(() => window.dataLayer);
  expect(events?.map(event => event.event)).toEqual(['reclaim_cta_click', 'reclaim_demo_handoff']);
  expect(events?.[1]).toMatchObject({ vertical: 'research', utm_campaign: 'panel-pilot' });
});

test('navigation, horizontal cards, and FAQs work with keyboard controls', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  const rail = page.getByRole('region', { name: /Verification use cases/ });
  await page.getByRole('button', { name: 'Scroll use cases right' }).click();
  await expect.poll(() => rail.evaluate(el => el.scrollLeft)).toBeGreaterThan(0);
  if (testInfo.project.name === 'mobile') {
    await page.locator('.mobile-menu summary').click();
    await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Govt Services', exact: true }).click();
  } else {
    await page.getByRole('link', { name: 'Learn more about Govt Services' }).click();
  }
  const question = page.locator('.faq-list summary').first();
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.faq-list details').first()).toHaveAttribute('open', '');
});

test('solutions follow the requested order and the gap section follows how it works', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.use-case-card h3')).toHaveText(['Govt Services', 'Hiring BGV', 'Status match', 'Student Discounts', 'Other workflows']);
  await expect(page.locator('#how + section')).toHaveAttribute('id', 'verification-gaps');
  const destinations = ['/solutions/government', '/solutions/hiring', '/status-match', '/solutions/student-discounts'];
  const links = page.locator('.use-case-card .text-link');
  for (const [i, path] of destinations.entries()) expect(new URL((await links.nth(i).getAttribute('href'))!, 'https://reclaimprotocol.org').pathname).toBe(path);
  expect(new URL((await links.last().getAttribute('href'))!).hostname).toBe('calendly.com');
});

test('government video is below the fold and student teaser keeps the partnership unnamed', async ({ page }) => {
  // Check the embed wiring without depending on the third-party player during local QA.
  await page.route('https://www.youtube-nocookie.com/**', route => route.fulfill({ status: 200, contentType: 'text/html', body: '<p>Video player</p>' }));
  await page.goto('/solutions/government');
  const video = page.locator('#solution-video iframe');
  await expect(video).toHaveAttribute('src', 'https://www.youtube-nocookie.com/embed/3CDvfm9DYjw');
  await expect(video).toHaveAttribute('title', 'Plaid for Government Benefits');
  const bounds = await video.boundingBox();
  expect(bounds!.y).toBeGreaterThan(page.viewportSize()!.height);
  await page.goto('/solutions/student-discounts');
  await expect(page.locator('main')).toContainText('largest student verification company in the world');
  await expect(page.locator('main')).toContainText('Details announcing soon.');
  await expect(page.locator('main img, main iframe, main form')).toHaveCount(0);
  await expect(page.locator('main')).not.toContainText(/SheerID/i);
  await expect(page.locator('main').getByRole('link', { name: 'Talk to us' })).toHaveAttribute('href', /vertical=student-discounts&utm_content=student-discounts/);
});

test('new landing pages preserve campaign context and record their own page identity', async ({ page }) => {
  await page.addInitScript(() => { window.dataLayer = []; });
  for (const vertical of ['government', 'hiring', 'student-discounts']) {
    await page.goto(`/solutions/${vertical}?utm_source=solutions&utm_campaign=launch&email=private@example.com`);
    const cta = page.locator('main').getByRole('link', { name: 'Talk to us', exact: true }).first();
    await expect(cta).toHaveAttribute('href', /utm_campaign=launch/);
    const url = new URL((await cta.getAttribute('href'))!);
    expect(url.searchParams.get('vertical')).toBe(vertical);
    expect(url.searchParams.get('utm_campaign')).toBe('launch');
    expect(url.toString()).not.toContain('private');
    await page.evaluate(() => document.addEventListener('click', event => event.preventDefault()));
    await cta.click();
    const events = await page.evaluate(() => window.dataLayer);
    expect(events?.at(-1)).toMatchObject({ event: 'reclaim_booking_handoff', page: vertical, vertical, utm_campaign: 'launch' });
  }
});

test('preserves existing routes, redirects, and homepage anchors', async ({ page, request }) => {
  for (const path of ['/employment', '/education', '/age-and-identity', '/status-match', '/privacy']) {
    expect((await request.get(path)).status()).toBe(200);
  }
  const redirect = await request.get('/identity', { maxRedirects: 0 });
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe('/age-and-identity');
  await page.goto('/');
  for (const id of ['verify', 'pricing', 'results', 'trust', 'integrate', 'pilot']) await expect(page.locator(`#${id}`)).toHaveCount(1);
});

test('booking context and page content work without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/solutions/promotions`);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Verify the purchase behind the claim.');
  await expect(page.getByRole('link', { name: 'Test one purchase-verification flow' }).first()).toHaveAttribute('href', /vertical=promotions&utm_content=promotions/);
  await context.close();
});
