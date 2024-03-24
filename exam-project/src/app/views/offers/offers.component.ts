import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  catalog: any = {}
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCatalog().subscribe((data) => {
      console.log(data);
      this.catalog = data
    })
  }



}
