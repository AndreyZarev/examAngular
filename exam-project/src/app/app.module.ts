import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OffersModule } from './views/offers-create-edit/offer.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ViewsModel } from './views/views.module';



@NgModule({
  declarations: [
    AppComponent,





  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViewsModel,
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
