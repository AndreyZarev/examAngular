import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from "../../shared/utils/email-validator"
import { Theme } from "../../../interface/themes"

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  catalog: any = {}
  constructor(private apiService: ApiService, private acktiveRoute: ActivatedRoute, private router: Router, private userServise: UserService, private fb: FormBuilder) { }

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
        console.log("this is the catalog");

        this.catalog = data.slice()
        console.log(this.catalog);


      })
    })
  }
  temesDetails: Theme[] | null = []

  // userDetails = this.fb.group({

  // });

  editable: boolean = false
  edit(id: string): void {


    console.log(id);

    this.apiService.getOffer(id).subscribe((data) => {
      this.temesDetails = this.myForm.value as Theme[];

      console.log(data);
      this.catalog = data
      this.editable = true


    })

    this.router.navigate(['/offers/edit']);

  }


  save(): void {

    console.log(this.myForm.value);

    if (this.myForm.invalid) {
      alert("form is invalid")
      return;
    }

    // this.userDetails = this.form.value as Profile;

    console.log(this.editable);

    this.router.navigate(['/offers']);
  }

  cancel(e: Event) {
    e.preventDefault();
    this.editable = !this.editable;
  }





  get userId(): string | undefined {
    console.log(this.userServise.user)

    return this.userServise.user?.email
  }
}


// ngOnInit(): void {
//   this.api.getThemes().subscribe((themes) => {
//     // TODO: not recommended to do it on front end!
//     const sortDatesCB = (
//       a: { created_at: string },
//       b: { created_at: string }
//     ) => (new Date(b.created_at) as any) - (new Date(a.created_at) as any);
//     const tempThemes = themes.sort(sortDatesCB as any).slice(0, 5);

//     this.themes = tempThemes;

//     setTimeout(() => {
//       this.isLoading = false;
//     }, 1000);
//   });

