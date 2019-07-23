import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
declare let $;

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements OnInit {

    menuTop: boolean = false
    unsub$ = new Subject()

    constructor(private menuService: MenuService,
        private auth: AuthService) {
        this.menuTop = this.menuService.menuTop
        if (this.menuTop) {
            $('body').addClass('top-navigation')
        }
    }

    isAuthenticated() {
        return this.auth.isAuthenticated()
    }

    ngOnInit() {
        this.menuService.isMenuTop.pipe(takeUntil(this.unsub$)).subscribe(data => this.menuTop = data)
    }

    ngOnDestroy() {
        this.unsub$.next()
        this.unsub$.complete()
    }

}
