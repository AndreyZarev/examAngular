import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { AuthActivate } from 'src/app/guards/auth.guard';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ValidatorsDirective } from "../../shared/validators/validators.directive"

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'logout', component: LogoutComponent, canActivate: [AuthActivate] },
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LoginComponent,
    ValidatorsDirective


  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    RouterModule.forChild(routes),

  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
