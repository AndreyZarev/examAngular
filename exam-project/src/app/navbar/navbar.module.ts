import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbarComppnent/navbar.component';
import { RouterLink } from '@angular/router';

import { HomeComponent } from '../views/home/home.component';
import { RegisterComponent } from '../views/register/register.component';
import { LoginComponent } from '../views/login/login.component';
import { LogoutComponent } from '../views/logout/logout.component';
import { CreateOfferComponent } from '../views/create-offer/create-offer.component';
import { OffersComponent } from '../views/offers/offers.component';
import { ErrorPageComponent } from '../views/error-page/error-page.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'create-offer', component: CreateOfferComponent },
  { path: 'login', component: LoginComponent },

  { path: 'logout', component: LogoutComponent },

  { path: 'offers', component: OffersComponent },

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
  ],
  imports: [
    CommonModule,
    RouterLink,



    RouterModule.forChild(routes),

  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
