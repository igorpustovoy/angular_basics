import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
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

  cart: Book[] = [];

  isShowing: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  toggleBooks(): void {
    this.isShowing = !this.isShowing;
  }

  addToCart(book: Book): void {
    console.log('add to cart', book);
  }

  // handleInput(event: Event): void {
  //   const target = event.target as HTMLInputElement;
  //   this.myValue = target.value;
  // }
}
