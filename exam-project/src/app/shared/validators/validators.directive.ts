import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { validateEmail } from '../utils/email-validator'
@Directive({
  selector: '[appValidators]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatorsDirective,
    multi: true
  }]
})
export class ValidatorsDirective implements Validator, OnChanges {
  @Input() appValidators: string[] = []

  constructor() { }

  validator: ValidatorFn = () => null


  validate(control: AbstractControl<any, any>): ValidationErrors | null {

    console.log("control", control);

    return null
  }
  //


  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['appValidators']

    if (currentValue?.length) {
      this.validator = validateEmail(currentValue)
    }
  }

}
