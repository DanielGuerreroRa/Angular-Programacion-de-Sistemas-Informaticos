import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
@Input() id: number = 0;

productos=[
  {"productoId": "1", "nombre": "Teclado Microsoft","descripcion": "Teclado de Microsoft con teclas especiales",
  "imagen": "https://storage.googleapis.com/catalog-pictures-carrefour-es/catalog/pictures/hd_510x_/0882224741873_1.jpg", "precio": '45€'},
  {"productoId": "2", "nombre": "Ratón Microsoft","descripcion": "Ratón de Microsoft",
  "imagen": "https://m.media-amazon.com/images/I/51JU1TqkzlS.jpg", "precio": '23€'},
  {"productoId": "3", "nombre": "USB 3.0","descripcion": "USB 3.0 de 32 GB",
  "imagen": "https://www.cellularline.com/medias/webPResize700x700-webPConversionMediaFormat-USBCADAPTERTOUSBK-01-MAIN-HR.webp?context=bWFzdGVyfHJvb3R8MTI0MzQ2fGltYWdlL3dlYnB8aDQ4L2hiZC85Njk3MzE1MTkyODYyLndlYnB8ZWQyNWFiODc3ZGFhYWYyZmFkZWE2ZjI3MzkyZGJhODdmN2MzY2VkN2UwNGVlYzIzN2YyYjNjOWI4YmQ0MDEwYg", "precio": '12€'}
 ]




ngOnInit(): void {
  console.log('id: ' + this.id);
}
}


