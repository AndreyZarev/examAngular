import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
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
        debugger
        let apiUrl = 'https://localhost:3000'
        return this.http.get<Theme[]>(`${apiUrl}/api/themes`)
    }


    getOffer(id: string) {
        let apiUrl = 'https://localhost:3000'

        let result = this.http.get<any>(`${apiUrl}/api/themes` + `/${id}`)
        return result
    }

    newOffer(form: NgForm) {

        console.log(form);
        let apiUrl = 'https://localhost:3000'
        return this.http.post<Offer>(`${apiUrl}/api/themes`, { form })
    }
}
