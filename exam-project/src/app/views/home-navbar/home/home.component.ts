import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service-api/service-api.service'
import { Comments } from 'src/interface/comments';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private api: ApiService) { }
  comments: Comments[] = []
  refresh = () => { }
  email = localStorage.getItem('email');
  ngOnInit(): void {
    this.refresh = () => {
      this.api.getComments().subscribe((comment) => {
        console.log(comment);
        this.comments = Object.values(comment)
        let tempArr = []
        for (let index = this.comments.length - 3; index < this.comments.length; index++) {
          const element = this.comments[index];
          tempArr.push(element)
        }
        this.comments = tempArr
      })
    }
    this.refresh()
  }

  createComment(form: NgForm) {

    if (form.invalid) {
      alert('Please enter some text!')
      return
    }

    let content = form.value.content
    this.api.createComments(this.email, content).subscribe({
      complete: () => {
        form.reset()
        this.refresh()


      },
      error(err) {
        alert(`An error occured: ` + err)
      },
    })
  }
}
