import { Component,Inject,Input, OnInit, ViewChild, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//import { ManagerPageComponent } from '../manager-page.component';
import { productModel } from "../product.model";

@Component({
  selector: 'addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css'],
  //providers: [ManagerPageComponent]
})
export class AddnewComponent implements OnInit {
 public newPrd = new productModel;
  constructor(@Inject('modalService')private mdService,
              public activeModal: NgbActiveModal 
  ) {
    
  }
 public statusopts  = [{name: "Active",value:true},{name:"Inactive", value:false}];
  ngOnInit() {
   // console.log("prds loaded"+this.prdss)
  }
  
  addNew(){
   // console.log(this.newPrd);
    this.mdService.addConfirm(this.newPrd);
    this.activeModal.close();
  }

}
