import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LComponent } from './l/l.component';
import {AuthService} from './core/auth.service';
import { Login2waydbComponent } from './login-2waydb/login-2waydb.component';
import { TodoComponent } from './todo/todo.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService } from './todo/todo-data';

@NgModule({
  declarations: [
    AppComponent,
    LComponent,
    Login2waydbComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemHeroService),
    routing // import from ts file from './app.routes.ts'
  ],
  providers: [
    {provide: 'auth', useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
