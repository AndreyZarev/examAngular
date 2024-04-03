import { Component } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent {
  constructor(private apiService: ApiService) { }
  createOffer(form: NgForm) {
    debugger
    // ev.preventDefault();

    try {


      this.apiService.newOffer(form.value).subscribe((offer) => {
        console.log(offer);
      })

    } catch (err) {
      console.log(err);

    }
  }
}
