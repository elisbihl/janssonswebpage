import {getAssetPath, Component, h } from '@stencil/core';

@Component({
  tag: 'social-media',
  styleUrl: 'social-media.css',
  shadow: true,
  assetsDirs: ["../../assets/images"]
})

export class SocialMedia {

  render() {
    return (
      <div class="content">
         <h2> Socials </h2>
        <div class="socials-row" id="socials">
         <a href="https://instagram.com/janssonstemptationxp">
             <img src={getAssetPath('../../assets/images/instagram.png')} alt=""/>
         </a>
         <a href="https://open.spotify.com/artist/6phazupSvTafjFXdr9wrtn">
             <img src={getAssetPath('../../assets/images/spotify.png')} alt=""/>
         </a>
         <a href="https://www.facebook.com/thejanssonstemptation">
             <img src={getAssetPath('../../assets/images/facebook.png')} alt=""/>
         </a>
         <a href="https://jtxp.bandcamp.com/">
             <img src={getAssetPath('../../assets/images/bandcamp.png')} alt=""/>
         </a>
         <a href="https://www.tiktok.com/@janssonstemptation">
             <img src={getAssetPath('../../assets/images/tik-tok.png')} alt=""/>
         </a>
         <a href="https://soundcloud.com/janssonstemptation">
             <img src={getAssetPath('../../assets/images/soundcloud.png')} alt=""/>
         </a>
         <a href="https://music.apple.com/us/artist/the-janssons-temptation-experience/1693580014">
             <img src={getAssetPath('../../assets/images/social.png')} alt=""/>
         </a>
         <a href="https://www.youtube.com/channel/UCUCpBQizFVYJDH8B4CayjDg/featured?sub_confirmation=1">
             <img src={getAssetPath('../../assets/images/youtube.png')} alt=""/>
         </a>
         <a href="mailto:janssons2021@gmail.com">
             <img src={getAssetPath('../../assets/images/email.png')} alt=""/>
         </a>
        </div>
        <br/>
        Email: janssons2021@gmail.com
        <br/>
      </div>
    );
  }

}
