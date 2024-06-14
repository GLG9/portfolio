import { Component } from '@angular/core';

@Component({
  selector: 'app-de-header',
  standalone: true,
  imports: [],
  templateUrl: './de-header.component.html',
  styleUrl: './de-header.component.sass'
})
export class DeHeaderComponent {

  myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

}
