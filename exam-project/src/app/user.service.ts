import { Injectable } from "@angular/core";
import { User } from "src/interface/user";
import { UserLogin } from "src/interface/user-login";

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Subscription, tap } from 'rxjs';
@Injectable({
    providedIn: 'root',
})

export class UserService {
    public user$$ = new BehaviorSubject<UserLogin | undefined>(undefined);
    private user$ = this.user$$.asObservable();

    user: UserLogin | undefined;
    USER_KEY = '[user]';

    userSubscription: Subscription;

    get isLogged(): boolean {
        return !!this.user;
    }

    constructor(private http: HttpClient) {
        this.userSubscription = this.user$.subscribe((user) => {
            this.user = user;
        });
    }

    login(email: string, password: string) {
        const api3030 = 'http://localhost:3030/users/login'
        return this.http
            .post<UserLogin>(api3030, { email, password })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    register(
        email: string,
        password: string,
    ) {
        return this.http
            .post<User>('http://localhost:3030/users/register', {
                email,
                password,
            })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    logout() {
        console.log("we are in user service");

        return this.http
            .get('http://localhost:3030/users/logout', {})
            .pipe(tap(() => this.user$$.next(undefined)));

    }


}