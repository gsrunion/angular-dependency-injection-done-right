import { Injectable } from "@angular/core";
import { Todo } from "../model/Todo";

@Injectable()
export abstract class ITodoListService {
  abstract getTodos(): Todo[];
}