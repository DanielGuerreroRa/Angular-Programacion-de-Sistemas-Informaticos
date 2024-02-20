import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-factura',
  standalone: true,
  imports: [],
  templateUrl: './detalle-factura.component.html',
  styleUrl: './detalle-factura.component.css'
})
export class DetalleFacturaComponent {
  @Input() productoHijo:string='';
  productos:string[]=[];

  agregar():void{
    this.productos.push(this.productoHijo)

}
}