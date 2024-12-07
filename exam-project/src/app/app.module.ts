import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ViewsModel } from './views/views.module';
import { NavbarComponentDirective } from './views/home-navbar/navbar-component.directive';
import { NavbarComponent } from './views/home-navbar/navbarComppnent/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentDirective,
    NavbarComponent




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViewsModel,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])


  ],

  exports: [],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
