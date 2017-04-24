import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component'
import { ContentComponent } from './content/content.component'
import { TitleBarComponent } from './title-bar/title-bar.component'
import { FrameworkConfigService } from './services/framework-config.service'
import { TopBarComponent } from './top-bar/top-bar.component'
import { BookComponent } from './book/book.component'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    BookComponent
  ],
  providers: [
    FrameworkConfigService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
