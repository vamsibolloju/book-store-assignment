import { createAction, props } from '@ngrx/store';
import { PurchasedBook } from '../model/purchasedBook.interface';

export const addBookToCollection = createAction('[Collection Page] Add Book', 
                            props<{book: PurchasedBook}>());
export const loadBooksToCollection = createAction('[Collection Page] Load Books', 
                            props<{books: Array<PurchasedBook>}>());
