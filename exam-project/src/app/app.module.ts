import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './views/app-routing.module';
import { AppComponent } from './app.component';
// import { ViewsModel } from './views/views.module'
import { HttpClientModule } from '@angular/common/http'
import { RouterLink } from '@angular/router';
import { NavbarModule } from './navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { OfferComponent } from './offer/offer.component';



@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

  ],

  exports: [],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
