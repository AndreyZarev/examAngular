import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) { }


  clicked: boolean = true;
  registerButton() {

    this.clicked = !this.clicked
    return this.clicked;
  }


  register(name: string,
    email: string,
    password: string,
    rePassword: string): void {
    // console.log(form.value);
    // debugger
    // if (form.invalid) {
    //   alert('Your form is invalid, please follow the text below the fields.')
    //   return;
    // }
    // if (form.value.password !== form.value.rePassword) {
    //   alert('Your passwords do not match, please try again.')
    //   return;
    // }
    return this.http.post(this.)
    try {
      this.userService.login()


    } catch (err) {
      console.log(err);
    }
    this.router.navigate(['/home'])

  }
}
