import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BillingModelComponent } from './billing-model.component';
import { Router } from '@angular/router';
import { AppState } from '../store/model/appState.interface';
import { Store } from '@ngrx/store';
import { cartRemoveItemsAPI } from '../store/actions/cart.actions';
import { loadBooksToCollectionServer } from '../store/actions/collection.actions';
import { selectAll } from '../store/reducers/cart.reducer';
import { PurchasedBook } from '../store/model/purchasedBook.interface';
import { CartItem } from '../store/model/cartItem.interface';

@Component({
  selector: 'assignment-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  cartItems: Array<CartItem>;
  constructor(public dialog: MatDialog, 
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(state => selectAll(state.cart)).subscribe(cartItems => {
      this.cartItems = cartItems;
    })
  }

  openDialog(name: string, email: string, mobile: string): void {
    const dialogRef = this.dialog.open(BillingModelComponent, {
      width: '250px',
      data: { name, email, mobile }
    });

    dialogRef.afterClosed().subscribe(result => {
        const purchasedBooks : Array<PurchasedBook> = this.cartItems.map( cartItem => ({ ...cartItem, orderedDate: new Date() }) );
        this.store.dispatch(loadBooksToCollectionServer({ books : purchasedBooks }));
        this.store.dispatch(cartRemoveItemsAPI());
        this.router.navigateByUrl('/my-collection');
      });
  }
}
