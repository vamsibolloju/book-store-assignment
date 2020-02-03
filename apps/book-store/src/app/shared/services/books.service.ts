import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../store/model/book.interface';
import { flatMap, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    public books_url = 'https://www.googleapis.com/books/v1/volumes';
    
    constructor(private _http: HttpClient){

    }

    getBooks(query: string){
        return this._http.get(`${this.books_url}?q=${query}`).pipe(
            map(data => {
                data['items'] = data['items'].filter(book => book.saleInfo.saleability === 'FOR_SALE')
                return data;
            })
        )
        //return this._http.get('assets/books.json');
    }

    getBook(id: string){
        //return this._http.get<Book>('assets/book.json');
        return this._http.get<Book>(`${this.books_url}/${id}`);
    }

}  