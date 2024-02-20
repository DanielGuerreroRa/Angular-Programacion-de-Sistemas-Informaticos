import { Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { InmuebleComponent } from './inmueble/inmueble.component';

export const routes: Routes = [ {"path": "inmueble", "component": InmuebleComponent},
{"path": "detalle", "component": DetalleComponent}];
