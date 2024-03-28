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

    try {
      this.userService.login()
      this.router.navigate(['/home'])
      debugger
    } catch (err) {
      console.log(err);
    }

  }
}
