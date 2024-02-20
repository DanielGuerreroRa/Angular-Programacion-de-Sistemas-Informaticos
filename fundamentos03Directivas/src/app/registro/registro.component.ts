import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  correoElectronico: string = '';
  password: string = '';
  repetirPassword: string = '';
  correcto:boolean=false;
  verificar(): void{
    if(this.password==this.repetirPassword){
      this.correcto=true;
    }else{
      this.correcto=false
    }
  }

}
