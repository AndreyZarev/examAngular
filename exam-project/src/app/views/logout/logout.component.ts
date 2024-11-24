import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {





  constructor(private userService: UserService, private router: Router) { }



  ngOnInit() {
    localStorage.removeItem("accessToken")
    this.userService.logout().subscribe({
      next: () => {
        console.log('Logged out successfully')

        this.router.navigate(['/home']);
      },
      // error: (err) => {

      //     localStorage.removeItem("user")
      //     this.router.navigate(['/home']);


      // }
    });


  }

}