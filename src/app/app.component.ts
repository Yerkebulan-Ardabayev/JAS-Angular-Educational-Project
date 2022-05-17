import { Component } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService],
})
export class AppComponent {
  taskText: string = '';
  tasks: TaskModel[] = [
    new TaskModel('First task'),
    new TaskModel('Second Task'),
  ];

  onFormSubmit() {
    this.tasks.push(new TaskModel(this.taskText));
    this.taskText = '';
  }
}
