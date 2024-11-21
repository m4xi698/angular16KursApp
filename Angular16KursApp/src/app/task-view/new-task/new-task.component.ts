import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) addingNewTask = false;  
  @Output() onClosingNewTaskDialog = new EventEmitter;

  onClosingNewTask(){
    this.onClosingNewTaskDialog.emit(false)
  }
}
