import { createAction, props } from '@ngrx/store';
import { Book } from '../model/book.interface';
import { CartItem } from '../model/cartItem.interface';
import { Update } from '@ngrx/entity';

export const cartAddItem = createAction('[Cart Page] Add Book', 
                            props<{book: CartItem}>());
export const cartLoadItems = createAction('[Cart Page] Load Books', 
                            props<{books: Array<CartItem>}>());
export const cartRemoveItem = createAction('[Cart Page] Remove Book',
                            props<{ book: CartItem }>());
export const cartRemoveItems = createAction('[Cart Page] Remove Books');
export const cartUpdateItem = createAction('[Cart Page] Update Book',
                            props<{ book: Update<CartItem> }>());
                            