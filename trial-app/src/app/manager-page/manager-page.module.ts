import { NgModule, ViewChild, ViewContainerRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //for 2way data binding
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective,ModalModule } from 'ng2-bootstrap';

import { ManagerPageComponent } from './manager-page.component';
import { AddnewComponent } from './addnew/addnew.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, NgbModule, ModalModule.forRoot() ],
    declarations: [ 
        ManagerPageComponent,
        AddnewComponent
     ],
     bootstrap: [AddnewComponent]

})
export class ManagerPageModule {
}