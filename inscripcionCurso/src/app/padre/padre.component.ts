import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent,FormsModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  inscripcion:string[]=[];

  agregarAsignatura(elemento:string){
    this.inscripcion.push(elemento);
  }

}
