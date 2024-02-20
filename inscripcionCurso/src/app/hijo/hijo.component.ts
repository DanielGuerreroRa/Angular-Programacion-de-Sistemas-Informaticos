import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { PadreComponent } from '../padre/padre.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
 
  asignatura:string[]=["Java","Oracle","Phyton","BBDD","TypeScrip","JavaScrip"];
  asignaturaSeleccionada:string=this.asignatura[0];
  @Output() eventoHaciaPadre = new EventEmitter();
  pasarPadre(){
    this.eventoHaciaPadre.emit(this.asignaturaSeleccionada)
  }

}
