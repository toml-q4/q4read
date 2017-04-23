import { Component } from '@angular/core';
import { FrameworkConfigService } from '../fw/services/framework-config.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private framworkConfigService: FrameworkConfigService)
  {

  }
}
