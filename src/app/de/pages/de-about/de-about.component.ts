import { Component } from '@angular/core';
import { DeFooterComponent } from '../../layout/de-footer/de-footer.component';
import { SharedModule } from '../../layout/shared.module';

@Component({
  selector: 'app-de-about',
  standalone: true,
  imports: [
    SharedModule,
    DeFooterComponent
  ],
  templateUrl: './de-about.component.html',
  styleUrl: './de-about.component.sass'
})
export class DeAboutComponent {

}
