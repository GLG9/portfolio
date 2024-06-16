// shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeHeaderComponent } from './de-header/de-header.component';
import { DeFooterComponent } from './de-footer/de-footer.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DeHeaderComponent,
    //DeFooterComponent
  ],
  exports: [
    DeHeaderComponent,
    //DeFooterComponent
  ]
})
export class SharedModule { }