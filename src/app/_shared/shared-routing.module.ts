import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMainComponent } from '../dashboard-folder/dashboard-main/dashboard-main.component';
import { LoginComponent } from '../user/login/login.component';

const routes: Routes = [
    { path: 'dashboardMainComponent', component: DashboardMainComponent },
    { path: 'loginComponent', component: LoginComponent }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class SharedRoutingModule { }