import { Component, OnInit, Output, Input, EventEmitter, ElementRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue: string = "";
  @Input() placeholder: string = "do what you want";
  @Input() delay: number = 300;

  //delete inputValue and Output this to parent component
  @Output() textChanges = new EventEmitter<string>();
  //delete the enter keyup event and output this to p c
  @Output() onEnterUp = new EventEmitter<boolean>();

  constructor(private ElementRef: ElementRef) {
    const event$ = Observable.fromEvent(ElementRef.nativeElement, 'keyup')
    .map(()=> this.inputValue)
    .debounceTime(this.delay)
    .distinctUntilChanged();
    event$.subscribe(input => this.textChanges.emit(input));
   }

  ngOnInit() {
  }
  enterUp(){
    this.onEnterUp.emit(true);
    this.inputValue = '';
  }

}
