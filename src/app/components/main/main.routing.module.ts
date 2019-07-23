import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const mainRoutes: Routes = [
  {
      path: '', component: MainLayoutComponent,
      children: [
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
