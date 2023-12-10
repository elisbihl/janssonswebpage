import { Component, getAssetPath, h, Element, Host } from '@stencil/core';

@Component({
  tag: 'image-carousel',
  styleUrls: ['image-carousel.css',
    '../../assets/fontawesome/css/all.css'],
  shadow: true,
  assetsDirs: ["../../assets/images"]
})

export class ImageCarousel {

  @Element() element: HTMLElement;
  private images = ["bild3.jpg", "bild2.jpeg", "bild1.jpeg", "IMG_0063.JPG", "cover.jpg", "janssons.jpg"]

  private imageMoving: boolean = false;

  private async buttonTimeOut(increment: number) {
    if (!this.imageMoving) {
      this.changeSlide(increment)
    }

    this.imageMoving = true;
    if (this.imageMoving) {
      setTimeout(() => {
        this.imageMoving = false;
      }, 300);
    }
  }

  private changeSlide(increment: number) {
    this.element.shadowRoot.querySelectorAll(".slide").forEach((slide: HTMLElement) => {
      let slideIndex: number = 0;
      slide.classList.forEach((c) => {
        if (c.includes("slide-")) {
          slideIndex = Number(c[c.length - 1]);
        }
      });
      let newIndex;
      if (slideIndex == this.images.length && increment == 1) {
        newIndex = 1;
      } else if (slideIndex == 1 && increment == -1) {
        newIndex = this.images.length;
      } else {
        newIndex = (slideIndex + increment);
      }
      console.log(newIndex);
      slide.classList.replace("slide-" + slideIndex, "slide-" + newIndex);
    });
  }

  render() {
    return (
      <Host>
        <div class="slider">
          <div class="images">
            {
              this.images.map((image, index) => {
                return (
                  <div>
                    <img class={"slide slide-" + (index + 1)} src={getAssetPath(`../../assets/images/${image}`)} alt="" />
                  </div>
                );
              })
            }
            <div class="backdrop"></div>
          </div>
          <div class="controls">
            <button disabled={this.imageMoving} onClick={() => this.buttonTimeOut(1)} class="btn btn-prev"><i class="fa-solid fa-arrow-left"></i></button>
            <button disabled={this.imageMoving} onClick={() => this.buttonTimeOut(-1)} class="btn btn-next"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </Host>
    );
  }
}
