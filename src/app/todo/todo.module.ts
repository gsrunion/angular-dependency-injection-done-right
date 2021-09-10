import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodoListService } from '../api/service/ITodoService';
import { TodoListServiceImpl } from './TodoListServiceImpl';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{ provide: ITodoListService, useClass: TodoListServiceImpl }]
})
export class TodoModule { }
