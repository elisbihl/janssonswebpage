import { newSpecPage } from '@stencil/core/testing';
import { SocialMedia } from '../social-media';

describe('social-media', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SocialMedia],
      html: `<social-media></social-media>`,
    });
    expect(page.root).toEqualHtml(`
      <social-media>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </social-media>
    `);
  });
});
