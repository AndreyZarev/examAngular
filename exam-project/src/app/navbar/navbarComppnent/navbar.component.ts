import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {
  router: any;
  constructor(private UserService: UserService, router: RouterModule) { }
  logout(): void {
    this.UserService.logout();
    this.router.navigate(['/home']), { refeerence: this.router.navigation };
  }
  get isLoggedIn(): boolean {



    return this.UserService.isLogged


  }
  ngOnChanges(changes: SimpleChanges): void {
    //to d
  }


}
