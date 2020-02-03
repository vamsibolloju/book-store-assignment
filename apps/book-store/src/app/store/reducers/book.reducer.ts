import { Action, createReducer, on } from '@ngrx/store';
import * as bookActions from '../actions/book.actions';
import { Book } from '../model/book.interface';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<Book> {
  loading: boolean;
  query: string;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter();

const initialState: State = adapter.getInitialState({
  loading: false,
  query: ''
});


const bookReducerFunction = createReducer(
    initialState,
    on(bookActions.loadBooks, 
      (state, { books }) => 
      {
        state = {...state, loading: false};
        return adapter.addAll(books, state) 
      }),
    on(bookActions.searchBooks, 
      (state) => ({ ...state, loading: true }) ),
    on(bookActions.updateQuery, 
      (state, { query }) => ({ ...state, query }) )
  );
  
  export function bookReducer(state: State | undefined, action: Action) {
    return bookReducerFunction(state, action);
  }

  export const {
    selectAll
  } = adapter.getSelectors();