import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }
  login(form: NgForm): void {
    console.log(form.value);
    if (form.invalid) {
      return;
    }

    try {
      this.userService.login()

      debugger
    } catch (err) {
      console.log(err);
    }
    this.router.navigate(['/home'])
  }
}
