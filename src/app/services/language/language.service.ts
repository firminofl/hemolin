import { Injectable, EventEmitter } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { prefixStorageDash } from 'src/app/properties';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  changeLanguageEmitter = new EventEmitter<string>();

  constructor(
    private translate: TranslateService) { }

  setLanguage(language: string) {
    this.translate.resetLang(this.translate.getDefaultLang());
    this.translate.setDefaultLang(language);
    this.translate.use(language);
    localStorage.setItem(`${prefixStorageDash}:language`, language);
    this.translate.reloadLang(language);
    this.changeLanguageEmitter.emit(language);
  }
}
