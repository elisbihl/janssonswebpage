import { newSpecPage } from '@stencil/core/testing';
import { OurMusic } from '../our-music';

describe('our-music', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OurMusic],
      html: `<our-music></our-music>`,
    });
    expect(page.root).toEqualHtml(`
      <our-music>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </our-music>
    `);
  });
});
