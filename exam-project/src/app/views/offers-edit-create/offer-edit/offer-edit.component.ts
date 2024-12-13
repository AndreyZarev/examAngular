import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../service-api/service-api.service';
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
  refresh = () => { }

  ngOnInit() {
    this.refresh = () => {
      this.offerId = this.route.snapshot.paramMap.get('id') || '';



      this.route.paramMap.subscribe((params) => {
        this.offerId = params.get('id') || '';

        this.apiService.getOffer(this.offerId).subscribe((data) => {
          this.offer = data
        })

      })
    }

    this.refresh()
  }
  updateOffer(form: NgForm) {
    {


      if (form.invalid) {
        alert('Your form is invalid, please follow the text below the fields.')
        return;
      }


      let { img, names, email, hand, weight, place, bet } = form.value


      this.apiService.updateOffer(img, names, email, hand, weight, place, bet, this.offerId).subscribe({
        error: (e) => console.error(e),
        complete: () => {
          this.refresh
          this.router.navigate(['/offers'])
        }
      }
      )
    }
  }
  deleteOffer(id: string) {

  }

}