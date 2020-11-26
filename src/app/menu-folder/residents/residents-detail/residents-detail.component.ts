import { Component, OnInit,Input } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Resident } from 'src/app/_shared/resident';
import { ResidentsService } from 'src/app/_shared/services/residents.service';


@Component({
  selector: 'app-residents-detail',
  templateUrl: './residents-detail.component.html',
  styleUrls: ['./residents-detail.component.css']
})
export class ResidentsDetailComponent implements OnInit {

  @Input() residentDetail : Resident = {
    
    id: undefined,
    apartment: undefined,
    buildingName: undefined,
    floor: undefined,
    numberOfRooms: undefined,
    undividedShare: undefined, //cota parte indiviza
    name: undefined,
    tenantName: undefined,
    numberOfPersons: undefined,
    pets: undefined,

  };

  public id;

  constructor(private location: Location,
              private activeRoute : ActivatedRoute,
              private residentService : ResidentsService) { }

  ngOnInit() {
    this.obtainId();
    if(this.id){
      this.getResident(this.id);
    }
  }

  obtainId(){
    this.activeRoute.params.subscribe((params) => {
      if(params.id){
        this.id = params.id;
      }
    });
  }
  getResident(id: number){
    this.residentService.getResidentDetail(id).
        subscribe((person) => {
          this.residentDetail = <any>person;
          }
        )
    
  }

  goBack(){
    this.location.back();
  }

  save():void{
    if(this.id){
      this.residentService.updateResident(this.residentDetail).
      subscribe(() => this.goBack());
    } else {
      this.residentService.saveResident(this.residentDetail)
    .subscribe(() => this.goBack());
    }
    
  }

  delete():void {
    this.residentService.deleteResident(this.residentDetail).subscribe(() => this.goBack());
  }
  // delete(residentDetail):void {
  //   this.residentService.deleteResident(this.residentDetail).subscribe(() => this.goBack());
  // }
}
