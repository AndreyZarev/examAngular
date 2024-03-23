import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }
  login(ev: Event, email: string, password: string): void {
    ev.preventDefault()
    try {
      this.userService.login()
      this.router.navigate(['/home'])
      debugger
    } catch (err) {
      console.log(err);
    }

  }
}
