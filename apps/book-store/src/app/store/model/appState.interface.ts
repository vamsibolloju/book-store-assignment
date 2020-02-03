import { Book } from './book.interface';
import { PurchasedBook } from './purchasedBook.interface';
import { CartItem } from './cartItem.interface';
import { EntityState } from '@ngrx/entity';

export interface AppState{
    cart: EntityState<CartItem>;
    books: EntityState<Book>;   
    collection: EntityState<PurchasedBook>; 
}