import { Book } from './book.interface';

export interface CartItem{
    id: string;
    book: Book;
    quantity: number;
  } 
  