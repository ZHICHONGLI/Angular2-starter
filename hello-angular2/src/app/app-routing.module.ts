import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login2waydbComponent } from './login-2waydb/login-2waydb.component';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
    {
    path: 'todo',
    redirectTo: 'todo/ALL',
    canLoad: [AuthGuardService]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}