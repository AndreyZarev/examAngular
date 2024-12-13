import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../../../service-api/service-api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../../service-api/user.service';
import { FormGroup } from '@angular/forms';
import { Offer } from 'src/interface/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  constructor(private apiService: ApiService, private acktiveRoute: ActivatedRoute, private router: Router, private userServise: UserService) { }
  catalog: Offer[] = []

  email: string | null = localStorage.getItem('email')
  refresh = () => { }
  myForm: FormGroup = {} as FormGroup;
  ngOnInit(): void {
    this.refresh = () => {
      this.acktiveRoute.params.subscribe(data => {

        this.apiService.getCatalog().subscribe((data) => {


          this.catalog = Object.values(data)

          console.log("refreshed" + this.catalog);

        })
      })

    }
    this.refresh();
  }
  offerDetails: Offer[] | null = []
  edit(id: string): void {






    this.router.navigate(['/offer/edit/' + id], { queryParams: { id: id } });

  }

  delete(id: string): void {

    this.apiService.deleteOffer(id).subscribe({
      complete: () => {
        this.refresh()
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
