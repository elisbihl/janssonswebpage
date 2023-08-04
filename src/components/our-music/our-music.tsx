import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'our-music',
  styleUrl: 'our-music.css',
  shadow: true,
})
export class OurMusic {

  render() {
    return (
      <div class="music">
        <div class="player">
          <iframe
            class="spotify-player"
            src="https://open.spotify.com/embed/album/3z0zICSQQj9ZNNO7c7xXTD?utm_source=generator&theme=0"
            width="100%"
            height="352"
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
