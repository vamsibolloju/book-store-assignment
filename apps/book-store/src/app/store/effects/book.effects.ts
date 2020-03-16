import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { searchBooks, loadBooks } from '../actions/book.actions';
import { switchMap, map, catchError, delay } from 'rxjs/operators'
import { BookService } from '../../shared/services/books.service';
import { Book } from '../model/book.interface';

@Injectable()
export class BooksEffects {
 
  constructor(private actions$: Actions,
              private bookService: BookService  
              ) {}
 
  @Effect()
  searchBooks$ = this.actions$.pipe(
    ofType(searchBooks),
    switchMap(( action ) => {
        return this.bookService.getBooks(action.query).pipe(
          delay(1000),
            //map( (books ) => books['items'] ), 
            map( (books : Array<Book> ) => loadBooks({ books : books['items'] } ) )
        )
    })
  );
}
