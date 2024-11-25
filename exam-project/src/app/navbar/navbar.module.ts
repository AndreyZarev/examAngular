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
import { OfferComponent } from '../views/offers/offers.component';
import { ErrorPageComponent } from '../views/error-page/error-page.component';
import { OfferEditComponent } from '../views/offer-edit/offer-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../guards/auth.guard';
import { NavbarComponentDirective } from './navbar-component.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'create-offer', component: CreateOfferComponent, canActivate: [AuthActivate] },
  { path: 'login', component: LoginComponent },

  { path: 'logout', component: LogoutComponent, canActivate: [AuthActivate] },

  { path: 'offers', component: OfferComponent },

  { path: 'offers/edit/:id', component: OfferEditComponent, canActivate: [AuthActivate] },



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
    OfferComponent,
    ErrorPageComponent,
    NavbarComponentDirective,
    ValidatorsDirective

  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,

    ReactiveFormsModule,
    RouterModule.forChild(routes),

  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
