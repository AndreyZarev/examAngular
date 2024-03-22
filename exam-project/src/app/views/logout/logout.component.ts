import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private userService: UserService) { }

  logout() {
    debugger
    this.userService.logout



  }
}