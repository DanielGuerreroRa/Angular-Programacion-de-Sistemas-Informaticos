import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Alumno } from '../_modelo/alumno';
import { AlumnosService } from '../_servicio/alumnos.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-f-alumnos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './f-alumnos.component.html',
  styleUrl: './f-alumnos.component.css'
})
export class FAlumnosComponent implements OnInit {
  form: FormGroup;
  empt_alumno!: Alumno;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alumnosServicio: AlumnosService){
    
    this.form = new FormGroup(
      {
      id: new FormControl(0),
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      horasFormacion: new FormControl(''),
      mayorDeEdad: new FormControl(false)
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((data) =>
    {
      this.alumnosServicio.buscarAlumno(data['id']).subscribe(
        (data)=>{
          this.empt_alumno = data;
          this.form= new FormGroup({
            id: new FormControl(this.empt_alumno.id),
            nombre: new FormControl(this.empt_alumno.nombre),
            apellidos: new FormControl(this.empt_alumno.apellidos),
            horasFormacion: new FormControl(this.empt_alumno.horasFormacion),
            mayorDeEdad: new FormControl(this.empt_alumno.mayorDeEdad)
          });
        });
    });
  }
  mostrarDatos(){
    let alumno: Alumno = {
      id: this.empt_alumno.id,
      nombre: this.empt_alumno.nombre,
      apellidos: this.empt_alumno.apellidos,
      horasFormacion: this.empt_alumno.horasFormacion,
      mayorDeEdad: this.empt_alumno.mayorDeEdad
    };
    console.log(this.form.value);
  }
  addModAlumno(){
    let alumno: Alumno = {
    id:this.form.value.id,
    nombre:this.form.value.nombre,
    apellidos:this.form.value.apellidos,
    horasFormacion:this.form.value.horasFormacion,
    mayorDeEdad:this.form.value.mayorDeEdad
    };
    if(alumno.id == 0){
      this.alumnosServicio.addAlumnos(alumno);     
    }else{
      this.alumnosServicio.modificarAlumno(alumno);
    }
    this.router.navigate(['/']);
  }
}