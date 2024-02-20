import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  productos=[
   {"productoId": "1", "nombre": "Teclado Microsoft","descripcion": "Teclado de Microsoft con teclas especiales",
   "imagen": "https://storage.googleapis.com/catalog-pictures-carrefour-es/catalog/pictures/hd_510x_/0882224741873_1.jpg", "precio": 45},
   {"productoId": "2", "nombre": "Ratón Microsoft","descripcion": "Ratón de Microsoft",
   "imagen": "https://m.media-amazon.com/images/I/51JU1TqkzlS.jpg", "precio": 45},
   {"productoId": "3", "nombre": "USB 3.0","descripcion": "USB 3.0 de 32 GB",
   "imagen": "https://www.cellularline.com/medias/webPResize700x700-webPConversionMediaFormat-USBCADAPTERTOUSBK-01-MAIN-HR.webp?context=bWFzdGVyfHJvb3R8MTI0MzQ2fGltYWdlL3dlYnB8aDQ4L2hiZC85Njk3MzE1MTkyODYyLndlYnB8ZWQyNWFiODc3ZGFhYWYyZmFkZWE2ZjI3MzkyZGJhODdmN2MzY2VkN2UwNGVlYzIzN2YyYjNjOWI4YmQ0MDEwYg", "precio": 45}
  ]

}
