import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BillingComponent } from './billing.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '../store/model/appState.interface';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillingModelComponent } from './billing-model.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

describe('BillingComponent', () => {
  let component: BillingComponent;
  let fixture: ComponentFixture<BillingComponent>;
  let store: MockStore<AppState>;
  const initialState = { books : [], cart: { ids: [], entities: {} } };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingComponent, BillingModelComponent ],
      imports: [ BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatDialogModule, RouterTestingModule ],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: MatDialogRef,
          useValue: { close: () => {} }
        },
        {
           provide: MAT_DIALOG_DATA, useValue: {}

        }
      ]
    })
    .overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [BillingModelComponent, BillingComponent] } })
    .compileComponents()

    store = TestBed.get<Store<AppState>>(Store);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
    component.openDialog('vamsi', 'vamsi@gmail.com', '7702363515');
  });

  
  it('billing dialog test cases', () => {
  //component.openDialog('vamsi', 'dfqw@asd.com', '24212141241241');
    let fixture1 = TestBed.createComponent(BillingModelComponent);
    let component1 = fixture1.componentInstance;
    fixture1.detectChanges();
    component1.onNoClick();
    
  })
  
});
