import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imp-num-list',
  templateUrl: './imp-num-list.component.html',
  styleUrls: ['./imp-num-list.component.css']
})
export class ImpNumListComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
