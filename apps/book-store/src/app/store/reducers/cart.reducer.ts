import { Action, createReducer, on } from '@ngrx/store';
import * as cartActions from '../actions/cart.actions';
import { Book } from '../model/book.interface';
import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { CartItem } from '../model/cartItem.interface';

export interface State extends EntityState<CartItem> {
  loading: boolean;
}

export const adapter: EntityAdapter<CartItem> = createEntityAdapter();

const initialState: State = adapter.getInitialState({
  loading: false
});

const cartReducerFunction = createReducer(
    initialState,
    on(cartActions.cartAddItem, 
      (state, { book }) => adapter.addOne(book, state)  ),
    on(cartActions.cartLoadItems, 
      (state, { books }) => adapter.addAll(books, state)),
    on(cartActions.cartRemoveItem, 
      (state, { book }) => adapter.removeOne(book.id, state) ),
    on(cartActions.cartRemoveItems, 
        (state) => adapter.removeAll(state) ),    
    on(cartActions.cartUpdateItem, 
      (state, { book }) => adapter.updateOne(book, state)   )  
  );
  
  export function cartReducer(state: State | undefined, action: Action) {
    return cartReducerFunction(state, action);
  }

  export const {
    selectAll
  } = adapter.getSelectors();
  