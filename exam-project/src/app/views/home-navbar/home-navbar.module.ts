import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: ErrorPageComponent },

]
@NgModule({
  declarations: [
    HomeComponent,
    ErrorPageComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,

    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ], exports: [
    HomeComponent,
    ErrorPageComponent,
  ]

})
export class HomeNavbarModule { }
