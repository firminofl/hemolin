import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavigationComponent } from './menu/side-navigation/side-navigation.component';
import { TopNavbarComponent } from './menu/top-navbar/top-navbar.component';
import { TopNavigationComponent } from './menu/top-navigation/top-navigation.component';
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main.routing.module';
import { AboutComponent } from './about/about.component';
import { ChartjsModule } from '@ctrl/ngx-chartjs';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SideNavigationComponent,
    TopNavbarComponent,
    TopNavigationComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    ChartjsModule
  ]
})
export class MainModule { }
