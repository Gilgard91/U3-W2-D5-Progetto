import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss'],
})
export class CompletatiComponent implements OnInit {
  constructor(private todoService: TodosService) {}
  todosArr: Todo[] = [];
  pageLoaded: boolean = false;
  async ngOnInit(): Promise<void> {
    this.todosArr = await this.todoService.getTodos();
    this.pageLoaded = true;
  }
}
