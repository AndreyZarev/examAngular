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

    login(email: string, password: string): Observable<{ email: string, password: string, accessToken: string; }> {
        return this.http.post<UserLogin>('http://localhost:3030/users/login', { email, password })
            .pipe(tap((user) => this.user$$.next(user)));
    };




    register(
        email: string,
        password: string,
    ) {
        return this.http
            .post<UserLogin>('http://localhost:3030/users/register', {
                email,
                password,
                accessToken: '',
            })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    logout() {
        console.log('Logging out...');
        return this.http.get('http://localhost:3030/users/logout', { withCredentials: true }).pipe(
            tap(() => {
                console.log('User logged out, updating state');
                this.user$$.next(undefined);
            })
        );
    }

    setUser(user: UserLogin): void {
        this.user$$.next(user);

    }

}