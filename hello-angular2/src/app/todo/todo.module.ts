import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//import { routing} from './todo.routes'
import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoService } from './todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
//import { MdlModule } from 'angular2-mdl';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    //routing
    TodoRoutingModule,
    //MdlModule
    SharedModule
  ],
  declarations: [
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  providers: [
    {provide: 'todoService', useClass: TodoService}
    ]
})
export class TodoModule {}