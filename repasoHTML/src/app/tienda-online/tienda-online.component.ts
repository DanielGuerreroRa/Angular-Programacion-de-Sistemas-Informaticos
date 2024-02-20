import { Component } from '@angular/core';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { PiePaginaComponent } from '../pie-pagina/pie-pagina.component';

@Component({
  selector: 'app-tienda-online',
  standalone: true,
  imports: [DetalleProductoComponent,PiePaginaComponent],
  templateUrl: './tienda-online.component.html',
  styleUrl: './tienda-online.component.css'
})
export class TiendaOnlineComponent {

}
