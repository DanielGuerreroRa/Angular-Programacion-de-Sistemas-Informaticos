import { Router, Routes } from '@angular/router';
import { ArmaPCComponent } from './arma-pc/arma-pc.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { EmpleadoDinamicoComponent } from './empleado-dinamico/empleado-dinamico.component';

export const routes: Routes = [
    {path: 'arma-pc', component:ArmaPCComponent},
    {path: 'vuelos', component:VuelosComponent},
    {path: 'empelado-dinamico', component:EmpleadoDinamicoComponent}
];
