import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-folder/dashboard-routing.module';
import { MenuRoutingModule } from './menu-folder/menu-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { LogInGuard } from './_shared/guards/log-in.guard';
import { SharedRoutingModule } from './_shared/shared-routing.module';


const routes: Routes = [
  // { path: '', redirectTo: '/loginComponent', pathMatch: 'full' },
  { path: '', redirectTo: '/dashboardMainComponent', pathMatch: 'full' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserRoutingModule,
    DashboardRoutingModule,
    MenuRoutingModule,
    SharedRoutingModule
  ],
  exports: [
    RouterModule,
    UserRoutingModule,
    DashboardRoutingModule,
    MenuRoutingModule,
    SharedRoutingModule
  ]
})
export class AppRoutingModule { }
