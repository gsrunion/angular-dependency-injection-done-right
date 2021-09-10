import { Todo } from "../api/model/Todo";
import { ITodoListService } from "../api/service/ITodoService";

export class _TodoListServiceImpl implements ITodoListService {
  getTodos(): Todo[] {
    return [
      {
        title: 'stuff',
        description: 'other stuff',
        done: false
      }
    ]
  }
}
