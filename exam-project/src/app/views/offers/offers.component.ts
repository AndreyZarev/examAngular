import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  catalog: any = {}
  constructor(private apiService: ApiService, private acktivRoute: ActivatedRoute, private router: Router, fb: FormBuilder) { }

  ngOnInit(): void {
    this.acktivRoute.params.subscribe((data) => {
      const id = data["id"]


      this.apiService.getCatalog().subscribe((data) => {
        console.log(data);
        this.catalog = data

      })
    })
  }
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

  // saveProfileHandle(): void {
  //   if (this.form.invalid) {
  //     return;
  //   }

  //   this.profileDetails = this.form.value as ProfileDetails;
  //   this.onToggle();
  // }

  // onCancel(e: Event) {
  //   e.preventDefault();
  //   this.onToggle();
  // }



}
