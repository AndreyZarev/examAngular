import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from 'src/interface/offer';
// import { environment } from 'src/environments/environment.development';
// import { Themes } from 'src/app/interface/themes'
// import { Posts } from 'src/app/interface/posts'
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getCatalog() {
        let apiUrl = 'http://localhost:3030/data'
        return this.http.get<any>(`${apiUrl}/catalog`)
    }




    newOffer(names: string, email: string, hand: string, weight: string, place: string, bet: number) {
        debugger
        return this.http.post<Offer>("http://localhost:3030/data/orders", { names, email, hand, weight, place, bet })
    }
}
