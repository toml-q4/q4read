import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component'
import { ContentComponent } from './content/content.component'
import { TitleBarComponent } from './title-bar/title-bar.component'
import { FrameworkConfigService } from './services/framework-config.service'
import { BookService } from './services/book.service'

import { TopBarComponent } from './top-bar/top-bar.component'
import { BookComponent } from './book/book.component'


import { EbookPipe } from './pipes/ebook.pipe';
import { RealBookPipe } from './pipes/real-book.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    BookComponent,
    EbookPipe,
    RealBookPipe
  ],
  providers: [
    FrameworkConfigService,
    BookService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
