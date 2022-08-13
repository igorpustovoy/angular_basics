import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(): Book[] {
    return [
      {
        name: 'clean code',
        author: 'robert c. martin',
        src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_SY1000_.jpg',
        price: 20
      },
      {
        name: 'Pragmatic Programmer',
        author: 'David Thomas',
        src: 'https://m.media-amazon.com/images/I/51W1sBPO7tL._AC_SY780_.jpg',
        price: 30
      },
    ];
  }
}
