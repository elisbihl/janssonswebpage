import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <div class="content">
        <nav-bar></nav-bar>
        <image-carousel></image-carousel>
        <our-music></our-music>
        <about-us></about-us>
        <social-media></social-media>
      </div>
    );
  }

}
