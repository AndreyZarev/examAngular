import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService) { }
  themes: any = []
  ngOnInit(): void {
    this.api.getCatalog().subscribe((themes) => {
      console.log(themes);
      this.themes = themes
    })
  }
}
