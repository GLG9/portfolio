import { Component } from '@angular/core';
import { DeHeaderComponent } from '../../layout/de-header/de-header.component';
import { DeFooterComponent } from '../../layout/de-footer/de-footer.component';
import { SharedModule } from '../../layout/shared.module';

@Component({
  selector: 'app-de-projects',
  standalone: true,
  imports: [
    SharedModule,
    DeFooterComponent
  ],
  templateUrl: './de-projects.component.html',
  styleUrl: './de-projects.component.sass'
})
export class DeProjectsComponent {

}
