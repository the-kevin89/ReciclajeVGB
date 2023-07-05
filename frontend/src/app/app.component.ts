import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen: boolean = false;

  shouldShow(): boolean {
    const currentURL = this.router.url;
    return !(currentURL.includes('/iniciar-sesion') || currentURL.includes('/registro'));
  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
}