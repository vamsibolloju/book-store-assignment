import { Action, createReducer, on } from '@ngrx/store';
import * as collectionActions from '../actions/collection.actions';
//import { Book } from '../model/book.interface';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { PurchasedBook } from '../model/purchasedBook.interface'; 

export interface State extends EntityState<PurchasedBook> {
  loading: boolean;
}

export const adapter: EntityAdapter<PurchasedBook> = createEntityAdapter();

const initialState: State = adapter.getInitialState({
  loading: false,
});

const collectionReducerFunction = createReducer(
    initialState,
    on(collectionActions.addBookToCollection, 
      (state, { book }) => adapter.addOne(book, state)  ),
    on(collectionActions.loadBooksToCollection, 
      (state, { books }) => adapter.addAll(books, state)),
  );
  
  export function collectionReducer(state: State | undefined, action: Action) {
    return collectionReducerFunction(state, action);
  }

  export const {
    selectAll
  } = adapter.getSelectors();
  