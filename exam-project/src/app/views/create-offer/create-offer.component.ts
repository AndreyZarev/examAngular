import { Component } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent {
  constructor(private apiService: ApiService, private router: Router, private http: HttpClient) { }
  createOffer(form: NgForm) {

    // ev.preventDefault();
    if (form.invalid) {
      alert('Your form is invalid, please follow the text below the fields.')
      return;
    }
    try {


      this.apiService.newOffer(form.value)
      form.value.clear();

    } catch (err) {
      console.log(err);

    }

    this.router.navigate(['/offers'])
  }
}
