import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { RouterLink } from '@angular/router';
import { NavbarModule } from '../navbar/navbar.module';
// import { HomeComponent } from '../views/home/home.component'; '';
// import { RegisterComponent } from '../views/register/register.component';
// import { LoginComponent } from '../views/login/login.component';
// import { LogoutComponent } from '../views/logout/logout.component';
// import { CreateOfferComponent } from '../views/create-offer/create-offer.component';
// import { OfferComponent } from '../views/offer/offer.component';
// import { ErrorPageComponent } from '../views/error-page/error-page.component';

// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [

//     { path: 'home', component: HomeComponent },

//     { path: 'register', component: RegisterComponent },
//     { path: 'create-offer', component: CreateOfferComponent },
//     { path: 'login', component: LoginComponent },

//     { path: 'logout', component: LogoutComponent },

//     { path: 'offer', component: OfferComponent },

//     { path: '**', component: ErrorPageComponent },
// ];

@NgModule({
    declarations: [


    ],
    imports: [
        // CommonModule,
        // RouterLink,
        NavbarModule,




    ],
    exports: [NavbarModule]
})
export class ViewsModel { }
