import { Component } from '@angular/core';
import { SharedModule } from '../../layout/shared.module';
import { DeFooterComponent } from '../../layout/de-footer/de-footer.component';
import { DeHeaderComponent } from '../../layout/de-header/de-header.component';


@Component({
  selector: 'app-de-feedback',
  standalone: true,
  imports: [
    DeHeaderComponent,
    DeFooterComponent
  ],
  templateUrl: './de-feedback.component.html',
  styleUrl: './de-feedback.component.sass'
})
export class DeFeedbackComponent {

}
