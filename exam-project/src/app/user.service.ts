import { Injectable } from "@angular/core";
import { User } from "src/interface/user";
import { UserLogin } from "src/interface/user-login";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { Token } from "@angular/compiler";
@Injectable({
    providedIn: 'root',
})

export class UserService {
    public user$$ = new BehaviorSubject<User | undefined>(undefined);
    private user$ = this.user$$.asObservable();
    user: User | undefined;
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


    login(email: string, password: string): Observable<{ accessToken: string, email: string }> {
        return this.http.post<User>('http://localhost:3030/users/login', { email, password })
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

    logout(token: string) {
        const headers = new HttpHeaders({
            'X-Authorization': token
        })

        console.log('Logging out...');
        return this.http.get('http://localhost:3030/users/logout', { headers }).pipe(
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