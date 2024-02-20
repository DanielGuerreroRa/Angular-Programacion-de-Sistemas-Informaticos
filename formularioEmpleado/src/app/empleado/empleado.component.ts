import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre:string = '';
  fechaNacimiento:any = '';
  nacionalidad:string = 'Española';
  genero:string = '';
  cMas:boolean = false;
  java:boolean = false;
  js:boolean = false;
  python:boolean = false;

  mostrarInfo(){
   let mensaje:string = `Nombre: ${this.nombre}
   Fecha de nacimiento: ${this.fechaNacimiento}
   Nacionalidad: ${this.nacionalidad}
   Genero: ${this.genero}
   Lenguajes de programación: 
   `;

   if(this.cMas==true){
    mensaje += ' C++ ';
   }
   if(this.java==true){
    mensaje += ' Java ';
   }
   if(this.js==true){
    mensaje += ' JS ';
   }
   if(this.python==true){
    mensaje += ' Python ';
   }

   alert(mensaje);
  }


}
