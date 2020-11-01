import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../dashboard-folder/dashboard-routing.module';
import { DashboardComponent } from '../dashboard-folder/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'loginComponent', component: LoginComponent },
  { path: 'registerComponent', component: RegisterComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            DashboardRoutingModule],
            
  exports: [RouterModule]
})
export class UserRoutingModule { }
