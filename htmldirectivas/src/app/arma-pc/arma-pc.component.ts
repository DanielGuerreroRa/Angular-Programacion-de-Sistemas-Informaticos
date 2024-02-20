import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arma-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './arma-pc.component.html',
  styleUrl: './arma-pc.component.css'
})
export class ArmaPCComponent {
tRAM:string='';
tamanosRAM:string[]=[" RAM32", " RAM16", " RAM8"]

procesador:string='Corei9N8'
procesadores:string[]=[" Corei9N8", " Corei9N8gen"," Corei7N8"]
tarjetaGrafica:boolean=false;
discoDuro:string='';
discosDuros:string[]=[" HDD", " SSD"];

fuenteAlimentacion:string='600'
fuentesAlimentacion:string[]=["600","700", "800", "900", "1000","1200"];

mostrarInfor():void {
  let mensaje:string=
  `Tamaño de la RAM: ${this.tRAM}
  Procesador: ${this.procesador}
  Tarjeta Gráfica ${this.tarjetaGrafica}
  Disco Duro: ${this.discoDuro}
  Fuente de Alimentacion: ${this.fuentesAlimentacion}`
  alert(mensaje);

}
}
