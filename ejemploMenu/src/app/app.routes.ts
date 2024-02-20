import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {"path": "inicio", component:InicioComponent},
    {"path": "quienesSomos", component:QuienesSomosComponent},
    {"path": "dondeEstamos", component:DondeEstamosComponent},
    {"path": "contacto", component:ContactoComponent}
];
