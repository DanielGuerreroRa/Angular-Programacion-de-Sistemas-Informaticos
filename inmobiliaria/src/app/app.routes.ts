import { Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { InmuebleComponent } from './inmueble/inmueble.component';

export const routes: Routes = [ {"path": "inmueble", "component": InmuebleComponent},
{"path":"detalle/:id", component: DetalleComponent},
{"path": "", redirectTo: "/inmueble", pathMatch: "full"},
{"path": "**", component: InmuebleComponent}
];
