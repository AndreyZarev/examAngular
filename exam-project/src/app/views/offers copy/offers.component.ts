import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  catalog: any = {}
  constructor(private apiService: ApiService, private acktivRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.acktivRoute.params.subscribe((data) => {
      const id = data["id"]


      this.apiService.getCatalog().subscribe((data) => {
        console.log(data);
        this.catalog = data
      })
    })
  }
  edit(id: string): void {
    debugger
    let editable

    console.log(id);

    this.apiService.getOffer(id).subscribe((data) => {

      debugger
      console.log(data);
      this.catalog = data
    })

    this.router.navigate(['/offers/edit']);

  }


}
