import { ValidatorFn } from "@angular/forms";

export function validateEmail(domains: string[]): ValidatorFn {
    const domainStrings = domains.join("|")
    const reGex = new RegExp(\w *.?\w * @\w{ 2, }\.(${ domainStrings })g)



    return (control) => {
        const isInvalid = control.value === "" || reGex.test(control.value);
        debugger
        console.log("Test Regex: ", isInvalid, "control value", control.value);

        return isInvalid ? null : { validateEmail: true }

    }
}