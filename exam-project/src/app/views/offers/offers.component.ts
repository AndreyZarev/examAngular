import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Theme } from 'src/interface/themes';
import { validateEmail } from 'src/app/shared/utils/email-validator';
import { FormBuilder } from '@angular/forms';
import { Offer } from 'src/interface/offer';
@Component({
  selector: 'app-offer',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OfferComponent implements OnInit {
  constructor(private apiService: ApiService, private acktiveRoute: ActivatedRoute, private router: Router, private userServise: UserService, private fb: FormBuilder) { }
  catalog: Offer[] = []

  editable: boolean = false
  myForm: FormGroup = {} as FormGroup;
  ngOnInit(): void {
    this.acktiveRoute.params.subscribe((data) => {
      const id = data["id"]
      console.log(this.myForm.value);
      this.myForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['',
          [Validators.required, validateEmail(["bg", "com"])]
        ],
        tel: ['', [Validators.required, Validators.minLength(2)]],
        password: ['', [Validators.required, Validators.minLength(2)]],
        rePassword: ['', [Validators.required, Validators.minLength(2)]],
      });

      this.apiService.getCatalog().subscribe((data) => {



        this.catalog = Object.values(data)


      })
    })
  }
  offerDetails: Offer[] | null = []
  edit(id: string): void {


    console.log(id);

    this.apiService.getOffer(id).subscribe((data) => {
      this.offerDetails = this.myForm.value as Offer[];

      console.log(data);
      this.catalog = data
      this.editable = true


    })

    this.router.navigate(['/offers/edit']);

  }
}
