import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/services/books.service';
import { AppState } from '../store/model/appState.interface';
import { Store } from '@ngrx/store';
import { Book } from '../store/model/book.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartItem } from '../store/model/cartItem.interface';
import { cartAddItem, cartUpdateItem } from '../store/actions/cart.actions';
import { selectAll } from '../store/reducers/cart.reducer';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'assignment-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book>;
  cart: Array<CartItem> = [];
  addedToCart: boolean = false;
  constructor(private _bookService: BookService, 
    private store: Store<AppState>, private router: Router) { }

  ngOnInit() {    
    this.store.select(state => state['route']).subscribe(routeData => {
      this.book$ = this._bookService.getBook(routeData.state.params.id);    
    });    
    this.store.select(state => selectAll(state.cart)).subscribe( cart => {
      this.cart = cart;
    });
  }

  buy(book: Book){
    this.addToCart(book);
    this.router.navigateByUrl('/billing');
  }

  addToCart(book: Book){    
    const addedBook = this.cart.find(cartItem => cartItem.id === book.id );
    this.addedToCart = true;
    if(addedBook){
      this.updateQuantity(addedBook.id,addedBook.quantity + 1 );
    }else{
      const cartItem: CartItem = { book , id: book.id, quantity: 1};
      this.store.dispatch(cartAddItem({ book:  cartItem } ));
    }
    setTimeout(() => {
      this.addedToCart = false;
    }, 2000);    
  }

  private updateQuantity(id: string, quantity: number){
    const book: Update<CartItem> = {
      id,
      changes: { quantity }
    };
    this.store.dispatch( cartUpdateItem( { book  } ) );
  }


}
