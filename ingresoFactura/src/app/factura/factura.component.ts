import { Component } from '@angular/core';
import { DetalleFacturaComponent } from '../detalle-factura/detalle-factura.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [DetalleFacturaComponent, FormsModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent {
  codigoCliente:number = 0;
  formaPago:string = '';
  direccioEntrega:string = '';
  producto:string = ''; 

}
