import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  codigo:number = 0;
  descripcion:string = "";
  coste:number = 0;
  pvp:number = 0;
  stockIdeal:number = 0;
  correcto:boolean = false;

  verificar():void{
    if(this.coste > 0 && this.pvp > 0 && this.stockIdeal> 0){
      this.correcto=true;
    }else{
      this.correcto=false;
    }
  }


}
