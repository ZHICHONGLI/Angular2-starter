import { NgModule, ViewChild, ViewContainerRef, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //for 2way data binding
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective,ModalModule } from 'ng2-bootstrap';

import { ManagerPageComponent } from './manager-page.component';
import { AddnewComponent } from './addnew/addnew.component';
import { ManagerSearch } from './managersearch';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, NgbModule, ModalModule.forRoot() ],
    declarations: [ 
        ManagerPageComponent,
        AddnewComponent,
        ManagerSearch
     ],
     bootstrap: [AddnewComponent]

})
export class ManagerPageModule {
}

