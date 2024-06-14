import { Component } from '@angular/core';
import { DeHeaderComponent } from '../../layout/de-header/de-header.component';

@Component({
  selector: 'app-de-home',
  standalone: true,
  imports: [DeHeaderComponent],
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
