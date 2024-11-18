import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
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


    getOffer(id: string) {
        let apiUrl = 'http://localhost:3030'

        let result = this.http.get<Offer[]>(`${apiUrl}/jsonstore/offers` + `/${id}`)
        return result
    }
    getDetails(form: Observable<any>) {
        return form
    }
    newOffer(form: NgForm) {
        console.log("this is being submitted---------------------");
        // let { img, names, email, hand, weight, place, bet } = form
        debugger

        let apiUrl = 'http://localhost:3030'
        return this.http.post<Offer>(`${apiUrl}/jsonstore/offers`, { form })
    }
}
