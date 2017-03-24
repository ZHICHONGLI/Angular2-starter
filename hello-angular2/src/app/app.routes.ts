// create this file for routing

import { Routes, RouterModule } from '@angular/router';
import { Login2waydbComponent } from './login-2waydb/login-2waydb.component';
import { TodoComponent } from './todo/todo.component'

export const routes: Routes = [
    {
        path:'',
        redirectTo:'todo',
        pathMatch:'full'
    },{
        path:'todo',
        component: TodoComponent
    },
    {
        path:'login',
        component: Login2waydbComponent
    }
];

export const routing = RouterModule.forRoot(routes);