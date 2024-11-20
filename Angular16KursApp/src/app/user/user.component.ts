import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required : true}) id! : string;
  @Input({required : true}) avatar! : string;
  @Input({required : true}) name! : string;
  @Input({required : true}) selected!: boolean;
  @Output() selectUserEvent = new EventEmitter();
  

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onUserClick(){
    this.selectUserEvent.emit(this);
  }
}
