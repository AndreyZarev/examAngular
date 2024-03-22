import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService) { }
  login(ev: Event, email: string, password: string) {
    ev.preventDefault()
    this.userService.login()
    console.log(email);

  }
}
