import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular/router';
//import { routing } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { LComponent } from './l/l.component';
//import {AuthService} from './core/auth.service';
//import { Login2waydbComponent } from './login-2waydb/login-2waydb.component';
//import { TodoComponent } from './todo/todo.component';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; //remove this by using json-server
//import { InMemHeroService } from './todo/todo-data';
//import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
//import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoModule } from './todo/todo.module';
import { MdlModule  } from 'angular2-mdl';
import { LoginModule } from './login-2waydb/login.module';

@NgModule({
  declarations: [
    AppComponent,
    LComponent,
  //  Login2waydbComponent,
   // TodoComponent,
   // TodoFooterComponent,
   // TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
  //  FormsModule,
    HttpModule,
    CoreModule,
  //  InMemoryWebApiModule.forRoot(InMemHeroService), //removed due to json-server has been used as data server
   // routing, // import from ts file from './app.routes.ts'
   AppRoutingModule,
    TodoModule,
    MdlModule,
    LoginModule
  ],
 // providers: [
 //   {provide: 'auth', useClass: AuthService}
 // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
