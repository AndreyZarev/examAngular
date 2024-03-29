import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidators]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatorsDirective,
    multi: true
  }]
})
export class ValidatorsDirective implements Validator {
  reGex = "/\w+@\w{2,}\.(bg|com)/gm"
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return null
  }
  constructor() { }

}
