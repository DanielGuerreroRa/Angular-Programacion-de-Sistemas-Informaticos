import { Component } from '@angular/core';

@Component({
  selector: 'app-administrador',
  standalone: true,
  imports: [],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {
  usuarios = [
    {id:1,nombre: 'Laura Flores'},
    {id:2,nombre: 'Daniel Guerrero'},
    {id:3,nombre: 'Luis Garcia'},
  ]
}
