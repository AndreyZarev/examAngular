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
import { OfferEditComponent } from './views/offer-edit/offer-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    OfferEditComponent,





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
