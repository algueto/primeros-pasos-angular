import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output() onDeleteId: EventEmitter<string>= new EventEmitter();
  @Input() public characterList:Character[]= [];
  onDeleteCharacter(id?:string):void{
    if(!id) return;
    this.onDeleteId.emit(id);
  }

}
