import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { ArrayEjemploComponent } from './array-ejemplo/array-ejemplo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent,ArrayEjemploComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inscripcionCurso';
}
