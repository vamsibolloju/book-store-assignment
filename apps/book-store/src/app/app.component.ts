import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';


@Component({
  selector: 'assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public paths: Array<string> = [ 'dashboard', 'cart', 'my collection' ];
  public sideNavToggle: boolean = true;
  constructor(private router: Router, 
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
    ){
    iconRegistry.addSvgIcon('dashboard',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/dashboard-24px.svg'))
    iconRegistry.addSvgIcon('cart',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/shopping_cart-24px.svg'))
    iconRegistry.addSvgIcon('my collection',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/collections-24px.svg'))
    iconRegistry.addSvgIcon('close',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/close-24px.svg'))
    iconRegistry.addSvgIcon('add',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/add-24px.svg'))
    iconRegistry.addSvgIcon('remove',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/remove-24px.svg')),
    iconRegistry.addSvgIcon('list',sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg/list-24px.svg'))
  }

  goTo(path: string){
    this.router.navigateByUrl(`/${path.replace(' ', '-')}`);
  }

}
