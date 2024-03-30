import { ValidatorFn } from "@angular/forms";

export function validateEmail(domains: string[]): ValidatorFn | null {
    return (control) => {
        console.log("Control value: " + control.value);
        const reGex = new RegExp("/\w+@\w{2,}\.(bg|com)/gm")
        return null

    }
}