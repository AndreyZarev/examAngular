// import { ValidatorFn } from "@angular/forms";

// export function validateEmail(domains: string[]): ValidatorFn {
//     const domainStrings = domains.join("|")
//     const reGex = new RegExp(`\w*.?\w*@\w{2,}\.(${domainStrings})`)

//     //still returns false

//     return (control) => {
//         const isInvalid = control.value === "" || reGex.test(control.value);
//         debugger
//         console.log("Test Regex: ", isInvalid, "control value", control.value);

//         return isInvalid ? null : { validateEmail: true }

//     }
// }



import { ValidatorFn } from '@angular/forms';

export function validateEmail(domains: string[]): ValidatorFn {
    const domainString = domains.join('|');
    const regExp = new RegExp(`[A-Za-z0-9]+@gmail\.(${domainString})`);

    return (control) => {
        const isEmailInvalid = control.value === '' || regExp.test(control.value);
        return isEmailInvalid ? null : { validateEmail: true };
    };
}