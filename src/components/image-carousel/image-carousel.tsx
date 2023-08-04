import { Component, getAssetPath, h, Element, Host, State } from '@stencil/core';

@Component({
  tag: 'image-carousel',
  styleUrls: ['image-carousel.css',
    '../../assets/fontawesome/css/all.css'],
  shadow: true,
  assetsDirs: ["../../assets/images"]
})

export class ImageCarousel {

  @Element() element: HTMLElement;
  @State() curSlide = 0;
  private images = ["janssons.jpg", "IMG_0063.JPG", "IMG_0072.JPG", "IMG_0495.jpg", "cover.jpg"]

  componentWillLoad() {

  }

  nextImage() {
    this.curSlide = (this.curSlide + 1) % this.images.length;
  }

  prevImage() {
    this.curSlide =
      (this.curSlide - 1 + this.images.length) % this.images.length;
  }

  private changeSlide(increment: number) {
    const newIndex = this.curSlide + increment;
    this.curSlide = (newIndex + this.images.length) % this.images.length;

    this.element.shadowRoot.querySelectorAll(".slide").forEach((slide: HTMLElement, index: number) => {
      slide.style.transform = `translateX(-${this.curSlide * Number(slide.style.width)}px)`;
    });
  }

  render() {
    return (
      <Host>
        <div class="slider">
          <div class="images">
            {
              this.images.map((slide, index) => {
                return (
                  <div class={this.curSlide == index ? "current slide" : "slide"}>
                    <img src={getAssetPath(`../../assets/images/${slide}`)} alt="" />
                  </div>
                );
              })
            }
            <div class="backdrop"></div>
          </div>
          <div class="controls">
            <button onClick={() => this.changeSlide(-1)} class="btn btn-prev"><i class="fa-solid fa-arrow-left"></i></button>
            <button onClick={() => this.changeSlide(1)} class="btn btn-next"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </Host>
    );
  }
}
