import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'about-us',
  styleUrl: 'about-us.css',
  shadow: true,
})
export class AboutUs {

  render() {
    return (
      <Host>
        <slot>
          <div id="about">
            This is us
          </div>
        </slot>
      </Host>
    );
  }

}
