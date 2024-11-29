import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service-api/service-api.service';
import { Comments } from 'src/interface/comments';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService) { }
  comments: Comments[] = []
  ngOnInit(): void {
    this.api.getComments().subscribe((comment) => {
      console.log(comment);
      this.comments = Object.values(comment)
    })
  }
}
