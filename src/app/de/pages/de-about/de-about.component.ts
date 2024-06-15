import { Component } from '@angular/core';
import { DeHeaderComponent } from '../../layout/de-header/de-header.component';
import { DeFooterComponent } from '../../layout/de-footer/de-footer.component';

@Component({
  selector: 'app-de-about',
  standalone: true,
  imports: [
    DeHeaderComponent,
    DeFooterComponent
  ],
  templateUrl: './de-about.component.html',
  styleUrl: './de-about.component.sass'
})
export class DeAboutComponent {

}
