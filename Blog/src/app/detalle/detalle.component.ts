import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticuloServicioService } from '../articulo-servicio.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  @Input() id:number = 0;
  articulo:any;

  ngOnInit(): void {
    console.log("id recibido-->"+this.id);
    this.articulo = this.articuloS.obtenerArticulo(this.id-1);
  }

  constructor(private articuloS:ArticuloServicioService){   
  }




}