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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AddnewComponent } from './manager-page/addnew/addnew.component';
import { ManagerPageModule } from './manager-page/manager-page.module';
import { ModalDirective, ModalModule } from 'ng2-bootstrap';
import { searchFilter } from './search.filter';
//import { ManagerPageModule } from './manager-page/manager-page.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ModalserviceService } from './modalservice.service';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
   // ManagerPageComponent,
    ClientPageComponent,
   searchFilter
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
   ManagerPageModule,
   NgbModule.forRoot()
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: 'modalService', useClass: ModalserviceService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
