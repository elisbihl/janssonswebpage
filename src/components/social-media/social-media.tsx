import { Component, h } from '@stencil/core';

@Component({
  tag: 'social-media',
  styleUrl: 'social-media.css',
  shadow: true,
})
export class SocialMedia {

  render() {
    return (
      <div class="container">
        <div id="socials">
          <ul>
            <li class="social-link"><a>Spotify</a></li>
            <li class="social-link"><a>Facebook</a></li>
            <li class="social-link"><a>Instagram</a></li>
            <li class="social-link"><a>Tiktok</a></li>
          </ul>
        </div>
      </div>
    );
  }

}
