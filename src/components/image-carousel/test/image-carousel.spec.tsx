import { newSpecPage } from '@stencil/core/testing';
import { ImageCarousel } from '../image-carousel';

describe('image-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ImageCarousel],
      html: `<image-carousel></image-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <image-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </image-carousel>
    `);
  });
});
