import { newE2EPage } from '@stencil/core/testing';

describe('our-music', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<our-music></our-music>');

    const element = await page.find('our-music');
    expect(element).toHaveClass('hydrated');
  });
});
