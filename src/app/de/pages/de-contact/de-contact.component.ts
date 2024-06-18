import { Component } from '@angular/core';
import { DeHeaderComponent } from '../../layout/de-header/de-header.component';
import { DeFooterComponent } from '../../layout/de-footer/de-footer.component';

@Component({
  selector: 'app-de-contact',
  standalone: true,
  imports: [
    DeHeaderComponent,
    DeFooterComponent
  ],
  templateUrl: './de-contact.component.html',
  styleUrl: './de-contact.component.sass'
})
export class DeContactComponent {

}
