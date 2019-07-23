import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { MenuService } from 'src/app/services/menu/menu.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  constructor(private router: Router,
    private menuService: MenuService,
    private languageService: LanguageService,
    private auth: AuthService) { }

  ngOnInit() {
  }

  changeMenu() {
    this.menuService.changeMenu()
  }

  activeRoute(routename: string): boolean {
    return (this.router.url.toString() === routename)
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/'])
  }

  setLanguage(language: string) {
    this.languageService.setLanguage(language)
  }

}
