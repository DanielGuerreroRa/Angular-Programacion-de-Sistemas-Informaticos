import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../_servicio/empleado.service';
import { Empleado } from '../_modelo/empleado';
import { AltaEmpleadoComponent } from '../alta-empleado/alta-empleado.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [AltaEmpleadoComponent, RouterModule],
  templateUrl: './lista-empleado.component.html',
  styleUrl: './lista-empleado.component.css'
})
export class ListaEmpleadoComponent implements OnInit{
  constructor(private servicio: EmpleadoService) { }
  empleados: Empleado[] = [];

  ngOnInit(): void {
    this.servicio.listar()
    .subscribe(datos=> {
      this.empleados = datos;
    })
  }

}