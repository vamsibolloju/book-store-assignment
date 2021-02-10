import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { selectAll as selectAllCart } from './store/reducers/cart.reducer';
import { AppState } from './store/model/appState.interface';
import { Store } from '@ngrx/store';
import { selectAll } from './store/reducers/collection.reducer';
import { cartLoadItemsAPI } from './store/actions/cart.actions';
import { fetchCollection } from './store/actions/collection.actions';
import { paths } from '../app/app.constants';

@Component({
  selector: 'assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public paths: Array<string> = paths;
  public sideNavToggle: boolean = true;

  public cartCount: number;
  public collectionCount: number;

  constructor(private router: Router, 
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private store: Store<AppState>
    ){
      console.log(paths);
    iconRegistry.addSvgIcon('dashboard',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/dashboard-24px.svg'))
    iconRegistry.addSvgIcon('cart',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/shopping_cart-24px.svg'))
    iconRegistry.addSvgIcon('my collection',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/collections-24px.svg'))
    iconRegistry.addSvgIcon('close',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/close-24px.svg'))
    iconRegistry.addSvgIcon('add',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/add-24px.svg'))
    iconRegistry.addSvgIcon('remove',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/remove-24px.svg')),
    iconRegistry.addSvgIcon('list',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/list-24px.svg'))
  }
  ngOnInit(): void {
    this.store.select( state => selectAllCart(state.cart) ).subscribe(cart => {
      this.cartCount = cart.length;
    });

    this.store.select(state => selectAll(state.collection)).subscribe(collection => {
      this.collectionCount = collection.length;
    });

    this.store.dispatch(cartLoadItemsAPI());
    this.store.dispatch(fetchCollection());

  }

  goTo(path: string){
    this.router.navigateByUrl(`/${path.replace(' ', '-')}`);
  }

}
