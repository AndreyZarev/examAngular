import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './views/app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModel } from './views/views.module'
import { HttpClientModule } from '@angular/common/http'
import { RouterLink } from '@angular/router';
import { ValidatorsDirective } from './shared/validators.directive';
// import { NavbarModule } from './navbar/navbar.module';



@NgModule({
  declarations: [
    AppComponent,
    ValidatorsDirective,




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
