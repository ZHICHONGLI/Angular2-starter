import { Component,Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ModalDirective} from 'ng2-bootstrap';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css'],
  exportAs: 'Addnew'
})
export class AddnewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 @ViewChild('lgModal') lgModal; 

  show(){
    this.lgModal.show(); 
  }


}
