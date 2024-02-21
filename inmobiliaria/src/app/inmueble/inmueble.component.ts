import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/inmueble';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inmueble.component.html',
  styleUrl: './inmueble.component.css'
})
export class InmuebleComponent implements OnInit{

  inmuebles:Inmueble[]= [];

  constructor(private inmuebleServicio: InmuebleService){}

  ngOnInit(): void {
    this.inmuebles=this.inmuebleServicio.obtenerTodos();
    
  }


}