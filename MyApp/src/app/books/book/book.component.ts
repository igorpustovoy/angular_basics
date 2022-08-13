import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  constructor() {}

  // myInterval: any = null;
  // ngOnInit(): void {
  //   this.myInterval = setInterval(() => {
  //     console.log("HELLO")
  //   }, 1000);
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.myInterval);
  //   console.log('OnDestroy');
  // }

  ngOnInit(): void {};

  addToCart():void {
    this.bookEmitter.emit(this.book);
  }
}
