import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard-folder/dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { RegisterComponent } from './user/register/register.component';
import { DashboardModule } from './dashboard-folder/dashboard.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './_shared/components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    // ErrorComponent,
    // DashboardComponent,
    // LoginComponent,
    // RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    UserModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
