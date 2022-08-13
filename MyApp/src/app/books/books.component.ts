import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  name: string = 'Clean Code';
  author: string = 'Robert C. Martin';
  src:string = "https://m.media-amazon.com/images/I/41xShlnTZTL._AC_SY1000_.jpg"

  isDisabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.isDisabled = true;
  }

  myValue: string = "xdDD";
  // handleInput(event: Event): void {
  //   const target = event.target as HTMLInputElement;
  //   this.myValue = target.value;
  // }
 }
