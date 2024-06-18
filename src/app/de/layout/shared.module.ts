import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeHeaderComponent } from './de-header/de-header.component';
import { DeFooterComponent } from './de-footer/de-footer.component';

@NgModule({
  imports: [
    CommonModule,
    DeHeaderComponent,
    DeFooterComponent // DeHeaderComponent direkt importieren
  ],
  declarations: [
    // DeHeaderComponent entfernen
    // DeFooterComponent
  ],
  exports: [
    DeHeaderComponent,
    DeFooterComponent 
    // DeHeaderComponent direkt exportieren
    // DeFooterComponent
  ]
})
export class SharedModule { }
