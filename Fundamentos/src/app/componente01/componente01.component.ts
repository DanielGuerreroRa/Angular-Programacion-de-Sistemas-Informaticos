import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {
  nombre:string='';
  dni:string='';
  edad:number=0;
  cursoSeleccionado:string='';
  nivelEsutdio:string='';

}
