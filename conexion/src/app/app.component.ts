import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaEmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conexion';
}