import { Component } from '@angular/core';
import { DeHeaderComponent } from '../../layout/de-header/de-header.component';
import { DeFooterComponent } from '../../layout/de-footer/de-footer.component';
import { SharedModule } from '../../layout/shared.module';

@Component({
  selector: 'app-de-contact',
  standalone: true,
  imports: [
    SharedModule,
    DeFooterComponent
  ],
  templateUrl: './de-contact.component.html',
  styleUrl: './de-contact.component.sass'
})
export class DeContactComponent {

}
