import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  cart: Book[] = [];
  isShowing: boolean = true;
  // private booksService: BooksService;

  constructor(private booksService: BooksService) {
    // this.books = this.booksService.getBooks();
    // this.booksService = new BooksService();
  }

  ngOnInit(): void {
    // console.log("OnInit");
    this.books = this.booksService.getBooks();
  }

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
