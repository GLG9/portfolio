import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-de-header',
  templateUrl: './de-header.component.html',
  styleUrls: ['./de-header.component.sass'],
})
export class DeHeaderComponent {

  constructor(private router: Router) { }

  toggleMenu() {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn !== null) {
      if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }
  }

  ngOnInit() {
    // Logik für das Hinzufügen der active-link Klasse basierend auf der aktuellen Route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activateCurrentLink();
      }
    });
  }

  private activateCurrentLink() {
    const currentUrl = this.router.url;
    const navLinks = document.querySelectorAll('.nav-menu a.nav-link');
    navLinks.forEach(link => {
      if (link.getAttribute('routerLink') === currentUrl) {
        link.classList.add('active-link');
        console.log(link);
      } else {
        link.classList.remove('active-link');
        console.log(link);
      }
    });
  }

}
