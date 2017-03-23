import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LComponent } from './l/l.component';
import {AuthService} from './core/auth.service';
import { Login2waydbComponent } from './login-2waydb/login-2waydb.component';

@NgModule({
  declarations: [
    AppComponent,
    LComponent,
    Login2waydbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: 'auth', useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
