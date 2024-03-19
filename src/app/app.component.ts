import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title:string = 'Hola mundo Angular';
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
