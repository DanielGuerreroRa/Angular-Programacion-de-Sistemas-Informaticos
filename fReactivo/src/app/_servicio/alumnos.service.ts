import { Injectable } from '@angular/core';
import { Alumno } from '../_modelo/alumno';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  alumnos: Alumno[] = [
    {id: 1, nombre: 'Juan', apellidos: 'García Pérez', horasFormacion: 20, mayorDeEdad: true},
    {id: 2, nombre: 'María', apellidos: 'González López', horasFormacion: 30, mayorDeEdad: false},
    {id: 3, nombre: 'Ana', apellidos: 'Gómez Sánchez', horasFormacion: 40, mayorDeEdad: true},
  ]
  constructor() { }
  mostrarAlumnos(): Observable<Alumno[]> {
    return of (this.alumnos)
  }
  buscarAlumno(id:number): Observable<Alumno> {
    let alumnoEncontrado = this.alumnos.find(alumno => alumno.id == id);
    return alumnoEncontrado == undefined?
    of({id: 0, nombre: '', apellidos: '', horasFormacion: 0}):
    of(alumnoEncontrado);
}
addAlumnos(alumno: Alumno){
  alumno.id= this.alumnos[this.alumnos.length-1].id + 1;
  this.alumnos.push(alumno);
}
modificarAlumno(alumno: Alumno) {
  let alumnoEncontrado = this.alumnos.find(alumno2 => alumno2.id == alumno.id); // Buscamos el alumno por su id
  if(alumnoEncontrado){
    alumnoEncontrado.nombre=alumno.nombre;
    alumnoEncontrado.apellidos=alumno.apellidos;
    alumnoEncontrado.horasFormacion=alumno.horasFormacion;
    alumnoEncontrado.mayorDeEdad=alumno.mayorDeEdad;
  }
}   }