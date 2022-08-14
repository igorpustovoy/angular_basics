import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'luis ramirez';
  imgURL = 'https://picsum.photos/200/300';
  images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
  ]
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pepperoni', 'pineapple', 'cheese'],
    size: 'medium',
  }
  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(img: string) {
    console.log(img);
  }
}
