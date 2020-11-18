import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../_shared/shared.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { WeatherComponent } from './weather/weather/weather.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Weather7DaysComponent } from './weather/weather7-days/weather7-days.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { ImpNumListComponent } from './important-numbers/imp-num-list/imp-num-list.component';
import { GraphsComponent } from './graphs/graphs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMainComponent,
    InvoicesComponent,
    WeatherComponent,
    Weather7DaysComponent,
    ImportantNumbersComponent,
    ImpNumListComponent,
    GraphsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // HttpClientModule,
    // HttpClientJsonpModule,
    SharedModule,

  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
