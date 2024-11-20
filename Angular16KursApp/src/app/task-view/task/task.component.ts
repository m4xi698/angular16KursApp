import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() taskTitle! : string;
  @Input() taskTimeToComplete! : string;
  @Input() taskSummary! : string;
  @Input() taskId! : string;
  @Output() taskCompleted = new EventEmitter<string>();

  succesSound = new Audio('../../assets/sounds/success-sound.mp3');

  onTaskComplete(){
    this.succesSound.volume = 0.2;
    this.succesSound.play();  
    this.taskCompleted.emit(this.taskId);
  }
}
