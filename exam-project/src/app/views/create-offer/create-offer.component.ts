import { Component } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent {
  constructor(private apiService: ApiService, private router: Router) { }

  email: string | null = localStorage.getItem('email') || null;
  createOffer(form: NgForm) {

    // ev.preventDefault();
    if (form.invalid) {
      alert('Your form is invalid, please follow the text below the fields.')
      return;
    }
    try {

      let { img, names, email, hand, weight, place, bet } = form.value
      debugger
      this.apiService.newOffer(img, names, email, hand, weight, place, bet).subscribe({
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
