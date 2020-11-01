import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false; // aici pot pune TRUE si sar pese guard pana fac modificari

  set isLoggedIn(value: boolean){
    this.loggedIn = value;
  }

  get isLoggedIn(){
    return this.loggedIn;
  }

  constructor(private storage: StorageService) { }

  public logIn(loginData) {
    this.isLoggedIn = false; // !!! incepem cu prezumtia ca nu este logat si apoi daca totul e ok devine TRUE
    let user = this.storage.getUser(loginData.userEmail); // deci user va fi :key = q@ya.com si Value = toate valorile de la aceasta key
    console.log(user);
    if(user !== null && loginData.userPassword === user.password) 
    {
      this.isLoggedIn = true; 
    }
  }

  public logOut() {
    this.isLoggedIn = false;
  }
}
