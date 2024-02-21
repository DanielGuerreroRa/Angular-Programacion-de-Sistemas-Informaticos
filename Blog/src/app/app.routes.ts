import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AltaArticulosComponent } from './alta-articulos/alta-articulos.component';

export const routes: Routes = [
    {"path": "inicio", "component":InicioComponent},
    {"path": "detalle/:id", "component":DetalleComponent},
    {"path": "", redirectTo: "/inicio", pathMatch:"full"},
    {"path": "alta_articulo", "component":AltaArticulosComponent}
];