import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/services/books.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/model/appState.interface';
import { searchBooks, updateQuery } from '../store/actions/book.actions';
import { Observable } from 'rxjs';
import { Book } from '../store/model/book.interface';
import { selectAll } from '../store/reducers/book.reducer';

@Component({
  selector: 'assignment-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public books$:  Observable< Array<Book> >;
  public loading$:  Observable< boolean >;
  public query$: Observable<string>;

  constructor(private _bookService: BookService,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
   this.books$ = this.store.select( state => {
     return selectAll(state.books) 
    });

    this.loading$ = this.store.select( state => {
      return state.books['loading'] 
     });

     this.query$ = this.store.select(state => state.books['query']);
     this.query$.subscribe(query => {
      if(query.length > 2){
        this.store.dispatch( searchBooks({ query  } ) );
      }
     })

  }

  onQueryChanged(event: Event){
    this.store.dispatch(updateQuery({ query : event.target['value'] }));
  }

  onBookSelect(book: object){
    this.router.navigateByUrl(`book/${book['id']}`);
  }

}
