import { newE2EPage } from '@stencil/core/testing';

describe('simple-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<simple-slider></simple-slider>');

    const element = await page.find('simple-slider');
    expect(element).toHaveClass('hydrated');
  });
});
