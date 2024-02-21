import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Articulo } from '../_modelo/articulo';
import { ArticuloServicioService } from '../_servicio/articulo-servicio.service';

@Component({
  selector: 'app-alta-articulos',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './alta-articulos.component.html',
  styleUrl: './alta-articulos.component.css'
})
export class AltaArticulosComponent {

   alta():void {
    this.articuloServicio.altaArticulo(this.articulo);
    console.log(this.articuloServicio.obtenerTodosArticulos());
}
   constructor(private articuloServicio:ArticuloServicioService){}
   articulo:Articulo= new Articulo();
}
