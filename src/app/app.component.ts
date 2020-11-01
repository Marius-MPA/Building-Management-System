import { Component } from '@angular/core';
import { UserService } from './_shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Building-Management-System';

  constructor(private userService : UserService) { }

  logout(){
    this.userService.logOut();
    console.log('hello');
    
  }
}
