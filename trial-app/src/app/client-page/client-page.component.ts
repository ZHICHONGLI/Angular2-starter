import { Component, OnInit, Pipe, PipeTransform,Inject } from '@angular/core';
import {products} from '../data';
@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})



export class ClientPageComponent implements OnInit {

  constructor(@Inject('modalService') private mdService) {
   
  }
  search : any="";

  product:any = this.mdService.Prods;
  _subscription = this.mdService.ProdsChange.subscribe((value)=>{
     this.product = value;
   })

  ngOnInit() {
    console.log(products );
  }
 statusShow(status:boolean){
  if (status == true){
    return "In Stock";
  }else 
  return "Out of Stock";
 }
 statusCls(status:boolean){
   if (status == true) {
            return "btn btn-success";
        } else {
            return "btn btn-outline-secondary"
        };
 }
 stockShow(status:boolean, stock:number){
  if (status == true){
    let stockString: string = stock.toFixed();
    return stockString;
  }else{
    return "/"
  }
 }
}
/*
@Pipe({
    name: 'searchFilter'
})
export class searchFilter implements PipeTransform{
    transform(items:any[], args: any):any{
      args = args.toUpperCase();
    return items.filter(prd => prd.Name.toUpperCase().indexOf(args) !== -1 ||prd.Description.toUpperCase().indexOf(args) !== -1 );
  }
}

*/