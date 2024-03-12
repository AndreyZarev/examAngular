import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { LogoutComponent } from './views/logout/logout.component';
import { CreateOfferComponent } from './views/create-offer/create-offer.component';
import { OffersComponent } from './views/offers/offers.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },

  { path: 'register', component: RegisterComponent },
  // { path: 'contact', component: ContactComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    CreateOfferComponent,
    OffersComponent,
    ErrorPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
