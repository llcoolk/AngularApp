import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component'
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TodoDetailComponent }  from './todo-detail/todo-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: TodoDetailComponent },
  { path: 'todos', component: TodosComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}