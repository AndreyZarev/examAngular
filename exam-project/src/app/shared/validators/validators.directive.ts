import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValidators]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatorsDirective,
    multi: true
  }]
})
export class ValidatorsDirective implements Validator {
  @Input() appValidators: string = ""
  reGex = "/\w+@\w{2,}\.(bg|com)/gm"
  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    console.log("control", control);

    return null
  }
  validateEmail(domains: string[]): ValidatorFn | null {
    return (control) => {
      console.log("Control value: " + control.value);

      return null

    }
  }
  constructor() { }

}
