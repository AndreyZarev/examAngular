import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { validateEmail } from "../../shared/utils/email-validator"
import { Profile } from "../../../interface/profile"

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  catalog: any = {}
  constructor(private apiService: ApiService, private acktivRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.acktivRoute.params.subscribe((data) => {
      const id = data["id"]


      this.apiService.getCatalog().subscribe((data) => {
        console.log(data);
        this.catalog = data

      })
    })
  }
  furnitureDetails: Profile = {
    make: 'Richard',
    model: 'john@gmail.com',
    year: '33333333',
  };
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['',
      [Validators.required, validateEmail(["bg", "com"])]
    ],
    year: ['', [Validators.required, Validators.minLength(2)]],
  });

  editable: boolean = false
  edit(id: string): void {


    console.log(id);

    this.apiService.getOffer(id).subscribe((data) => {
      this.furnitureDetails = this.form.value as Profile;
      debugger
      console.log(data);
      this.catalog = data
      this.editable = true
      debugger

    })

    this.router.navigate(['/offers/edit']);

  }


  save(): void {

    console.log(this.form.value);

    if (this.form.invalid) {
      alert("form is invalid")
      return;
    }

    this.furnitureDetails = this.form.value as Profile;

    console.log(this.editable);

    this.router.navigate(['/offers']);
  }

  cancel(e: Event) {
    e.preventDefault();
    this.editable = !this.editable;
  }



}
