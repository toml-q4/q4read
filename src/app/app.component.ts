import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private framworkConfigService: FrameworkConfigService)
  {
    let config:FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'asset/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com'},
        { imageFile: 'asset/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com'},
        { imageFile: 'asset/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com'}
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    framworkConfigService.configure(config);
  }
}
