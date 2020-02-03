import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/model/appState.interface';
import { Store } from '@ngrx/store';
import { selectAll } from '../store/reducers/collection.reducer';
import { Observable } from 'rxjs';
import { Book } from '../store/model/book.interface';
import { loadBooksToCollection } from '../store/actions/collection.actions';
import { PurchasedBook } from '../store/model/purchasedBook.interface';

const books = {
  "kind": "books#volumes",
  "totalItems": 2259,
  "items": [
   {
    "kind": "books#volume",
    "id": "lGRpeBZQYPoC",
    "etag": "y7s2mOXhKCQ",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/lGRpeBZQYPoC",
    "volumeInfo": {
     "title": "The Class Of Java",
     "authors": [
      "Jain Pravin"
     ],
     "publisher": "Pearson Education India",
     "publishedDate": "2011-09-01",
     "industryIdentifiers": [
      {
       "type": "ISBN_10",
       "identifier": "8131755444"
      },
      {
       "type": "ISBN_13",
       "identifier": "9788131755440"
      }
     ],
     "readingModes": {
      "text": false,
      "image": true
     },
     "pageCount": 492,
     "printType": "BOOK",
     "averageRating": 5.0,
     "ratingsCount": 10,
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": false,
     "contentVersion": "0.0.1.0.preview.1",
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=lGRpeBZQYPoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=lGRpeBZQYPoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.co.in/books?id=lGRpeBZQYPoC&printsec=frontcover&dq=java&hl=&cd=1&source=gbs_api",
     "infoLink": "http://books.google.co.in/books?id=lGRpeBZQYPoC&dq=java&hl=&source=gbs_api",
     "canonicalVolumeLink": "https://books.google.com/books/about/The_Class_Of_Java.html?hl=&id=lGRpeBZQYPoC"
    },
    "saleInfo": {
     "country": "IN",
     "saleability": "NOT_FOR_SALE",
     "isEbook": false
    },
    "accessInfo": {
     "country": "IN",
     "viewability": "PARTIAL",
     "embeddable": true,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED",
     "epub": {
      "isAvailable": false
     },
     "pdf": {
      "isAvailable": false
     },
     "webReaderLink": "http://play.google.com/books/reader?id=lGRpeBZQYPoC&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "SAMPLE",
     "quoteSharingAllowed": false
    }
   },
   {
    "kind": "books#volume",
    "id": "qmDrRjXnclMC",
    "etag": "lTR54rWUXTY",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/qmDrRjXnclMC",
    "volumeInfo": {
     "title": "Programming with Java",
     "authors": [
      "T.V. Suresh Kumar, B. Eswara Reddy, P. Raghavan"
     ],
     "publisher": "Pearson Education India",
     "industryIdentifiers": [
      {
       "type": "ISBN_10",
       "identifier": "8131758346"
      },
      {
       "type": "ISBN_13",
       "identifier": "9788131758342"
      }
     ],
     "readingModes": {
      "text": false,
      "image": true
     },
     "printType": "BOOK",
     "averageRating": 5.0,
     "ratingsCount": 1,
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": false,
     "contentVersion": "0.0.1.0.preview.1",
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=qmDrRjXnclMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=qmDrRjXnclMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.co.in/books?id=qmDrRjXnclMC&printsec=frontcover&dq=java&hl=&cd=2&source=gbs_api",
     "infoLink": "http://books.google.co.in/books?id=qmDrRjXnclMC&dq=java&hl=&source=gbs_api",
     "canonicalVolumeLink": "https://books.google.com/books/about/Programming_with_Java.html?hl=&id=qmDrRjXnclMC"
    },
    "saleInfo": {
     "country": "IN",
     "saleability": "NOT_FOR_SALE",
     "isEbook": false
    },
    "accessInfo": {
     "country": "IN",
     "viewability": "PARTIAL",
     "embeddable": true,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED",
     "epub": {
      "isAvailable": false
     },
     "pdf": {
      "isAvailable": false
     },
     "webReaderLink": "http://play.google.com/books/reader?id=qmDrRjXnclMC&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "SAMPLE",
     "quoteSharingAllowed": false
    }
   },
   {
    "kind": "books#volume",
    "id": "50dWvwo4qxwC",
    "etag": "2kTzFcw+7T0",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/50dWvwo4qxwC",
    "volumeInfo": {
     "title": "Java/J2Ee Interview Questions 2010 Ed.: A Guide For Interview",
     "authors": [
      "B.N Reddys"
     ],
     "publisher": "Dreamtech Press",
     "publishedDate": "2006-09-01",
     "description": "This book covers almost all the topics in Java/ J2EE. Each topic carries a number of questions for you to easily grasp the concept behind the topic. The questions are objective as well as descriptive in nature. This is done strictly keeping in mind that an interviewer can ask any type of questions. Hence, all the questions prepared are general in nature.",
     "industryIdentifiers": [
      {
       "type": "ISBN_10",
       "identifier": "8177226797"
      },
      {
       "type": "ISBN_13",
       "identifier": "9788177226799"
      }
     ],
     "readingModes": {
      "text": false,
      "image": true
     },
     "pageCount": 184,
     "printType": "BOOK",
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": false,
     "contentVersion": "1.1.1.0.preview.1",
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=50dWvwo4qxwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=50dWvwo4qxwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.co.in/books?id=50dWvwo4qxwC&pg=PA174&dq=java&hl=&cd=3&source=gbs_api",
     "infoLink": "http://books.google.co.in/books?id=50dWvwo4qxwC&dq=java&hl=&source=gbs_api",
     "canonicalVolumeLink": "https://books.google.com/books/about/Java_J2Ee_Interview_Questions_2010_Ed_A.html?hl=&id=50dWvwo4qxwC"
    },
    "saleInfo": {
     "country": "IN",
     "saleability": "NOT_FOR_SALE",
     "isEbook": false
    },
    "accessInfo": {
     "country": "IN",
     "viewability": "PARTIAL",
     "embeddable": true,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED",
     "epub": {
      "isAvailable": false
     },
     "pdf": {
      "isAvailable": false
     },
     "webReaderLink": "http://play.google.com/books/reader?id=50dWvwo4qxwC&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "SAMPLE",
     "quoteSharingAllowed": false
    },
    "searchInfo": {
     "textSnippet": "A GUIDE FOR INTERVIEW This book, \u003cb\u003eJAVA\u003c/b\u003e/J2EE Interview Questions— A Guide \u003cbr\u003e\nfor Interview, covers almost all the topics in \u003cb\u003eJava\u003c/b\u003e/J2EE. Each topic carries a \u003cbr\u003e\nnumber of questions for you to easily grasp the concept behind the topic."
    }
   },
   {
    "kind": "books#volume",
    "id": "gbFwAAAAMAAJ",
    "etag": "WBWZwSqnp8g",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/gbFwAAAAMAAJ",
    "volumeInfo": {
     "title": "Java",
     "subtitle": "A Traveller's Anthology",
     "authors": [
      "James Robert Rush"
     ],
     "publisher": "Oxford University Press, USA",
     "publishedDate": "1996",
     "description": "Capturing the many diverse images and perceptions of Java recorded over the last 600 years, this entertaining volume brings together accounts of this enchanting tropical island by thirty-five Western travellers, most of them English or American. Their writings span the years from the earliest European contacts with the island, beginning with the 1330 impressions of Friar Odoric, to Richard Crithfield's account of his return to Java in 1985. Through their eyes we see the island transformed from a distant realm of wealth and danger into an orderly and prosperous Dutch colony and then, in the twentieth century, into the center-piece of the Indonesian nation. Over the years, the \"Java\" that armchair travellers of the English-speaking world came to know was largely shaped by witnesses like Thomas Stamford Raffles, Alfred Russel Wallace, Elizah Ruhamah Scidmore, S.J. Perelman, Frank and Helen Schreider, V.S. Naipaul, and many others. With informative introductions that set each passage in context, these tales have much to tell us about the West itself and about its evolving relationship with this populous South-East Asian center of civilization and power, and it with its people.",
     "industryIdentifiers": [
      {
       "type": "OTHER",
       "identifier": "UOM:39015040551890"
      }
     ],
     "readingModes": {
      "text": false,
      "image": false
     },
     "pageCount": 292,
     "printType": "BOOK",
     "categories": [
      "Reference"
     ],
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": false,
     "contentVersion": "preview-1.0.0",
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=gbFwAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=gbFwAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.co.in/books?id=gbFwAAAAMAAJ&q=java&dq=java&hl=&cd=4&source=gbs_api",
     "infoLink": "http://books.google.co.in/books?id=gbFwAAAAMAAJ&dq=java&hl=&source=gbs_api",
     "canonicalVolumeLink": "https://books.google.com/books/about/Java.html?hl=&id=gbFwAAAAMAAJ"
    },
    "saleInfo": {
     "country": "IN",
     "saleability": "NOT_FOR_SALE",
     "isEbook": false
    },
    "accessInfo": {
     "country": "IN",
     "viewability": "NO_PAGES",
     "embeddable": false,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED",
     "epub": {
      "isAvailable": false
     },
     "pdf": {
      "isAvailable": false
     },
     "webReaderLink": "http://play.google.com/books/reader?id=gbFwAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "NONE",
     "quoteSharingAllowed": false
    },
    "searchInfo": {
     "textSnippet": "Capturing the many diverse images and perceptions of Java recorded over the last 600 years, this entertaining volume brings together accounts of this enchanting tropical island by thirty-five Western travellers, most of them English or ..."
    }
   },
   {
    "kind": "books#volume",
    "id": "z7TQ8NSooS4C",
    "etag": "37P0Dyk8gL4",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/z7TQ8NSooS4C",
    "volumeInfo": {
     "title": "Java NIO \\c Ron Hitchens",
     "authors": [
      "Ron Hitchens"
     ],
     "publisher": "\"O'Reilly Media, Inc.\"",
     "publishedDate": "2002-08-27",
     "description": "The java New I/O (NIO) packages in J2SE 1.4 introduce many new, indispensable features previously unavailable to Java programmers. These include APIs for high-performance I/O operations, regular expression processing, and character set coding. These new libraries are a treasure trove for java developers. The NIO APIs are especially valuable where high-performance I/O is a requirement, but they can also be useful in a wide range of scenarios. The new APIs let you work directly with I/O buffers, multiplex nonblocking streams, do scattering reads and gathering writes, do channel-to-channel transfers, work with memory-mapped files, manage file locks, and much more. The new high-performance Regular Expression Library provides sophisticated, Perl-like regex-processing features such as pattern matching, search and replace, capture groups, look ahead assertions, and many others. The Charset API gives you complete control over character set encoding and decoding, which are vital for properly managing the exchange of documents on the Web, for localization, or for other purposes. You can also create and install your own custom character sets. Staying current with the latent java technology is never easy. NIO, new in Java 1.4, is quite possibly the most important new java feature since Swing. Understanding it thoroughly is essential for any serious Java developer. NIO closes the gap between java and natively compiled languages and enables java applications to achieve maximum I/O performance by effectively leveraging operating-system services in a portable way. Java NIO is a comprehensive guide to the java New I/O facilities. It lots you take full advantage of NIO features and shows you how they work, what they can do for you, and when you should use them. This book brings you up to speed on NIO and shows you how to bring your I/O-bound Java applications up to speed as well. Java NIO is an essential part of any Java professional's library.",
     "industryIdentifiers": [
      {
       "type": "ISBN_10",
       "identifier": "0596002882"
      },
      {
       "type": "ISBN_13",
       "identifier": "9780596002886"
      }
     ],
     "readingModes": {
      "text": false,
      "image": true
     },
     "pageCount": 282,
     "printType": "BOOK",
     "categories": [
      "Computers"
     ],
     "averageRating": 3.0,
     "ratingsCount": 1,
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": true,
     "contentVersion": "2.4.2.0.preview.1",
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=z7TQ8NSooS4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=z7TQ8NSooS4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.co.in/books?id=z7TQ8NSooS4C&pg=PT239&dq=java&hl=&cd=5&source=gbs_api",
     "infoLink": "http://books.google.co.in/books?id=z7TQ8NSooS4C&dq=java&hl=&source=gbs_api",
     "canonicalVolumeLink": "https://books.google.com/books/about/Java_NIO_c_Ron_Hitchens.html?hl=&id=z7TQ8NSooS4C"
    },
    "saleInfo": {
     "country": "IN",
     "saleability": "NOT_FOR_SALE",
     "isEbook": false
    },
    "accessInfo": {
     "country": "IN",
     "viewability": "PARTIAL",
     "embeddable": true,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED",
     "epub": {
      "isAvailable": false
     },
     "pdf": {
      "isAvailable": true
     },
     "webReaderLink": "http://play.google.com/books/reader?id=z7TQ8NSooS4C&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "SAMPLE",
     "quoteSharingAllowed": false
    },
    "searchInfo": {
     "textSnippet": "The custom Rot13 charset (continued) 222 | Chapter6: CharacterSets import \u003cb\u003ejava\u003c/b\u003e\u003cbr\u003e\n.nio.charset.CharsetDecoder; import \u003cb\u003ejava\u003c/b\u003e.nio.charset.CoderResult; import \u003cb\u003ejava\u003c/b\u003e.\u003cbr\u003e\nutil.Map; import \u003cb\u003ejava\u003c/b\u003e.util.Iterator; import \u003cb\u003ejava\u003c/b\u003e.io.Writer; import \u003cb\u003ejava\u003c/b\u003e.io.PrintStream&nbsp;..."
    }
   },
   {
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
   },
   {
    "kind": "books#volume",
    "id": "diqHjRjMhW0C",
    "etag": "azHdZlhNs4c",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/diqHjRjMhW0C",
    "volumeInfo": {
     "title": "Wicked Cool Java",
     "subtitle": "Code Bits, Open-source Libraries, and Project Ideas",
     "authors": [
      "Brian D. Eubanks"
     ],
     "publisher": "No Starch Press",
     "publishedDate": "2005",
     "description": "Containing 101 fun, interesting, and useful ways to get more out of Java, this title targets developers and system architects who have some basic Java knowledge but may not be familiar with the wide range of libraries available.",
     "industryIdentifiers": [
      {
       "type": "ISBN_13",
       "identifier": "9781593270612"
      },
      {
       "type": "ISBN_10",
       "identifier": "1593270615"
      }
     ],
     "readingModes": {
      "text": true,
      "image": true
     },
     "pageCount": 224,
     "printType": "BOOK",
     "categories": [
      "COMPUTERS"
     ],
     "averageRating": 3.5,
     "ratingsCount": 5,
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": true,
     "contentVersion": "2.0.2.0.preview.3",
     "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
     },
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=diqHjRjMhW0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=diqHjRjMhW0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.co.in/books?id=diqHjRjMhW0C&pg=PA162&dq=java&hl=&cd=7&source=gbs_api",
     "infoLink": "http://books.google.co.in/books?id=diqHjRjMhW0C&dq=java&hl=&source=gbs_api",
     "canonicalVolumeLink": "https://books.google.com/books/about/Wicked_Cool_Java.html?hl=&id=diqHjRjMhW0C"
    },
    "saleInfo": {
     "country": "IN",
     "saleability": "NOT_FOR_SALE",
     "isEbook": false
    },
    "accessInfo": {
     "country": "IN",
     "viewability": "PARTIAL",
     "embeddable": true,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED",
     "epub": {
      "isAvailable": true
     },
     "pdf": {
      "isAvailable": true
     },
     "webReaderLink": "http://play.google.com/books/reader?id=diqHjRjMhW0C&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "SAMPLE",
     "quoteSharingAllowed": false
    },
    "searchInfo": {
     "textSnippet": "with. Low-Level. \u003cb\u003eJava\u003c/b\u003e. Sound. For those of you who want to work with low-level \u003cbr\u003e\nsignal processing (and individual sound samples), the \u003cb\u003eJava\u003c/b\u003e Sound API provides \u003cbr\u003e\nthe ability to do this. You can read and write data streams to and from audio ports,\u003cbr\u003e\n&nbsp;..."
    }
   },
   {
    "kind": "books#volume",
    "id": "EzNABAAAQBAJ",
    "etag": "THuFKl/G1AY",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/EzNABAAAQBAJ",
    "volumeInfo": {
     "title": "Java Programming:",
     "authors": [
      "Pandey"
     ],
     "publisher": "Pearson Education India",
     "description": "Java Programming is an introductory level text that instills an understanding of basic concepts before gradually moving to advanced topics like swing, socket programming, JAVA native interface, remote method invocation and serialization. Programs a",
     "industryIdentifiers": [
      {
       "type": "ISBN_13",
       "identifier": "9789332510326"
      },
      {
       "type": "ISBN_10",
       "identifier": "9332510326"
      }
     ],
     "readingModes": {
      "text": false,
      "image": true
     },
     "pageCount": 888,
     "printType": "BOOK",
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": false,
     "contentVersion": "preview-1.0.0",
     "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
     },
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=EzNABAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=EzNABAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.co.in/books?id=EzNABAAAQBAJ&printsec=frontcover&dq=java&hl=&cd=8&source=gbs_api",
     "infoLink": "https://play.google.com/store/books/details?id=EzNABAAAQBAJ&source=gbs_api",
     "canonicalVolumeLink": "https://play.google.com/store/books/details?id=EzNABAAAQBAJ"
    },
    "saleInfo": {
     "country": "IN",
     "saleability": "FOR_SALE",
     "isEbook": true,
     "listPrice": {
      "amount": 420.0,
      "currencyCode": "INR"
     },
     "retailPrice": {
      "amount": 294.0,
      "currencyCode": "INR"
     },
     "buyLink": "https://play.google.com/store/books/details?id=EzNABAAAQBAJ&rdid=book-EzNABAAAQBAJ&rdot=1&source=gbs_api",
     "offers": [
      {
       "finskyOfferType": 1,
       "listPrice": {
        "amountInMicros": 4.2E8,
        "currencyCode": "INR"
       },
       "retailPrice": {
        "amountInMicros": 2.94E8,
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
      "isAvailable": false
     },
     "pdf": {
      "isAvailable": true,
      "acsTokenLink": "http://books.google.co.in/books/download/Java_Programming-sample-pdf.acsm?id=EzNABAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
     },
     "webReaderLink": "http://play.google.com/books/reader?id=EzNABAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "SAMPLE",
     "quoteSharingAllowed": false
    },
    "searchInfo": {
     "textSnippet": "Java Programming is an introductory level text that instills an understanding of basic concepts before gradually moving to advanced topics like swing, socket programming, JAVA native interface, remote method invocation and serialization."
    }
   },
   {
    "kind": "books#volume",
    "id": "bIchilfV3bcC",
    "etag": "jZ4LFS4iU1Q",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/bIchilfV3bcC",
    "volumeInfo": {
     "title": "Multithreaded Programming with Java Technology",
     "authors": [
      "Bil Lewis",
      "Daniel J. Berg"
     ],
     "publisher": "Prentice Hall Professional",
     "publishedDate": "2000",
     "description": "\"Multithreaded Programming with Java Technology is the first complete guide to multithreaded development with the Java 2 platform. Multithreading experts Bil Lewis and Daniel J. Berg cover the underlying structures upon which threads are built; thread construction; and thread lifecycles, including birth, life, death, and cancellation. Next, using extensive code examples, they cover everything developers need to know to make the most of multithreading.\"--BOOK JACKET.Title Summary field provided by Blackwell North America, Inc. All Rights Reserved",
     "industryIdentifiers": [
      {
       "type": "ISBN_10",
       "identifier": "0130170070"
      },
      {
       "type": "ISBN_13",
       "identifier": "9780130170071"
      }
     ],
     "readingModes": {
      "text": false,
      "image": true
     },
     "pageCount": 461,
     "printType": "BOOK",
     "categories": [
      "Computers"
     ],
     "averageRating": 4.0,
     "ratingsCount": 1,
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": false,
     "contentVersion": "0.0.2.0.preview.1",
     "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
     },
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=bIchilfV3bcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=bIchilfV3bcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.co.in/books?id=bIchilfV3bcC&pg=PP175&dq=java&hl=&cd=9&source=gbs_api",
     "infoLink": "http://books.google.co.in/books?id=bIchilfV3bcC&dq=java&hl=&source=gbs_api",
     "canonicalVolumeLink": "https://books.google.com/books/about/Multithreaded_Programming_with_Java_Tech.html?hl=&id=bIchilfV3bcC"
    },
    "saleInfo": {
     "country": "IN",
     "saleability": "NOT_FOR_SALE",
     "isEbook": false
    },
    "accessInfo": {
     "country": "IN",
     "viewability": "PARTIAL",
     "embeddable": true,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
     "epub": {
      "isAvailable": false
     },
     "pdf": {
      "isAvailable": false
     },
     "webReaderLink": "http://play.google.com/books/reader?id=bIchilfV3bcC&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "SAMPLE",
     "quoteSharingAllowed": false
    },
    "searchInfo": {
     "textSnippet": "You could write an “unlock_all” routine, but it would probably just make your code \u003cbr\u003e\neven more confusing and very likely lead you to make mistakes. In \u003cb\u003eJava\u003c/b\u003e, \u003cbr\u003e\nsynchronized sections are also recursive (Code Example 7–2). One \u003cbr\u003e\nsynchronized&nbsp;..."
    }
   },
   {
    "kind": "books#volume",
    "id": "wqR2eOdZOqcC",
    "etag": "oHAoHhHrqxs",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/wqR2eOdZOqcC",
    "volumeInfo": {
     "title": "Java I/O",
     "authors": [
      "Elliotte Rusty Harold"
     ],
     "publisher": "\"O'Reilly Media, Inc.\"",
     "publishedDate": "1999",
     "description": "Intermediate programmers can refer to this guide to gain a solid understanding of text formatting in an object-oriented language. \"Java I/O\" explores streams, which provide simple ways to read and write data of different types, and shows how to control number formatting, use characters aside from the standard (but outdated) ASCII character set, and get a head start on writing truly multi-lingual software.",
     "industryIdentifiers": [
      {
       "type": "ISBN_10",
       "identifier": "1565924851"
      },
      {
       "type": "ISBN_13",
       "identifier": "9781565924857"
      }
     ],
     "readingModes": {
      "text": false,
      "image": true
     },
     "pageCount": 568,
     "printType": "BOOK",
     "categories": [
      "Computers"
     ],
     "averageRating": 4.0,
     "ratingsCount": 1,
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": false,
     "contentVersion": "2.1.1.0.preview.1",
     "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
     },
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=wqR2eOdZOqcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=wqR2eOdZOqcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.co.in/books?id=wqR2eOdZOqcC&pg=PA146&dq=java&hl=&cd=10&source=gbs_api",
     "infoLink": "http://books.google.co.in/books?id=wqR2eOdZOqcC&dq=java&hl=&source=gbs_api",
     "canonicalVolumeLink": "https://books.google.com/books/about/Java_I_O.html?hl=&id=wqR2eOdZOqcC"
    },
    "saleInfo": {
     "country": "IN",
     "saleability": "NOT_FOR_SALE",
     "isEbook": false
    },
    "accessInfo": {
     "country": "IN",
     "viewability": "PARTIAL",
     "embeddable": true,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED",
     "epub": {
      "isAvailable": false
     },
     "pdf": {
      "isAvailable": true
     },
     "webReaderLink": "http://play.google.com/books/reader?id=wqR2eOdZOqcC&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "SAMPLE",
     "quoteSharingAllowed": false
    },
    "searchInfo": {
     "textSnippet": "This is what the \u003cb\u003ejava\u003c/b\u003e. io. ByteArrayInputStream class gives you. Similarly, you \u003cbr\u003e\nmight want to send a group of double-precision, floating-point numbers across \u003cbr\u003e\nthe network with UDP. Before you can do this, you have to convert the numbers \u003cbr\u003e\ninto&nbsp;..."
    }
   }
  ]
 }

@Component({
  selector: 'assignment-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.css']
})
export class MyCollectionComponent implements OnInit {

  collection$: Observable<Array<PurchasedBook>>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.collection$ = this.store.select(state => selectAll(state.collection));

    /*
    setTimeout(() => {
      const puchasedBooks = books.items.map( book => ({  id: book.id, book: book, quantity: 1, orderedDate: new Date() }) )
      this.store.dispatch(loadBooksToCollection({ books : puchasedBooks }));
    });
    */
   
  }

}
