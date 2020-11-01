import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInGuard } from '../_shared/guards/log-in.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboardComponent', component: DashboardComponent,  canActivate: [LogInGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
