import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Location } from '@angular/common';

@Component({
  selector: 'app-weather7-days',
  templateUrl: './weather7-days.component.html',
  styleUrls: ['./weather7-days.component.css']
})
export class Weather7DaysComponent implements OnInit {

  private appId: string;
  private appCode: string;

  public weather: any;

  public constructor(private http: HttpClient,
                     private location: Location) {
      this.appId = "zuXEnPiJb0iRlRT57CTt";
      this.appCode = "Z5Gd0q25RD1rp31Nt0WLDw";
      this.weather = [];
  }
  public ngOnInit() { 
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          this.getWeather(position.coords);
      });
  } else {
      console.error("The browser does not support geolocation...");
  }
  }

  public getWeather(coordinates: any) {
    this.http.jsonp("https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=" + coordinates.latitude + "&longitude=" + coordinates.longitude + "&app_id=" + this.appId + "&app_code=" + this.appCode, "jsonpCallback")
        .pipe(map(result => (<any>result).dailyForecasts.forecastLocation))
        .subscribe(result => {
            this.weather = result.forecast;
        }, error => {
            console.error(error);
        });
  }

  goBack(){
    this.location.back();
  }

}
