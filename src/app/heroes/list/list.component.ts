import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] =['Spiderman','BlackPanter','Ironman','SuperMan','Batman'];
  public deletehero?: string;
  removeLasHero():void{

    this.deletehero=this.heroNames.pop();
  }
}
