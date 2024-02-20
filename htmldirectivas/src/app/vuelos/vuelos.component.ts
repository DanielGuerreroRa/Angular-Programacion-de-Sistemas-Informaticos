import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vuelos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vuelos.component.html',
  styleUrl: './vuelos.component.css'
})
export class VuelosComponent {
origen:string='';
ciudades:string[]=[" Madrid", " Barcelona", " Zaragoza", " Sevilla"]
destino:string='';
fechaIda:any = '';
fechaVuelta:any = '';
numeroPasajeros:number = 0;
numerosPasajeros:number[] =[1,2,3,4,5,6,7,8,9];

mostrarInfo(){
  let mensaje:string=
  `Origen: ${this.origen}
   Destino: ${this.destino} 
   Fecha de ida: ${this.fechaIda}
   Fecha de vuelta: ${this.fechaVuelta}
   Número de pasajeros: ${this.numerosPasajeros}`
  alert(mensaje); 
}
}
