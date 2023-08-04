import { newE2EPage } from '@stencil/core/testing';

describe('image-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<image-carousel></image-carousel>');

    const element = await page.find('image-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
