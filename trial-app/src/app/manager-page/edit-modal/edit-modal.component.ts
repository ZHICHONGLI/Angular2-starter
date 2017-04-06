import { Component, OnInit, Inject, Input} from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  constructor(@Inject('modalService') private mdService,
              public activeModal: NgbActiveModal
  ) { }
  @Input() curPrd;
  ngOnInit() {
  }

  editTo(){
    //console.log(this.curPrd);
    this.mdService.editComfirm(this.curPrd);
    this.activeModal.close();
  }

}
