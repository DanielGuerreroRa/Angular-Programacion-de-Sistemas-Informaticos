import { Component, Input, OnInit } from '@angular/core';
import { InmuebleComponent } from '../inmueble/inmueble.component';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/inmueble';


@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [InmuebleComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  @Input() id: string = '';

  constructor(private inmuebleServicio: InmuebleService){}
 inmueble:Inmueble= new Inmueble();
  ngOnInit(): void {
   
    console.log('id recibido: ' + this.id);
  }
  
}

   