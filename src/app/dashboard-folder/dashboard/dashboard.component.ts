import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public isMenuVisible = false;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  public toggleMenu(){
    this.isMenuVisible = !this.isMenuVisible; 
  }

  logout(){
    this.userService.logOut();
    console.log('hello');
  }
}
