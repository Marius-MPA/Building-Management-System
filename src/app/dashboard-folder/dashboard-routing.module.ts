import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResidentsDetailComponent } from '../menu-folder/residents/residents-detail/residents-detail.component';
import { ResidentsComponent } from '../menu-folder/residents/residents/residents.component';
import { LogInGuard } from '../_shared/guards/log-in.guard';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImpNumListComponent } from './important-numbers/imp-num-list/imp-num-list.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { Weather7DaysComponent } from './weather/weather7-days/weather7-days.component';

const routes: Routes = [
  { path: 'dashboardMainComponent', 
    component: DashboardMainComponent,  
    // canActivate: [LogInGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      },
      // {
      //   path: 'residents',
      //   component: ResidentsComponent
      // },
      // { path: 'residents/detail/:id', component: ResidentsDetailComponent },
      // { path: 'residents/detail', component: ResidentsDetailComponent },
      {
        path: 'invoices',
        component: InvoicesComponent
      },
      {
        path: 'Weather7Days',
        component: Weather7DaysComponent
      },
      {
        path: 'imp-num-list',
        component: ImpNumListComponent
      },
    ] 
  },
  // {  // daca fac 'path' separat, cand se incarca dispare pagina 'dashboard-main'; ramane doar 'app-component' si 'residences'
  //   path: 'residents',
  //   component: ResidentsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
