import { ValidatorFn } from "@angular/forms";

export function validateEmail(domains: string[]): ValidatorFn | null {
    return (control) => {
        console.log("Control value: " + control.value);

        return null

    }
}