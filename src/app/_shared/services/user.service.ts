import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false; // normal este 'FALSE' , dar aici pun 'TRUE' si sar pese guard pana fac modificari

  set isLoggedIn(value: boolean){
    this.loggedIn = value;
  }

  get isLoggedIn(){
    return this.loggedIn;
  }

  constructor(private storage: StorageService) { }

  public logIn(loginData) {
    this.isLoggedIn = false; 
    let user = this.storage.getUser(loginData.userEmail); 

    // console.log(user);

    if(user !== null && loginData.userPassword === user.password) 
    {
      this.isLoggedIn = true; 
    }
  }

  public logOut() {
    this.isLoggedIn = false;
  }
}
