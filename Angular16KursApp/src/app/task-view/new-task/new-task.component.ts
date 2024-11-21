import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) addingNewTask = false;  
  @Output() onClosingNewTaskDialog = new EventEmitter;
  @Output() onAddingNewTask = new EventEmitter<{title : string; summary : string; date : string;}>();
    enteredTitle = '';
    enteredSummary = '';
    enteredDate = '';

  onClosingNewTask(){
    this.onClosingNewTaskDialog.emit(false)
  }
  onFormSubmit(){
    this.onAddingNewTask.emit({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
    })
  }
}
