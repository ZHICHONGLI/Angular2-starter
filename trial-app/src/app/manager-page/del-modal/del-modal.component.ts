import { Component, OnInit, Input,Inject } from '@angular/core';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.css']
})
export class DelModalComponent implements OnInit {
@Input() currentPrd;

   
  constructor(@Inject('modalService') private mdService) { }

  ngOnInit() {
  }
  delPrd():void{
    console.log(this.currentPrd);
    this.mdService.deleteModal(this.currentPrd);
  }
}
