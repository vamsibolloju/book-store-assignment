import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/model/appState.interface';
import { selectAll } from '../store/reducers/cart.reducer'; 
import { cartLoadItems, cartRemoveItem, cartUpdateItem, cartAddItem, cartRemoveItemAPI, cartRemoveItemsAPI, cartUpdateItemAPI } from '../store/actions/cart.actions';
import { Observable } from 'rxjs';
import { CartItem } from '../store/model/cartItem.interface';
import { Update } from '@ngrx/entity';
import { Router } from '@angular/router';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';

@Component({
  selector: 'assignment-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart$: Observable< Array<CartItem> >;
  public totalPrice: number;
  constructor(
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
     this.cart$ = this.store.select( state => selectAll(state.cart) );
    
    this.cart$.subscribe((items) => {
        this.totalPrice =  items
        .map(item => ( item.quantity * item.book['saleInfo']['retailPrice']['amount'] ) )
        .reduce((a,b) => a+b, 0);
    })
    
    
  }

  clearCart(){
    this.store.dispatch(cartRemoveItemsAPI());
  }
  
  remove(book: CartItem){
    this.store.dispatch(cartRemoveItemAPI({ book }));
  }

  increaseQuantity(book: CartItem){
    this.updateQuantity(book.id, book.quantity + 1);
  }

  decreaseQuantity(book: CartItem){
    this.updateQuantity(book.id, book.quantity - 1);    
  }

  buy(){
    this.router.navigateByUrl('/billing');
  }

  private updateQuantity(id: string, quantity: number){
    const book: Update<CartItem> = {
      id,
      changes: { quantity }
    };
    this.store.dispatch( cartUpdateItemAPI( { book  } ) );
  }

}
