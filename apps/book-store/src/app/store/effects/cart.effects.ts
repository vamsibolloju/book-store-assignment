import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {  cartLoadItems, cartAddItem, cartLoadItemsAPI, cartAddItemAPI, cartRemoveItems, cartRemoveItemsAPI, cartRemoveItem, cartRemoveItemAPI, cartUpdateItemAPI, cartUpdateItem } from '../actions/cart.actions';
import { switchMap, map, catchError, delay } from 'rxjs/operators'
import { BookService } from '../../shared/services/books.service';
import { CartItem } from '../model/cartItem.interface';

@Injectable()
export class CartEffects {
 
  constructor(private actions$: Actions,
              private bookService: BookService  
              ) {}
 
  @Effect()
  fetchCart$ = this.actions$.pipe(
    ofType(cartLoadItemsAPI),
    switchMap(( action ) => {
        return this.bookService.getCart().pipe(
            map( 
                (books : Array<CartItem> ) => { 
                    return cartLoadItems({ books } )
                }     
           )
        )
    })
  );

  @Effect()
  addBookToCart$ = this.actions$.pipe(
    ofType(cartAddItemAPI),
    switchMap( (action) => {
        return this.bookService.addBookToCart(action.book).pipe(
          map(
            () => {
              return cartAddItem( { book : action.book } )
            }
          )
        )
    } )
  )

  @Effect()
  clearCart$ = this.actions$.pipe(
    ofType(cartRemoveItemsAPI),
    switchMap( (action) => {
        return this.bookService.clearCart().pipe(
          map(
            () => {
              return cartRemoveItems(  )
            }
          )
        )
    } )
  )

  @Effect()
  removeItemInCart$ = this.actions$.pipe(
    ofType(cartRemoveItemAPI),
    switchMap( (action) => {
        return this.bookService.clearCart(action.book.id).pipe(
          map(
            () => {
              return cartRemoveItem( { book : action.book }  )
            }
          )
        )
    } )
  )

  @Effect()
  updateItemInCart$ = this.actions$.pipe(
    ofType(cartUpdateItemAPI),
    switchMap( (action) => {
        return this.bookService.updateCartItem(action.book).pipe(
          map(
            () => {
              return cartUpdateItem( { book : action.book }  )
            }
          )
        )
    } )
  )


}
