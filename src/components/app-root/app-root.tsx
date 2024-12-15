import { Component, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <div class="main">
          <body class="maja"/>
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
