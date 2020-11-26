import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { CurrentDateComponent } from './components/current-date/current-date.component';
import { FahrenheitPipe } from './pipes/fahrenheit/fahrenheit.pipe';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MomentPipe } from './pipes/moment-timeConversion/moment.pipe';
import { FilterArrayPipe } from './pipes/filter-array/filter-array.pipe';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ErrorComponent,
    CurrentDateComponent,
    FahrenheitPipe,
    MomentPipe,
    FilterArrayPipe,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports : [ 
    ErrorComponent,
    CurrentDateComponent,
    FahrenheitPipe,
    MomentPipe,
    FilterArrayPipe,
    MainMenuComponent
  ]
})
export class SharedModule { }

