import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../service-api/service-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent
// implements OnInit 
{
  constructor(private apiService: ApiService, private router: Router) { }


  ngOnInit() {
    // this.apiService.getOffer(id)
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
