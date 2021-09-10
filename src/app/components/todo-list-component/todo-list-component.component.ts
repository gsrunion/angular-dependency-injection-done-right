import { Component } from '@angular/core';
import { Todo } from 'src/app/api/model/Todo';
import { ITodoListService } from 'src/app/api/service/ITodoService';
import { TodoListServiceImpl } from 'src/app/services/TodoListServiceImpl';

@Component({
  selector: 'app-todo-list',
  template: `
    <div *ngFor="let todo of todos">
      <h3>title:{{ todo.title }}</h3>
      <p>description:{{ todo.description }}</p>
    </div>
  `,
  providers: []
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private todoListService: ITodoListService) { }

  ngOnInit() {
    this.todos = this.todoListService.getTodos();
  }
}