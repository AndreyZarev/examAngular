import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appValidators]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatorsDirective,
    multi: true
  }]
})
export class ValidatorsDirective {

  constructor() { }

}
