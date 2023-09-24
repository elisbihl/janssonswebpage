import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <div class="main">
          <div class="content">
            <nav-bar></nav-bar>
            <about-us></about-us>
            <image-carousel></image-carousel>
            <our-music></our-music>
            <social-media></social-media>
          </div>
      </div>
    );
  }

}
