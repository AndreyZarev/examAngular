import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfferComponent } from '../create-offer/create-offer.component';
import { AuthActivate } from 'src/app/guards/auth.guard';
import { OffersComponent as OffersComponent } from '../offers/offers.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OfferEditComponent } from '../offer-edit/offer-edit.component';


const routes: Routes = [


  { path: 'create-offer', component: CreateOfferComponent, canActivate: [AuthActivate] },
  { path: 'offer/edit/:id', component: OfferEditComponent, canActivate: [AuthActivate] },


  { path: 'offers', component: OffersComponent },

];

@NgModule({
  declarations: [
    OffersComponent,
    OfferEditComponent,
    CreateOfferComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),

  ],
  exports: [
    OffersComponent,
    OfferEditComponent,
    CreateOfferComponent
  ]
})
export class OffersModule { }
