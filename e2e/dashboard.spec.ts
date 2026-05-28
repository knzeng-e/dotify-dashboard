import { test, expect } from '@playwright/test'

test('dashboard presents Dotify Music without Lab sections', async ({ page }) => {
  await page.goto('/#/')
  await expect(page.getByRole('heading', { name: /Music becomes a shared presence/i })).toBeVisible()
  await expect(page.locator('[data-testid="music-flow"] canvas')).toBeVisible()
  const paintedPixels = await page.locator('[data-testid="music-flow"] canvas').evaluate((canvas) => {
    const context = canvas.getContext('2d')
    if (!context) return 0

    const data = context.getImageData(0, 0, canvas.width, canvas.height).data
    let visiblePixels = 0
    for (let index = 3; index < data.length; index += 4) {
      if (data[index] > 0) visiblePixels += 1
    }
    return visiblePixels
  })
  expect(paintedPixels).toBeGreaterThan(1_000)
  await expect(page.getByRole('heading', { name: /One music app/i })).toBeVisible()
  await expect(page.getByRole('heading', { name: /Dotify Lab/i })).not.toBeVisible()
})

test('navigation anchors expose the core product story', async ({ page }) => {
  await page.goto('/#/')
  await page.getByRole('link', { name: 'How it works' }).click()
  await expect(page.getByRole('heading', { name: /From private listening to a room/i })).toBeVisible()
  await page.getByRole('link', { name: 'Values', exact: true }).click()
  await expect(page.getByRole('heading', { name: /The cultural value/i })).toBeVisible()
  await page.getByRole('link', { name: 'Trust' }).click()
  await expect(page.getByRole('heading', { name: /technology quietly protects/i })).toBeVisible()
})

test('language toggle switches dashboard content', async ({ page }) => {
  await page.goto('/#/')
  await expect(page.locator('.lang-btn', { hasText: 'EN' })).toHaveClass(/active/)
  await page.locator('.lang-btn', { hasText: 'FR' }).click()
  await expect(page.locator('.lang-btn', { hasText: 'FR' })).toHaveClass(/active/)
  await expect(page.getByRole('heading', { name: /La musique devient/i })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Comment ça marche' })).toBeVisible()
})

test('mobile dashboard keeps primary canvas and content visible', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/#/')
  await expect(page.locator('[data-testid="music-flow"] canvas')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Product', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: /Music becomes/i })).toBeVisible()
})
