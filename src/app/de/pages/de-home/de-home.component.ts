import { Component, AfterViewInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';
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
  styleUrls: ['./de-home.component.sass']
})
export class DeHomeComponent implements AfterViewInit {
  options = {
    strings: ["Full-Stack Entwickler", "Software Entwickler"],
    loop: true,
    typeSpeed: 150,
    backSpeed: 120,
    backDelay: 2000
  };

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize Typed.js after the view has been fully initialized
      new Typed('.typedText', this.options);
    }
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.href = 'assets/h.txt';
    link.download = 'h.txt';
    link.click();
  }
}
