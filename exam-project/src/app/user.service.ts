import { Injectable } from "@angular/core";
import { User } from "src/interface/offer";

@Injectable({
    providedIn: 'root',
})

export class UserService {
    user: User | undefined
    isLoggedIn: boolean = false
    USER_KEY = '[user]'
    constructor() {
        const lsUser = localStorage.getItem(this.USER_KEY) || "";
        this.user = JSON.parse(lsUser)
    }
    login() { }

    logout() { }
}