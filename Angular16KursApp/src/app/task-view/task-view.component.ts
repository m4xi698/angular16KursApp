import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TaskViewComponent {
  @Input({required : true}) activeUserName! : string ; 
  @Input({required : true}) activeUserId! : string;
  addingNewTaskStatus  =  false;
  
  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get tasksForSelectedUser(){
      return this.dummyTasks.filter((task)=> task.userId === this.activeUserId)
    } 

  onDeleteCompletedTask(id : string){
    this.dummyTasks = this.dummyTasks.filter((task)=> task.id !== id);
  }
  onAddingNewTask(){
    this.addingNewTaskStatus = true;
  }
  closeNewTaskDialog(){
    this.addingNewTaskStatus = false;
  } 
  addingNewTask(taskData : ({title : string,summary : string,date : string})){
    this.dummyTasks.push({
      id : new Date().getTime().toString(),
      title : taskData.title,
      summary : taskData.summary,
      dueDate : taskData.date,
      userId : this.activeUserId
    });
    this.closeNewTaskDialog();
  }
}
