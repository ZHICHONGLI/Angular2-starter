import { Component,Inject, OnInit, ViewChild, ViewContainerRef, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalDirective,ModalModule } from 'ng2-bootstrap';
import { AddnewComponent } from './addnew/addnew.component';
import { products } from '../data';
//import { ModalserviceService } from '../modalservice.service';


@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})

export class ManagerPageComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal,
//   private ViewContainerRef: ViewContainerRef, 
   @Inject('modalService') private mdService
   ) {
//   this.ViewContainerRef = ViewContainerRef;
   }
   public prds:Array<any> = this.mdService.Prods;
   _subscription = this.mdService.ProdsChange.subscribe((value)=>{
     this.prds = value;
   })
   search: string = "";
  ngOnInit() {
  }
 
  open(content){
    this.modalService.open(content).result.then((result)=>{
      this.closeResult = `Closed with: ${result}`;
    },(reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  activeItem = false;
  updateStock(prd:any){
    //prd.Stock = ; http.put
    this.activeItem = false;
  };
  stockEdit(prd:any){
    this.activeItem = prd;
 //   this.stockShow = !this.stockShow; 

  };
  stockHide(){
   // console.log("stockHide");
    this.activeItem = false;
   // console.log(this.activeItem);
  };
 // stockShow:boolean = true;
 statusEdit(prd:any){
  prd.Status = !prd.Status;
  console.log(prd.Status);
 }
 statusShow(status:boolean):string{
  if (status == true){
    return "Active";
  }else 
  return "Deactive";
 }
 statusCls(status:boolean){
   if (status == true) {
            return "btn btn-success";
        } else {
            return "btn btn-outline-secondary"
        };
 }
 editPrd(prd:any){

 }
/* 
 delPrd(prd:any){
    let idx = this.prds.indexOf(prd);
    if(idx==-1){
      return
    };

    this.prds = [
      ...this.prds.slice(0,idx),
      ...this.prds.slice(idx+1,this.prds.length)
    ];
    //this.prds.splice(this.prds.indexOf(prd),1);
    console.log(this.prds);
    //this.ref.detectChanges();
 };
*/
delPrd(prd:any){
  this.mdService.deleteModal(prd);
}


 addPrd(){
   this.mdService.addModal();
 }
  
}


