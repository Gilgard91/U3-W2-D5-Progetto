import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private todoService: TodosService) {}

  todosArr: Todo[] = [];
  inputTodo: string = '';
  pageLoaded: boolean = false;
  async ngOnInit(): Promise<void> {
    this.todosArr = await this.todoService.getTodos();
    this.pageLoaded = true;
  }
  async addTodo(): Promise<void> {
    if (this.inputTodo.length == 0) {
      throw new Error('input vuoto');
    }
    let todo: Todo = {
      id:
        this.todosArr === undefined || this.todosArr.length === 0
          ? 1
          : this.todosArr[this.todosArr.length - 1].id + 1,
      title: this.inputTodo,
      completed: false,
    };
    this.todosArr = await this.todoService.addTodos(todo);
    console.log(this.todosArr);
  }

  markCompleted(id: number) {
    this.todoService.markCompleted(id);
  }
}
