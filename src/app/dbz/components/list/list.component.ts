import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public caharacterList: Character[]=[
   {name:"Trunk", power:10}
  ];

  @Output()
  public onDeleteId:EventEmitter<string>= new EventEmitter();


  onDeleteCharacter(index?: string): void {
   
    if(!index)return;
    this.onDeleteId.emit(index);
    console.log(index)    
  }

  /*  onDeleteCharacter(index: number): void {
   
    this.onDeleteId.emit(index);
  console.log(index)    
  }*/ 
}
