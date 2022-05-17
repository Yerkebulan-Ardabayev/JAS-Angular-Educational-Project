import { Component } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-create-form',
  templateUrl: './todo-create-form.component.html',
  styleUrls: ['./todo-create-form.component.scss'],
})
export class TodoCreateFormComponent {
  taskText: string = '';

  constructor(private todoService: TodoService) {}

  onFormSubmit() {
    const task = new TaskModel(this.taskText);
    this.todoService.addNewTask(task);
    this.taskText = '';
  }
}
