import { Component, OnInit, Inject } from '@angular/core';
//import {  AuthService } from '../core/auth.service'
@Component({
  selector: 'app-l',
  template: `
    <div>
      <input #usernameRef type="text">
      <br>
      <input #passwordRef typr="password">
      <button (click)="onClick(usernameRef.value, passwordRef.value)">Login</button>
    </div>
  `,
  styles: [],
  providers:[]
})
export class LComponent implements OnInit {

  constructor(@Inject('auth') private service ) { }

  ngOnInit() {
  }
  onClick(username, password){
   //alert("username:"+username+"\n\r"+"password"+password);
   console.log('auth result is: '+ this.service.loginWithCredentials(username,password));
 }
}
 