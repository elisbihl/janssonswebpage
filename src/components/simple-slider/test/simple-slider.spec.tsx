import { newSpecPage } from '@stencil/core/testing';
import { SimpleSlider } from '../simple-slider';

describe('simple-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SimpleSlider],
      html: `<simple-slider></simple-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <simple-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </simple-slider>
    `);
  });
});
