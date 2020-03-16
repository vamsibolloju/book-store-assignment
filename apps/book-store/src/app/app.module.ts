import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BillingComponent } from './billing/billing.component';
import { BillingModelComponent } from './billing/billing-model.component';

import { cartReducer } from './store/reducers/cart.reducer';
import { bookReducer } from './store/reducers/book.reducer';
import { AppSerializer } from './app-serializer';
import {  BooksEffects } from './store/effects/book.effects';
import {  CartEffects } from './store/effects/cart.effects';
import {  CollectionEffects } from './store/effects/collection.effects';

import { collectionReducer } from './store/reducers/collection.reducer';


import { CustomDropdownDirective } from './dashboard/custom-dropdown.directive';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'my-collection',
    component: MyCollectionComponent
  },
  {
    path: 'book/:id', component: BookDetailsComponent
  },
  {
    path: 'billing', component: BillingComponent
  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    MyCollectionComponent,
    BookDetailsComponent,
    BillingComponent,
    BillingModelComponent,
    CustomDropdownDirective
  ],
  entryComponents: [
    BillingModelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,   
    MatDialogModule, 
    MatIconModule,
    StoreModule.forRoot(
      {
        route: routerReducer,
        cart: cartReducer,
        books: bookReducer,
        collection: collectionReducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([ BooksEffects, CartEffects, CollectionEffects ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: AppSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
