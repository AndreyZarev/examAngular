import { Injectable } from "@angular/core";
import { User } from "src/interface/user";
import { UserLogin } from "src/interface/user-login";

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Subscription, tap } from 'rxjs';
@Injectable({
    providedIn: 'root',
})

export class UserService {
    private user$$ = new BehaviorSubject<UserLogin | undefined>(undefined);
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
        return this.http
            .post<UserLogin>('/api/users/login', { email, password })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    register(
        username: string,
        email: string,
        tel: string,
        password: string,
        rePassword: string
    ) {
        return this.http
            .post<User>('/api/register', {
                username,
                email,
                tel,
                password,
                rePassword,
            })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    logout() {
        return this.http
            .post('/api/logout', {})
            .pipe(tap(() => this.user$$.next(undefined)));
    }


}