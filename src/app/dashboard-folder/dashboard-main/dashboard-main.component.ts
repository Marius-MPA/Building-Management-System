import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_shared/services/user.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  public isMenuVisible = false;

  constructor(public userService : UserService) { }

  ngOnInit(): void {
  }

  public toggleMenu(){
    this.isMenuVisible = !this.isMenuVisible; 
  }

  logout(){
    this.userService.logOut();
    alert('Good Bye!! :-)\n\n')
  }

}
