import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import { DeHeaderComponent } from '../../layout/de-header/de-header.component';
import { DeFooterComponent } from '../../layout/de-footer/de-footer.component';

@Component({
  selector: 'app-de-home',
  standalone: true,
  imports: [
    DeHeaderComponent,
    DeFooterComponent
  ],
  templateUrl: './de-home.component.html',
  styleUrl: './de-home.component.sass'
})
export class DeHomeComponent {

  downloadFile() {
    const link = document.createElement('a');
    link.href = 'assets/h.txt'; // Pfad zur Datei
    link.download = 'h.txt';
    link.click();
  }




}
