import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service-api/user.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {
  router: any;
  constructor(private UserService: UserService) { }

  get isLoggedIn(): boolean {



    return this.UserService.isLogged


  }
  ngOnChanges(changes: SimpleChanges): void {
    //to do something/ not sure if this will render using css classes
  }


}
