import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

  buildError(errors){
    if(errors){
      let errorArray : string[] = [];  // string[] - semnifica un string format din array-uri
      
      if(errors.required){
        errorArray.push('This field is required')
      }  
      if(errors.minlength){
        errorArray.push('Min 4 characters are required')
      }
      if(errors.email){
        errorArray.push('Email format is required')
      }
      
      // if(errors.MustMatch){
      //   errorArray.push('Match password required')
      // }

      // if(errors['technologyIntrestedIn'].required){
      //   errorArray.push('Selection is required')
      // }

      if(errors.requiredTrue){ // de ce nu il gaseste pe requiredTrue ????
        errorArray.push('Accepting Ts & Cs is required')
      }
      console.log(errors);

      //return errorArray.join('. ') + '.';
      return errorArray ? `${errorArray.join('. ') + '.'}` : [];
    }
  }
}
