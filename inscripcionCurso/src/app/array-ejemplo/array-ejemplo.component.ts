import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-ejemplo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './array-ejemplo.component.html',
  styleUrl: './array-ejemplo.component.css'
})
export class ArrayEjemploComponent {
  nombres:string[] = ["Dylan","Javier","Juana","BeatrizT","Laura"]
  nombre:string="";
  agregar():void{
    this.nombres.push(this.nombre);
  }

  eliminar():void{
    this.nombre.toUpperCase();
  }

  recorrerArray():void{
    this.nombres.forEach(elemento=>console.log(elemento));
  }
}
