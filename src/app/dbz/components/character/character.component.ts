import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

@Output()
public onNewCharacter:EventEmitter<Character>= new EventEmitter();


public  character: Character = {
  name:"Mr. Popo",
  power:1
};
emitCharacter():void{

  //debugger;
 if(this.character.name.length===0)return ;
 this.onNewCharacter.emit(this.character);
 // console.log(this.character);
 
  //this.character.name='';
 // this.character.power=0;
  this.character= {name:'', power:0};
}
}
