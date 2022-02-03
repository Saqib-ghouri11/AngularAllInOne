import { AbstractControl, ValidatorFn } from "@angular/forms";

export function UserValidation(forbiddenName:RegExp):ValidatorFn  {
    return (control:AbstractControl):{[key:string]:any} | null=>{
        //here we test value for pattern match
        const forbidden=forbiddenName.test(control.value);
        return forbidden?{forbiddenName:{value:control.value}}:null;

    }
}
