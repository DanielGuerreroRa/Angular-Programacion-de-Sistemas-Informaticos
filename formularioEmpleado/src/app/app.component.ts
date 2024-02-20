import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularioEmpleado';
}
