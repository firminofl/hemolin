import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'src/app/services/cookie/cookie.service';
import { AuthService } from 'src/app/services/auth/auth.service';

declare let $;

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  username: string = ''
  userEmail: string = ''

  constructor(private router: Router,
    private auth: AuthService,
    private cookie: CookieService) { }

  ngOnInit() {
    $('#side-menu').metisMenu();
    this.username = this.auth.user.user.name;
    this.userEmail = this.auth.user.user.email;
  }
  
  activeRoute(routename: string): boolean {
    return (this.router.url.toString() === routename)
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/'])
  }
  
}
