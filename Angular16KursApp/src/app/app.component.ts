import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskViewComponent } from "./task-view/task-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users = DUMMY_USERS;
  passedUserName! : string ;
  passedUserId! : string;
  passedUserAvatar! : string;

  saveSelectUserEvent(user : UserComponent){
    this.passedUserName = user.name;
    this.passedUserId = user.id;
    this.passedUserAvatar = user.avatar;
  }
}
