import { Injectable, EventEmitter } from '@angular/core';

declare let $;

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  isMenuTop = new EventEmitter<boolean>();
  menuTop = false;

  constructor() {
    if (localStorage.getItem('menuTop')) {
      this.menuTop = localStorage.getItem('menuTop') === 'true';
    }
  }

  changeMenu() {
    this.menuTop = !this.menuTop;
    this.isMenuTop.emit(this.menuTop);
    localStorage.setItem('menuTop', this.menuTop.toString());
    $('body').toggleClass('top-navigation')
  }

}
