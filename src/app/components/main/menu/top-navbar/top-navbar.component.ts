import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { smoothlyMenu } from 'src/app/app.helpers';
import { LanguageService } from 'src/app/services/language/language.service';

declare let $;

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor(private router: Router,
    private auth: AuthService,
    private languageService: LanguageService,
    private menuService: MenuService) { }

  ngOnInit() {
  }

  toggleNavigation(): void {
    $("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/'])
  }

  changeMenu() {
    this.menuService.changeMenu()
  }

  setLanguage(language: string) {
    this.languageService.setLanguage(language);
  }

}
