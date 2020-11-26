import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../_shared/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userProfileForm = this.formBuilder.group({
    userEmail: ['', Validators.required],
    userPassword: ['', Validators.required],
    rememberMe: [true]
  });
  
  constructor(private formBuilder: FormBuilder,
    private userService : UserService) { }

  ngOnInit(): void {
  }
  
  login(){
    // console.log(this.userProfileForm.value); 
    this.userService.logIn(this.userProfileForm.value);
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.userProfileForm.value);
  }
  
  
}
