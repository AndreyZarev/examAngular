import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './views/app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModel } from './views/views.module'
import { HttpClientModule } from '@angular/common/http'
import { RouterLink } from '@angular/router';
// import { NavbarModule } from './navbar/navbar.module';



@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModel,
    HttpClientModule,

    RouterLink
  ],

  exports: [],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
