import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoArr: Todo[] = [];

  constructor() {}

  async getTodos(): Promise<Todo[]> {
    await new Promise((x) => setTimeout(x, 2000));
    return this.todoArr;
  }

  async addTodos(todo: Todo): Promise<Todo[]> {
    console.log(this.todoArr);

    await new Promise((x) => setTimeout(x, 2000));
    this.todoArr.push(todo);
    return this.todoArr;
  }

  async removeTodos(todo: Todo): Promise<Todo[]> {
    await new Promise((x) => setTimeout(x, 2000));
    this.todoArr = this.todoArr.filter((y) => y != todo);

    return this.todoArr;
  }

  async markCompleted(id: number): Promise<Todo[]> {
    let index = this.todoArr.findIndex((x) => x.id == id);

    await new Promise((x) => setTimeout(x, 2000));
    this.todoArr[index].completed = true;
    return this.todoArr;
  }
}
