import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainComponent  {
  
public characters:Character[]=[
    {
      name:"Krillin",
      power:1000
    },
    {
        name:"Goku",
        power:9500
    }
    ,
    {
        name:"Vegueta",
        power:7500
    }
];
  onNewCharacter(character:Character):void{
    console.log('Main Pages');

    console.log(character);
    this.characters.push(character);

  }
  onDeleteChar(character:number):void{
    console.log('Main Pages');

    console.log(character);
    this.characters.splice(character,1);

  }
}