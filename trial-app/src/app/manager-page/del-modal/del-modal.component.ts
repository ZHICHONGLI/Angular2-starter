import { Component, OnInit, Input,Inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.css']
})
export class DelModalComponent implements OnInit {
@Input() currentPrd;

   
  constructor(@Inject('modalService') private mdService,
              public activeModal: NgbActiveModal
              ) { }

  ngOnInit() {
  }
  delPrd():void{
    console.log(this.currentPrd);
    this.mdService.deleteModal(this.currentPrd);
    this.activeModal.close('deleted');
  }
}
