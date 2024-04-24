import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from "../../shared/utils/email-validator"
import { Profile } from "../../../interface/profile"

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  catalog: any = {}
  constructor(private apiService: ApiService, private acktiveRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.acktiveRoute.params.subscribe((data) => {
      const id = data["id"]


      this.apiService.getCatalog().subscribe((data) => {
        console.log(data);
        this.catalog = data

      })
    })
  }
  //
  furnitureDetails = this.fb.group({
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

get isLoggedIn(): boolean {
  return this.userService.isLogged;
}

get userId(): string {
  return this.userService.user?.id || '';
}

ngOnInit(): void {
  this.api.getThemes().subscribe((themes) => {
    // TODO: not recommended to do it on front end!
    const sortDatesCB = (
      a: { created_at: string },
      b: { created_at: string }
    ) => (new Date(b.created_at) as any) - (new Date(a.created_at) as any);
    const tempThemes = themes.sort(sortDatesCB as any).slice(0, 5);

    this.themes = tempThemes;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  });
}
//