import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
impo
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
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

        // this.catalog = data.slice()
        console.log(data);


      })
    })
  }
  temesDetails: Theme[] | null = []
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
}
