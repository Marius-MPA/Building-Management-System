import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMainComponent } from '../dashboard-folder/dashboard-main/dashboard-main.component';
import { LogInGuard } from '../_shared/guards/log-in.guard';
import { ResidentsDetailComponent } from './residents/residents-detail/residents-detail.component';
import { ResidentsComponent } from './residents/residents/residents.component';

const routes: Routes = [
  { path: 'dashboardMainComponent', 
    component: DashboardMainComponent,  
    children: [
      {
        path: 'residents',
        component: ResidentsComponent,
        canActivate: [LogInGuard]
      },
      { path: 'residents/detail/:id', component: ResidentsDetailComponent },
      { path: 'residents/detail', component: ResidentsDetailComponent },
      
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
