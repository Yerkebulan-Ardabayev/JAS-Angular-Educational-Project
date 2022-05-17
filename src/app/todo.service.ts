import { EventEmitter } from '@angular/core';
import { TaskModel } from '../models/task.model';

const localStorageKey = 'todos';
const initialTasks = JSON.stringify([
  new TaskModel('First task'),
  new TaskModel('Second Task'),
]);
export class TodoService {
  private tasks: TaskModel[] = JSON.parse(
    localStorage.getItem(localStorageKey) ?? initialTasks
  );
  tasksChanged = new EventEmitter<TaskModel[]>();

  getTasks() {
    return [...this.tasks];
  }

  emitChanges() {
    localStorage.setItem(localStorageKey, JSON.stringify(this.getTasks()));
    this.tasksChanged.emit(this.getTasks());
  }

  addNewTask(task: TaskModel) {
    this.tasks.push(task);
    this.emitChanges();
  }

  removeTask(task: TaskModel) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    this.emitChanges();
  }
}
