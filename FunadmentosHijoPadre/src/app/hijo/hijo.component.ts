import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Output() llamadaPadre = new EventEmitter<string>();
  productos:string[]=["leche","pan","cafe","azucar","huevos","platanos"];

  pasarAPadre(elementoP:string){
    this.llamadaPadre.emit(elementoP);
  }


}
