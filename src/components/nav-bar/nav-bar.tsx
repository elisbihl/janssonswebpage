import {getAssetPath, Component, h } from '@stencil/core';

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
           <img class="banner" src={getAssetPath('../../assets/images/banner.png')} alt=""/>
        </div>

      </div>
    );
  }

}
