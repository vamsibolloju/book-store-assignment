import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, delay } from 'rxjs/operators'
import { BookService } from '../../shared/services/books.service';
import { fetchCollection, loadBooksToCollection, loadBooksToCollectionServer } from '../actions/collection.actions';
import { PurchasedBook } from '../model/purchasedBook.interface';

@Injectable()
export class CollectionEffects {
 
  constructor(private actions$: Actions,
              private bookService: BookService  
              ) {}
 
  @Effect()
  fetchCollection$ = this.actions$.pipe(
    ofType(fetchCollection),
    switchMap(( action ) => {
        return this.bookService.getCollection().pipe(
            map( 
                (books : Array<PurchasedBook> ) => { 
                    return loadBooksToCollection({ books } )
                }     
           )
        )
    })
  );

  @Effect()
  addBookToCollection$ = this.actions$.pipe(
    ofType(loadBooksToCollectionServer),
    switchMap( (action) => {
        return this.bookService.addBooksToCollection(action.books).pipe(
          map(
            () => {
              return loadBooksToCollection( { books : action.books } )
            }
          )
        )
    } )
  )


}
