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
        <div>
          Janssons Temptation Experience
        </div>
        <ul class="nav-bar">
          <li class="nav-item"><a href="#music">Music</a></li>
          <li class="nav-item"><a href="#about">About</a></li>
          <li class="nav-item"><a href="#contact">Contact</a></li>
          <li class="nav-item"><a href="#socials">Socials</a></li>
        </ul>
      </div>
    );
  }

}
