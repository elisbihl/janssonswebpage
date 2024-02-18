import { Component, Host, h, getAssetPath} from '@stencil/core';

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

          <div id="about" class="about">
            <img src={getAssetPath('../../assets/images/bio_bild.jpg')} alt="" class="bio-bild" />
            <div>
                <h2> About </h2>
                The Jansson's Temptation Experience is a rock band from Linköping, Sweden.
                Their music resembles the first bite of Jansson's Temptation you eat on Christmas Eve.
                Drawing inspirations from bands like Tame Impala, Dungen och Pink Floyd,
                the band is known for their mixture of trippy psychedelics jams, heavier stoner riffs
                and experimental folk melodies.
                <br/>
                <br/>
                They started in 2021 as multi-instrumentalist
                Kevin Kågemyr wanted a band to play his music. He recruited his brother Joel on bass,
                aswell as friends Elis 'Thunder Jr.' Bihl on drums and Gustav 'CG' Höglund on guitar/keyboard.
                The band released their first self-titled album in early 2022 and started to play local bar gigs,
                aswell as Festival of the Midnight Sun, where they were met with high praise.
                In 2023 they followed up with their second album 'Lasse Stefan & David', described by DJ Mimmo Caccamo as
                'A record that catapults your mind into the years of flower power'.

            </div>
          </div>
        </slot>
      </Host>
    );
  }

}
