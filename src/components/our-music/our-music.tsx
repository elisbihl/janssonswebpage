import { Component, h } from '@stencil/core';

@Component({
  tag: 'our-music',
  styleUrl: 'our-music.css',
  shadow: true,
})
export class OurMusic {

  render() {
    return (
      <div class="music" id="music">
        <div class="player">
          <iframe
            class="spotify-player"
            src="https://open.spotify.com/embed/artist/6phazupSvTafjFXdr9wrtn?utm_source=generator&theme=0"
            width="100%"
            height="460"
            frameBorder="0"
            allowfullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>
      </div>
    );
  }

}
