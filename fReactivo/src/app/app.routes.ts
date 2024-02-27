import { Routes } from '@angular/router';
import { List2Component } from './list2/list2.component';
import { FAlumnosComponent } from './f-alumnos/f-alumnos.component';

export const routes: Routes = [
    {
        "path": '',component: List2Component, children: [
            {"path": 'alta', component: FAlumnosComponent},
            {"path":'modificar/:id', component: FAlumnosComponent}
        ]
    }
];