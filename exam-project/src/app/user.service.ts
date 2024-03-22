import { Injectable } from "@angular/core";
import { User } from "src/interface/user";

@Injectable({
    providedIn: 'root',
})

export class UserService {
    user: User | undefined
    USER_KEY = '[user]'

    get isLogged(): boolean {
        return !!this.user;
    }
    constructor() {
        try {
            const lsUser = localStorage.getItem(this.USER_KEY) || "";
            this.user = JSON.parse(lsUser)
        } catch (err) {
            console.log(err);

        }
    }
    login() {
        debugger
        this.user = {
            firstName: "Pesho",
            email: "pesho@gmail.com",
            password: "pass1",
            rePassword: "pass1",
        }
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
    }

    logout() {

        this.user = undefined;
        localStorage.removeItem(this.USER_KEY)
    }
}