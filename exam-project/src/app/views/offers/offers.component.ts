import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Offer } from 'src/interface/offer';
@Component({
  selector: 'app-offer',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OfferComponent implements OnInit {
  constructor(private apiService: ApiService, private acktiveRoute: ActivatedRoute, private router: Router, private userServise: UserService) { }
  catalog: Offer[] = []

  user: string | null = localStorage.getItem('user')

  myForm: FormGroup = {} as FormGroup;
  ngOnInit(): void {
    this.acktiveRoute.params.subscribe((data) => {

      this.apiService.getCatalog().subscribe((data) => {


        this.catalog = Object.values(data)

        console.log(this.catalog);


      })


    })

  }
  offerDetails: Offer[] | null = []
  edit(id: string): void {






    this.router.navigate(['/offers/edit/' + id], { queryParams: { id: id } });

  }
}
