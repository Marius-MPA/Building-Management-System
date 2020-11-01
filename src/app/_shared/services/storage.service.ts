import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveUser(user){
    localStorage.setItem(user.email, JSON.stringify(user))
    //        storage.setItem(keyName, keyValue);
  }

  getUser(email){
    return JSON.parse(localStorage.getItem(email));
  }
}
