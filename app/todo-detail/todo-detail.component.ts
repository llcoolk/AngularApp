import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todo }         from '../todo';
import { TodoService }  from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: [ './todo-detail.component.css' ]
})
export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private TodoService: TodoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.TodoService.getTodo(id)
      .subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.TodoService.updateTodo(this.todo)
      .subscribe(() => this.goBack());
  }
}