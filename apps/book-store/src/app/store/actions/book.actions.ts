import { createAction, props } from '@ngrx/store';
import { Book } from '../model/book.interface';

export const loadBooks = createAction('[Books Page] Load Books', 
                            props<{books: Array<Book>}>());

export const searchBooks = createAction('[Books Page] Search Books',
                            props<{ query: string }>());

export const updateQuery = createAction('[Book Page] Update query',
                            props<{ query: string }>());