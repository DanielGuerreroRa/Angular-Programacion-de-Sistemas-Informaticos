import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  @Input() id: number = 0;
  ngOnInit(): void {
    console.log("Id recibido-->"+this.id);
    
  }
  

}