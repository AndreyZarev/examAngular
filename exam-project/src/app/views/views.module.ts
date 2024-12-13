import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth-module/auth.module';
import { RouterModule } from '@angular/router';
import { HomeNavbarModule } from './home-navbar/home-navbar.module';
import { OffersModule } from './offers-edit-create/offers-module/offers.module';




@NgModule({
    declarations: [


    ],
    imports: [
        CommonModule,
        AuthModule,
        OffersModule,
        HomeNavbarModule,

        RouterModule



    ],
    exports: []
})
export class ViewsModel { }
