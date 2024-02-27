import { Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { AltaEmpleadoComponent } from './alta-empleado/alta-empleado.component';

export const routes: Routes = [
    {"path":'', component: ListaEmpleadosComponent,children:
[{"path":'', component: AltaEmpleadoComponent}]},
];
