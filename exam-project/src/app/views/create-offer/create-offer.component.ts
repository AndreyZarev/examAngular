import { Component } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent {
  constructor(private apiService: ApiService) { }
  createOffer(names: string, email: string, hand: string, weight: string, place: string, bet: number | string) {
    debugger
    // ev.preventDefault();

    try {


      this.apiService.newOffer(names, email, hand, weight, place, Number(bet)).subscribe((offer) => {
        console.log(offer);
      })

    } catch (err) {
      console.log(err);

    }
  }
}
