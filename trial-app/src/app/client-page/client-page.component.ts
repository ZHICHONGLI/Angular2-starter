import { Component, OnInit } from '@angular/core';
import { data } from '../data';
@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  constructor() { 
  }
  product:any = data.prototype.products;//TODO
  ngOnInit() {
    console.log(this.product );
  }

}
