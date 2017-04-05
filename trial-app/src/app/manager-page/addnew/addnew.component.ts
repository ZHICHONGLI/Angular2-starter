import { Component,Inject,Input, OnInit, ViewChild, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap';
import { ManagerPageComponent } from '../manager-page.component';

@Component({
  selector: 'addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css'],
  providers: [ManagerPageComponent]
})
export class AddnewComponent implements OnInit {
newprd : any;
prdss: any;
  constructor(@Inject(forwardRef(()=> ManagerPageComponent)) mngComp: ManagerPageComponent) { 
   this.prdss = mngComp.prds;
  }
  @ViewChild('theBody',{read: ViewContainerRef}) theBody;

  ngOnInit() {
   // console.log("prds loaded"+this.prdss)
  }
  

}
