import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ResidentsService } from 'src/app/_shared/services/residents.service';



@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {

  title : string = 'List Of Residents';

  residentsList; // ams sters : Object - ca sa mearga filter

  constructor(private location: Location,
              private resident: ResidentsService) { }

  ngOnInit() {
    this.getResident();
    }

  goBack(){
    this.location.back();
  }

  getResident(){
    this.resident.getResidentList().subscribe((data) => {
    // this.residentsList = data;
    console.log(this.residentsList);
    })
  }

  delete(resident):void {
    this.residentsList = this.residentsList.filter((item) => {
    return item !== resident;  // putem scrie si : filter(h => h !== resident);
    });
    this.resident.deleteResident(resident).subscribe();
  } 

}
