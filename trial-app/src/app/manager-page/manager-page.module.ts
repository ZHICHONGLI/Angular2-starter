import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //for 2way data binding
import { HttpModule } from '@angular/http';


import { ManagerPageComponent } from './manager-page.component';
import { AddnewComponent } from './addnew/addnew.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ 
        ManagerPageComponent,
        AddnewComponent
     ],

})
export class ManagerPageModule { }