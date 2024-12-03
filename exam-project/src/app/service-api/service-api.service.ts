import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Comments } from 'src/interface/comments';
import { Offer } from 'src/interface/offer';
import { Theme } from 'src/interface/themes';
// import { environment } from 'src/environments/environment.development';
// import { Themes } from 'src/app/interface/themes'
// import { Posts } from 'src/app/interface/posts'
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getCatalog() {

        let apiUrl = 'http://localhost:3030'
        return this.http.get<Offer[]>(`${apiUrl}/jsonstore/offers`)
    }


    getComments() {

        let apiUrl = 'http://localhost:3030'
        return this.http.get<Comments[]>(`${apiUrl}/jsonstore/comments`)
    }


    getOffer(id: string) {
        let apiUrl = 'http://localhost:3030'

        let result = this.http.get<Offer>(`${apiUrl}/jsonstore/offers` + `/${id}`)
        return result
    }
    getDetails(form: Observable<any>) {
        return form
    }
    newOffer(img: string, names: string, email: string, hand: string, weight: string, place: string, bet: string): Observable<Offer> {

        debugger

        let apiUrl = 'http://localhost:3030'

        console.log(img, names, email, hand, weight, place, bet);

        return this.http.post<Offer>(`${apiUrl}/jsonstore/offers`, { img, names, email, hand, weight, place, bet })



    }

    updateOffer(img: string, names: string, email: string, hand: string, weight: string, place: string, bet: string, _id: string): Observable<Offer> {

        debugger

        let apiUrl = 'http://localhost:3030'

        console.log(img, names, email, hand, weight, place, bet);

        return this.http.put<Offer>(`${apiUrl}/jsonstore/offers/${_id}`, { img, names, email, hand, weight, place, bet, _id })



    }
    deleteOffer(id: string) {

        debugger

        let apiUrl = 'http://localhost:3030'


        return this.http.delete(`${apiUrl}/jsonstore/offers/${id}`, {})



    }
}
