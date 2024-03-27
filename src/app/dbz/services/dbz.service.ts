import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

console.log(uuid());
@Injectable({providedIn: 'root'})
export class DbzService {
  
     
public characters:Character[]=[
    {
      id:uuid(),
      name:"Krillin",
      power:1000
    },
    {
      id:uuid(),
        name:"Goku",
        power:9500
    }
    ,
    {
      id:uuid(),
        name:"Vegueta",
        power:7500
    }
];
  addCharacter(character:Character):void{
    console.log('Main Pages');
    const newCharacter: Character ={ id:uuid(), ...character};
 
    console.log(character);
    this.characters.push(newCharacter);

  }
 

  onDeleteCharacterById(id:string){
    console.log('Main Pages');

    this.characters= this.characters.filter(character=> character.id !== id);

   // this.characters.splice(character,1);

  } 

     /*const newCharacter: Character ={
     id:uuid(),
     name: character.name,
     power:character.power 
    } */
     /*onDeleteChar(character:number):void{
    console.log('Main Pages');

    console.log(character);
    this.characters.splice(character,1);

  } */
}