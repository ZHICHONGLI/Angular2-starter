import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { MdlModule  } from 'angular2-mdl';
import { Auth } from '../domain/entities';

@Component({
  selector: 'app-login-2waydb',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
   
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

 onSubmit(){
//console.log("submit formValue for auth");
    this.service
      .loginWithCredentials(this.username, this.password)
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
