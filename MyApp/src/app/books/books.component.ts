import { Component, OnInit } from '@angular/core';

interface Book {
  name: string;
  author: string;
  src: string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C. Martin',
      src: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_SY1000_.jpg',
    },
    {
      name: 'Pragmatic Programmer',
      author: 'David Thomas',
      src: 'https://m.media-amazon.com/images/I/51W1sBPO7tL._AC_SY780_.jpg',
    },
  ];

  isShowing: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  toggleBooks(): void {
    this.isShowing = !this.isShowing;
  }

  // handleInput(event: Event): void {
  //   const target = event.target as HTMLInputElement;
  //   this.myValue = target.value;
  // }
}
