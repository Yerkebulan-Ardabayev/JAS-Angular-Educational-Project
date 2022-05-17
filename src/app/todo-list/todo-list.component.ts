import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks: TaskModel[] = [];
  @Output() taskDeleted = new EventEmitter<TaskModel>();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.tasks = this.todoService.getTasks();

    this.todoService.tasksChanged.subscribe((event) => {
      this.tasks = event;
    });
  }

  handleTaskDelete(task: TaskModel) {
    this.todoService.removeTask(task);
  }
}
