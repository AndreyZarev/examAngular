import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service-api/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/interface/offer';
@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }
  offer = {} as Offer;

  offerId!: string;
  optionsHand = [
    { value: 'Right', label: 'Option 1' },
    { value: 'Left', label: 'Option 2' },
    { value: 'Both', label: 'Option 3' }
  ];
  ngOnInit() {
    this.offerId = this.route.snapshot.paramMap.get('id') || '';



    this.route.paramMap.subscribe((params) => {
      this.offerId = params.get('id') || '';

      this.apiService.getOffer(this.offerId).subscribe((data) => {
        console.log('Offer data:', data);
        this.offer = data
      })

    })
  }

  updateOffer(form: NgForm) {

    // ev.preventDefault();
    if (form.invalid) {
      alert('Your form is invalid, please follow the text below the fields.')
      return;
    }
    try {

      let { img, names, email, hand, weight, place, bet } = form.value
      debugger
      this.apiService.updateOffer(img, names, email, hand, weight, place, bet).subscribe({
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      }
      )

      this.router.navigate(['/offers'])


    } catch (err) {
      console.log(err);

    }

  }
}
