import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  { path: '/', heading: 'Verify your users’ claims.Directly from the source.', social: 'home' },
  { path: '/solutions/research', heading: 'Verify that participants actually qualify.', social: 'research' },
  { path: '/solutions/promotions', heading: 'Verify the purchase behind the claim.', social: 'promotions' },
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
    const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
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

test('illustration is interactive and is never counted as live verification', async ({ page }) => {
  const events: Record<string, unknown>[] = [];
  await page.exposeFunction('captureMarketing', (event: Record<string, unknown>) => events.push(event));
  await page.addInitScript(() => {
    window.addEventListener('reclaim:analytics', event => {
      (window as unknown as { captureMarketing: (event: unknown) => void }).captureMarketing((event as CustomEvent).detail);
    });
  });
  await page.goto('/');
  await page.getByRole('button', { name: 'Preview user action' }).click();
  await expect(page.getByRole('heading', { name: 'Connect the relevant account.' })).toBeVisible();
  await page.getByRole('button', { name: 'Preview the result' }).click();
  await expect(page.getByRole('heading', { name: 'Evidence to work with.' })).toBeVisible();
  await expect(page.locator('.demo-evidence')).toContainText('13 Oct 2026');
  await page.getByRole('button', { name: 'Replay example' }).click();
  await expect(page.getByRole('button', { name: 'Preview user action' })).toBeVisible();
  expect(events.map(event => event.event)).toEqual(['illustration_started', 'illustration_completed']);
});

test('result explorer keeps unavailable information separate from session failure', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Information unavailable', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Keep the claim unresolved.' })).toBeVisible();
  await expect(page.locator('.result-footnote')).toContainText('does not by itself mean information was unavailable');
  await page.getByRole('button', { name: 'Unsuccessful session', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'The session did not complete.' })).toBeVisible();
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
  await page.getByRole('link', { name: 'Learn more about Promotions' }).click();
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
    await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Research', exact: true }).click();
  } else {
    await page.getByRole('link', { name: 'Learn more about Research' }).click();
  }
  const question = page.locator('.faq-list summary').first();
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.faq-list details').first()).toHaveAttribute('open', '');
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

test('booking context and page content work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:3000/solutions/promotions');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Verify the purchase behind the claim.');
  await expect(page.getByRole('link', { name: 'Test one purchase-verification flow' }).first()).toHaveAttribute('href', /vertical=promotions&utm_content=promotions/);
  await context.close();
});
