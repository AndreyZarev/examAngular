import { ValidatorFn } from "@angular/forms";

export function validateEmail(domains: string[]): ValidatorFn {
    const reGex = new RegExp("/\w+@\w{2,}\.(bg|com)/gm")
    const domainStrings = domains.join("|")
    return (control) => {
        console.log("Control value: " + control.value);

        return null

    }
}