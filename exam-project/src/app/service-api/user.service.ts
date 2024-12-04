import { Injectable } from "@angular/core";
import { User } from "src/interface/user";
import { UserLogin } from "src/interface/user-login";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
@Injectable({
    providedIn: 'root',
})

export class UserService {
    public user$$ = new BehaviorSubject<User | undefined>(undefined);
    public user$ = this.user$$.asObservable();
    user: User | undefined;
    // USER_KEY = this.user$$;
    email = localStorage.getItem("email")
    accessToken = localStorage.getItem("accessToken")

    userSubscription: Subscription;

    get isLogged(): boolean {
        if (!!this.user) {
            debugger
            return !!this.user;

        } else if (this.email !== null) {
            debugger
            return true

        } else {
            return false

        }
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
    ): Observable<{ accessToken: string, email: string }> {
        return this.http.post<User>('http://localhost:3030/users/register', { email, password })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    logout(token: string | number) {
        const headers = new HttpHeaders({
            'X-Authorization': token
        })

        return this.http.get('http://localhost:3030/users/logout', { headers }).pipe(
            tap(() => {
                this.user$$.next(undefined);
                localStorage.removeItem("accessToken")
                localStorage.removeItem("email")
            })
        );
    }

    setUser(user: UserLogin): void {
        this.user$$.next(user);

    }

}