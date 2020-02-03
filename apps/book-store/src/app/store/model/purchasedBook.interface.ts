import { Book } from './book.interface';

export interface PurchasedBook{
    id: string;
    book: Book;
    quantity: number;
    orderedDate: Date
  } 
  