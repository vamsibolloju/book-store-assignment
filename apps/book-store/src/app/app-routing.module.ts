import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { CartComponent } from '../app/cart/cart.component';
import { MyCollectionComponent } from '../app/my-collection/my-collection.component';
import { BookDetailsComponent } from '../app/book-details/book-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';


const routes: Routes = [{
    path: 'dashboard', component: DashboardComponent  
  },{
    path: 'cart', component: CartComponent
  },
  {
    path: 'my-collection', component: MyCollectionComponent
  },
  {
    path: 'book/:id', component: BookDetailsComponent
  },
{
  path: 'billing', component: BillingComponent
}];

  @NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  