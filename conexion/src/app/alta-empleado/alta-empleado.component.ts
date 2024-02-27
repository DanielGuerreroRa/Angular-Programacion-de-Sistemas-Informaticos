import { Component } from '@angular/core';
import { EmpleadoService } from '../_servicio/empleado.service';
import { Empleado } from '../_modelo/empleado';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-alta-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-empleado.component.html',
  styleUrl: './alta-empleado.component.css'
})
export class AltaEmpleadoComponent {
  e1:Empleado={
    "idEmpleado": 0,
    "nombreEmpleado": "",
    "dni": "",
    "sueldo": 0
  };

constructor(private servicio: EmpleadoService,
  private route: ActivatedRoute,
  private router: Router){}

altaEmpleado(){
  
  this.servicio.alta(this.e1).subscribe(()=>console.log("se ha dado de alta"));
  this.router.navigate(['']);
}
}