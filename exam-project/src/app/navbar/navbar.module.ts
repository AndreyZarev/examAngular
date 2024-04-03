import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbarComppnent/navbar.component';
import { RouterLink } from '@angular/router';
import { ValidatorsDirective } from "../shared/validators/validators.directive"
import { HomeComponent } from '../views/home/home.component';
import { RegisterComponent } from '../views/register/register.component';
import { LoginComponent } from '../views/login/login.component';
import { LogoutComponent } from '../views/logout/logout.component';
import { CreateOfferComponent } from '../views/create-offer/create-offer.component';
import { OffersComponent } from '../views/offers/offers.component';
import { ErrorPageComponent } from '../views/error-page/error-page.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../guards/auth.guard';
import { NavbarComponentDirective } from './navbar-component.directive';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'create-offer', component: CreateOfferComponent, canActivate: [AuthActivate] },
  { path: 'login', component: LoginComponent },

  { path: 'logout', redirectTo: "home", pathMatch: 'full' },

  { path: 'offers', component: OffersComponent, canActivate: [AuthActivate] },
  { path: 'offers/edit', component: OffersComponent, canActivate: [AuthActivate] },



  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    CreateOfferComponent,
    OffersComponent,
    ErrorPageComponent,
    NavbarComponentDirective,
    ValidatorsDirective

  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,


    RouterModule.forChild(routes),

  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
