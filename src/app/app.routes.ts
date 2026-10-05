import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Dashbooardadmin } from './dashbooardadmin/dashbooardadmin';
import { Login } from './login/login';
import { Registro } from './register/register';
import { Navbar } from './navbar/navbar';
import path from 'path';
import { Dashboardsupervisor } from './dashboardsupervisor/dashboardsupervisor';

export const routes: Routes = [

{ path: '',
    component:Login

},

{ path: 'register',
    component: Registro
},
{ path:'dashboard',
    component:Dashboard,
    children:[
        {
        path:'supervisor',
        component:Dashboardsupervisor},
        {
        path:'admin',
        component:Dashbooardadmin
        }

    ]
}

];
