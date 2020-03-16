import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../store/model/book.interface';
import { flatMap, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartItem } from '../../store/model/cartItem.interface';
import { PurchasedBook } from '../../store/model/purchasedBook.interface';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    //public books_url = 'https://www.googleapis.com/books/v1/volumes';
    public books_url = 'http://localhost:3000';   
    constructor(private _http: HttpClient){

    }

    getBooks(query: string){
        return this._http.get(`${this.books_url}/books?q=${query}`).pipe(
            map(data => {
                data['items'] = data['items'].filter(book => book.saleInfo.saleability === 'FOR_SALE')
                return data;
            })
        )
    }

    getBook(id: string){
        return this._http.get<Book>(`${this.books_url}/books/${id}`);
    }

    getCart(){
        return this._http.get(`${this.books_url}/cart`);
    }

    addBookToCart( book : CartItem ){
        return this._http.post(`${this.books_url}/cart`, book);
    }

    updateCartItem(changes: object){
        console.log(changes);
        return this._http.put(`${this.books_url}/cart`, changes)
    }

    clearCart(id?:string){
        let url = `${this.books_url}/cart`;
        if(id){
            url = `${url}?id=${id}`;
        }
        return this._http.delete(url);
    }

    getCollection(){
        return this._http.get(`${this.books_url}/collection`);
    }

    addBooksToCollection(books: Array<PurchasedBook>){
        return this._http.post(`${this.books_url}/collection`, books);
    }

}  