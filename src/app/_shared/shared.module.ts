import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { CurrentDateComponent } from './components/current-date/current-date.component';
import { FahrenheitPipe } from './pipes/fahrenheit/fahrenheit.pipe';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MomentPipe } from './pipes/moment-timeConversion/moment.pipe';



@NgModule({
  declarations: [
    ErrorComponent,
    CurrentDateComponent,
    FahrenheitPipe,
    MomentPipe
  ],
  imports: [
    CommonModule,
    // HttpClientModule,
    // HttpClientJsonpModule

  ],
  exports : [ 
    ErrorComponent,
    CurrentDateComponent,
    FahrenheitPipe,
    MomentPipe
  ]
})
export class SharedModule { }
