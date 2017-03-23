import { Component, OnInit, Inject } from '@angular/core';

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
              minlength="5" name="username" 
              placeholder="please input username">
          {{usernameRef.errors | json}}
          <div *ngIf="usernameRef.errors?.required">value required</div>
          <div *ngIf="usernameRef.errors?.minlength">at least 5 chars</div>
          <br>
          <input 
              class="ng-pristine ng-invalid ng-touched"
              [(ngModel)]="password" 
              typr="password" #passwordRef="ngModel" 
              required name="password" 
              placeholder="please input password">
          {{passwordRef.errors | json}}
          <div *ngIf="passwordRef.errors?.required">input required</div>
          <button (click)="onClick()">Login by onClick</button>

          <button type="submit">Login by submit</button>
        </fieldset>
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
  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }

  onClick(username, password){
   console.log('auth result is: '+ this.service.loginWithCredentials(this.username, this.password));
 }

 onSubmit(value){
    console.log('auth result: '+ this.service.loginWithCredentials(value.login.username, value.login.password));
 }
}
