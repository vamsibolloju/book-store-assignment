import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailsComponent } from './book-details.component';
import { MatCardModule  } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from '../store/model/appState.interface';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { BOOKS } from '../../assets/books';

const BOOK = {
  "kind": "books#volume",
  "id": "lfHo7uMk7r4C",
  "etag": "LTSZvv7Fjhk",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/lfHo7uMk7r4C",
  "volumeInfo": {
   "title": "TCP/IP Sockets in Java",
   "subtitle": "Practical Guide for Programmers",
   "authors": [
    "Kenneth L. Calvert",
    "Michael J. Donahoo"
   ],
   "publisher": "Morgan Kaufmann",
   "publishedDate": "2011-08-29",
   "description": "The networking capabilities of the Java platform have been extended considerably since the first edition of the book. This new edition covers version 1.5-1.7, the most current iterations, as well as making the following improvements: The API (application programming interface) reference sections in each chapter, which describe the relevant parts of each class, have been replaced with (i) a summary section that lists the classes and methods used in the code, and (ii) a \"gotchas\" section that mentions nonobvious or poorly-documented aspects of the objects. In addition, the book covers several new classes and capabilities introduced in the last few revisions of the Java platform. New abstractions to be covered include NetworkInterface, InterfaceAddress, Inet4/6Address, SocketAddress/InetSocketAddress, Executor, and others; extended access to low-level network information; support for IPv6; more complete access to socket options; and scalable I/O. The example code is also modified to take advantage of new language features such as annotations, enumerations, as well as generics and implicit iterators where appropriate. Most Internet applications use sockets to implement network communication protocols. This book's focused, tutorial-based approach helps the reader master the tasks and techniques essential to virtually all client-server projects using sockets in Java. Chapter 1 provides a general overview of networking concepts to allow readers to synchronize the concepts with terminology. Chapter 2 introduces the mechanics of simple clients and servers. Chapter 3 covers basic message construction and parsing. Chapter 4 then deals with techniques used to build more robust clients and servers. Chapter 5 (NEW) introduces the scalable interface facilities which were introduced in Java 1.5, including the buffer and channel abstractions. Chapter 6 discusses the relationship between the programming constructs and the underlying protocol implementations in more detail. Programming concepts are introduced through simple program examples accompanied by line-by-line code commentary that describes the purpose of every part of the program. No other resource presents so concisely or so effectively the material necessary to get up and running with Java sockets programming. Focused, tutorial-based instruction in key sockets programming techniques allows reader to quickly come up to speed on Java applications. Concise and up-to-date coverage of the most recent platform (1.7) for Java applications in networking technology.",
   "industryIdentifiers": [
    {
     "type": "ISBN_10",
     "identifier": "0080568785"
    },
    {
     "type": "ISBN_13",
     "identifier": "9780080568782"
    }
   ],
   "readingModes": {
    "text": true,
    "image": true
   },
   "pageCount": 192,
   "printType": "BOOK",
   "categories": [
    "Computers"
   ],
   "averageRating": 4.0,
   "ratingsCount": 2,
   "maturityRating": "NOT_MATURE",
   "allowAnonLogging": true,
   "contentVersion": "1.4.5.0.preview.3",
   "panelizationSummary": {
    "containsEpubBubbles": false,
    "containsImageBubbles": false
   },
   "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=lfHo7uMk7r4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=lfHo7uMk7r4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
   },
   "language": "en",
   "previewLink": "http://books.google.co.in/books?id=lfHo7uMk7r4C&pg=PA51&dq=java&hl=&cd=6&source=gbs_api",
   "infoLink": "https://play.google.com/store/books/details?id=lfHo7uMk7r4C&source=gbs_api",
   "canonicalVolumeLink": "https://play.google.com/store/books/details?id=lfHo7uMk7r4C"
  },
  "saleInfo": {
   "country": "IN",
   "saleability": "FOR_SALE",
   "isEbook": true,
   "listPrice": {
    "amount": 2082.7,
    "currencyCode": "INR"
   },
   "retailPrice": {
    "amount": 2082.7,
    "currencyCode": "INR"
   },
   "buyLink": "https://play.google.com/store/books/details?id=lfHo7uMk7r4C&rdid=book-lfHo7uMk7r4C&rdot=1&source=gbs_api",
   "offers": [
    {
     "finskyOfferType": 1,
     "listPrice": {
      "amountInMicros": 2.0827E9,
      "currencyCode": "INR"
     },
     "retailPrice": {
      "amountInMicros": 2.0827E9,
      "currencyCode": "INR"
     }
    }
   ]
  },
  "accessInfo": {
   "country": "IN",
   "viewability": "PARTIAL",
   "embeddable": true,
   "publicDomain": false,
   "textToSpeechPermission": "ALLOWED",
   "epub": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.co.in/books/download/TCP_IP_Sockets_in_Java-sample-epub.acsm?id=lfHo7uMk7r4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
   },
   "pdf": {
    "isAvailable": true,
    "acsTokenLink": "http://books.google.co.in/books/download/TCP_IP_Sockets_in_Java-sample-pdf.acsm?id=lfHo7uMk7r4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
   },
   "webReaderLink": "http://play.google.com/books/reader?id=lfHo7uMk7r4C&hl=&printsec=frontcover&source=gbs_api",
   "accessViewStatus": "SAMPLE",
   "quoteSharingAllowed": false
  },
  "searchInfo": {
   "textSnippet": "Framer.\u003cb\u003ejava\u003c/b\u003e 0 import \u003cb\u003ejava\u003c/b\u003e.io.IOException; 1 import \u003cb\u003ejava\u003c/b\u003e.io.OutputStream; 2 3 \u003cbr\u003e\npublic interface Framer { 4 void frameMsg(byte[] message, OutputStream out) \u003cbr\u003e\nthrows IOException; 5 byte[] nextMsg() throws IOException; 6 } Framer.\u003cb\u003ejava\u003c/b\u003e The \u003cbr\u003e\nclass&nbsp;..."
  }
}



describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let store: MockStore<AppState>;
  const initialState = { books : [], cart: { ids : [ BOOKS[0].id ], entities : { [BOOKS[0].id] : BOOKS[0] } } };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, 
        MatGridListModule, 
        HttpClientModule,
        RouterTestingModule.withRoutes([ { path: 'billing', component: BookDetailsComponent } ]) ],
      declarations: [ BookDetailsComponent ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
    store = TestBed.get<Store<AppState>>(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.buy(BOOKS[0]);
    component.addToCart(BOOKS[0]);
    component.addToCart(BOOKS[1]);
  });
});
