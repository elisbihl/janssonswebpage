import { Component, h } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
  shadow: true,
})
export class NavBar {

  render() {
    return (
      <div class="nav">
        <div class="titleContainer">
          <h1>Janssons Temptation Experience</h1>
        </div>
        <ul class="nav-bar">
          <li class="nav-item"><a href="#music">Music</a></li>
          <li class="nav-item"><a href="#about">About</a></li>
          <li class="nav-item"><a href="mailto:">Contact</a></li>
          <li class="nav-item"><a href="#socials">Socials</a></li>
        </ul>
      </div>
    );
  }

}
