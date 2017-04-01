import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
//import { MaterialModule } from '@angular/material';
//import { AlertModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
//import { ManagerPageComponent } from './manager-page/manager-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ModalModule } from 'ng2-bootstrap';
//import { AddnewComponent } from './manager-page/addnew/addnew.component';
import { ManagerPageModule } from './manager-page/manager-page.module';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
  //  ManagerPageComponent,
    ClientPageComponent,
  //  AddnewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //MaterialModule,
   // AlertModule.forRoot()
   AppRoutingModule,
   ModalModule,
   ManagerPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
