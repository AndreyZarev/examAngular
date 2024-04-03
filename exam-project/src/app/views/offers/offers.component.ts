import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { validateEmail } from "../../shared/utils/email-validator";
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
  profileDetails: Profile = {
    name: 'Richard',
    email: 'john@gmail.com',
    tel: '33333333',
  };
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, validateEmail(["bg|com]"])]],
    tel: [''],
  });

  editable: boolean = false
  edit(id: string): void {
    debugger


    console.log(id);

    this.apiService.getOffer(id).subscribe((data) => {

      debugger
      console.log(data);
      this.catalog = data
      this.editable = true
    })

    this.router.navigate(['/offers/edit']);

  }


  saveProfileHandle(): void {
    if (this.form.invalid) {
      return;
    }

    this.profileDetails = this.form.value as Profile;
    this.editable = !this.editable;
  }

  onCancel(e: Event) {
    e.preventDefault();
    this.editable = !this.editable;
  }



}
