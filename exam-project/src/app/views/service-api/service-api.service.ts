import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    getPosts(limit?: number) {
        let apiUrl = 'http://localhost:3030/data'
        let url = `${apiUrl}/orders`
        if (limit) {
            url = url + `?limit=${limit}`

        }
        return this.http.get<any>(url)
    }
}
