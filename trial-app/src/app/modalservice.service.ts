import { Injectable, Inject } from '@angular/core';
import { products } from './data'
import { Subject } from 'rxjs/subject';


@Injectable()
export class ModalserviceService {
public Prods = products;
ProdsChange: Subject<any> = new Subject <any>();
  constructor( ) {
   // console.log(this.Prods);
   }
  


  deleteModal(prd) {
    console.log("show delete modal");
        let idx = this.Prods.indexOf(prd);
    if(idx==-1){
      return
    };

    this.Prods = [
      ...this.Prods.slice(0,idx),
      ...this.Prods.slice(idx+1,this.Prods.length)
    ];
    console.log(this.Prods);
    this.ProdsChange.next(this.Prods);
  }

 
  editComfirm(curPrd){
    let idx = this.Prods.indexOf(curPrd);
    this.Prods[idx]=curPrd;
    this.ProdsChange.next(this.Prods);
  }

  addConfirm(newPrd){
    if(newPrd.Status == "true"){
      newPrd.Status = true;
    }else{
      newPrd.Status = false;
    }
    this.Prods = [
      ...this.Prods,
      newPrd
    ];
    this.ProdsChange.next(this.Prods);
  }

}
