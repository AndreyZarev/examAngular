import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service-api/user.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {





  constructor(private userService: UserService, private router: Router) { }


  accessToken: string | number = localStorage.getItem('accessToken') !== null
    ? localStorage.getItem('accessToken') as string
    : 1;
  ngOnInit() {
    this.userService.logout(this.accessToken).subscribe({
      next: () => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("email")
        debugger

        this.router.navigate(['/home']);
      },
      error: (err) => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("email")
        this.router.navigate(['/home']);


      }
    });


  }

}