import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login2waydbComponent } from './login-2waydb.component';

const routes: Routes = [
  {
    path: 'login',
    component: Login2waydbComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule { }