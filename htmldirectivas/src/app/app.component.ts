import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmpleadoDinamicoComponent } from './empleado-dinamico/empleado-dinamico.component';
import { ArmaPCComponent } from './arma-pc/arma-pc.component';
import { VuelosComponent } from './vuelos/vuelos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,EmpleadoDinamicoComponent,ArmaPCComponent, VuelosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'htmldirectivas';
}
