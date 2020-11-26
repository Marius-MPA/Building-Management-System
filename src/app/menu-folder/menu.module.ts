import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';

import { ResidentsComponent } from './residents/residents/residents.component';
import { ResidentsDetailComponent } from './residents/residents-detail/residents-detail.component';
import { ResidentsSearchComponent } from './residents/residents-search/residents-search.component';
import { SharedModule } from '../_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ResidentsComponent,
    ResidentsDetailComponent,
    ResidentsSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    MenuRoutingModule,
    SharedModule
  ],
  exports: [
    ResidentsComponent,
    ResidentsDetailComponent,
    ResidentsSearchComponent
  ]
})
export class MenuModule { }
