import { newE2EPage } from '@stencil/core/testing';

describe('social-media', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<social-media></social-media>');

    const element = await page.find('social-media');
    expect(element).toHaveClass('hydrated');
  });
});
