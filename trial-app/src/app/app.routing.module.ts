import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';

const routes: Routes =[
    {
        path: '',
        component: FrontPageComponent
    },{
        path: 'client',
        component: ClientPageComponent
    },{
        path: 'manager',
        component: ManagerPageComponent
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