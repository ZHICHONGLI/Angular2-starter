import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login2waydbComponent } from './login-2waydb/login-2waydb.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
    {
    path: 'login',
    component: Login2waydbComponent
  },
    {
    path: 'todo',
    redirectTo: 'todo/ALL'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}