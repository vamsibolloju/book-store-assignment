import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '../store/model/appState.interface';
import { Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: MockStore<AppState>;
  const initialState = { books : { ids: [], entities: [], query: 'java' }, cart: [] };
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatFormFieldModule, BrowserAnimationsModule, MatInputModule, MatGridListModule, HttpClientModule, 
        RouterTestingModule.withRoutes([ { path: 'book/:id', component: DashboardComponent } ]) ],
      declarations: [ DashboardComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
    store = TestBed.get<Store<AppState>>(Store);
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to book page on book select', () => {
    const navigateSpy = spyOn(router, 'navigateByUrl');
    component.onBookSelect({ id : '1' });
    expect(navigateSpy).toHaveBeenCalledWith('book/1');
  });

  it('should dispach be called on store on query change', () => {
    
    const storeSpy = jest.spyOn(store, 'dispatch')
    let input = fixture.debugElement.query(By.css('input'));
    let el = input.nativeElement;
    el.value = 'java';
    el.dispatchEvent(new Event('input'));
    expect(storeSpy).toHaveBeenCalled();

  })
});
