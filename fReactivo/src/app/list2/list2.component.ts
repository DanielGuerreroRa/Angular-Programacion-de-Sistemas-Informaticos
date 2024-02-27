import { Component } from '@angular/core';
import { Alumno } from '../_modelo/alumno';
import { AlumnosService } from '../_servicio/alumnos.service';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list2',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './list2.component.html',
  styleUrl: './list2.component.css'
})
export class List2Component {
  alumnos:Alumno[]=[];
  constructor(private alumnosService: AlumnosService,
    private route: ActivatedRoute,
    private router: Router){
      this.mostrarAlumnos();
      this.alumnos = alumnosService.alumnos;
    }
    mostrarAlumnos(){
      this.alumnosService.mostrarAlumnos().subscribe(
        data => this.alumnos = data,

      )
}
}