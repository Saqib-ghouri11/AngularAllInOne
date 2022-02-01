import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:UserInterface;

  @Output() itemEmit:EventEmitter<string>;

  constructor() {
    // Here we have initialized the object as userInterface
    this.user={} as UserInterface;
    this.itemEmit=new EventEmitter<string>();
   }

   //emitting value to parent
   addItemToParent(value:string){
      this.itemEmit.emit(value);
   }

  ngOnInit(): void {
  }

}
