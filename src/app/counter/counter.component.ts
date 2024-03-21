import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Counter: {{counter}}</h1>
  <p>Bienvenido a Angular</p>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decreaseBy(-1)">-1</button>
  <hr>
  
  ` 
})

export class CounterComponent {
  constructor() { }
  public counter:number = 10;

  increaseBy(value:number):void {
  this.counter+=value;
  }
  decreaseBy(value:number):void{
    this.counter+=value;
    }
    reset():void{
      this.counter=10;
      }
 
}