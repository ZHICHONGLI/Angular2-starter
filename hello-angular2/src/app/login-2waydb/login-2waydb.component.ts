import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Auth } from '../domain/entities';

@Component({
  selector: 'app-login-2waydb',
  template: `
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input 
              class="ng-pristine ng-invalid ng-touched"
              ng-reflect-name="username"
              [(ngModel)]="username" 
              type="text" #usernameRef="ngModel" 
              required 
              minlength="3" name="username" 
              placeholder="please input username">
          {{usernameRef.errors | json}}
          <div *ngIf="usernameRef.errors?.required">value required</div>
          <div *ngIf="usernameRef.errors?.minlength">at least 3 chars</div>
          <div *ngIf="auth?.hasError">{{auth.errMsg}}</div>
          <br>
          <input 
              class="ng-pristine ng-invalid ng-touched"
              [(ngModel)]="password" 
              typr="password" #passwordRef="ngModel" 
              required name="password" 
              placeholder="please input password">
          {{passwordRef.errors | json}}
          <div *ngIf="passwordRef.errors?.required">input required</div>
<!--          <button (click)="onClick()">Login by onClick</button>
-->
          
        </fieldset>
        <button type="submit">Login by submit</button>
      </form>
    </div>
  `,
   styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }
  `]
})
export class Login2waydbComponent implements OnInit {
  username :string;
  password :string;
  auth: Auth;
  constructor(@Inject('auth') private service, private router: Router) { }

  ngOnInit() {
  }

 // onClick(username, password){
//   console.log('auth result is: '+ this.service.loginWithCredentials(this.username, this.password));
 //}

 onSubmit(formValue){
//console.log("submit formValue for auth");
    this.service
      .loginWithCredentials(formValue.login.username, formValue.login.password)
      .then(auth => {
        let redirectUrl = (auth.redirectUrl === null)? '/': auth.redirectUrl;
        
        if(!auth.hasError){
          redirectUrl = '/todo';
          console.log(redirectUrl);
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
        } else {
          this.auth = Object.assign({}, auth);
        }
      }); 
    }
}
