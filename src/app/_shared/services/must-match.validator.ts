import { FormGroup } from '@angular/forms';

//custom validator to check that two fields match

export function MustMatch (controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: 'these inputs must match'});  // aici a fost true  - dar poate fi orice valoare, orice valoare diferita de NULL este considerata eroare
        } else {
            matchingControl.setErrors(null);
        }
    }
}