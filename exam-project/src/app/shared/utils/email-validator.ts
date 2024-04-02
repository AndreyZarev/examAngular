

import { ValidatorFn } from '@angular/forms';

export function validateEmail(domains: string[]): ValidatorFn {
    const domainString = domains.join('|');
    const regExp = new RegExp(`[A-Za-z0-9]+@gmail\.(${domainString})`);
    debugger
    return (control) => {
        const isEmailInvalid = control.value === '' || regExp.test(control.value);
        return isEmailInvalid ? null : { validateEmail: true };
    };
}