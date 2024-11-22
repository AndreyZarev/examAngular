import { Injectable } from "@angular/core";
import { User } from "src/interface/user";
import { UserLogin } from "src/interface/user-login";

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
@Injectable({
    providedIn: 'root',
})

export class UserService {
    public user$$ = new BehaviorSubject<UserLogin | undefined>(undefined);
    private user$ = this.user$$.asObservable();

    user: UserLogin | undefined;
    USER_KEY = this.user$$;

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

    logout(): Observable<void> {
        console.log('Logging out...');
        return this.http.get<void>('http://localhost:3030/users/logout', { withCredentials: true }).pipe(
            tap(() => {
                console.log('User logged out, updating state');
                this.user$$.next(undefined);
            })
        );
    }

    setUser(user: User): void {
        this.user$$.next(user);

    }

}