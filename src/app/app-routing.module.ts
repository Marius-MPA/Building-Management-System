import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRoutingModule } from './user/user-routing.module';


const routes: Routes = [
  { path: '', redirectTo: '/loginComponent', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserRoutingModule
  ],
  exports: [
    RouterModule,
    UserRoutingModule
  ]
})
export class AppRoutingModule { }
