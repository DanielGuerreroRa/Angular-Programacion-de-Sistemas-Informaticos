import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  articulos=[
    {"id": 1,
    "destino":" Venecia ",
    "descripcion":"También conocida como la “Reina del Adriático”, Venecia fue construida sobre 118 islas que emergen de una amplia laguna situada entre la tierra firme y el mar abierto. De ahí que sea conocida como la “Ciudad de los Canales”, con góndolas y vaporettos como únicos medios de transporte.",
    "imagen":"https://images.unsplash.com/photo-1453747063559-36695c8771bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZlbmVjaWF8ZW58MHx8MHx8fDA%3D"
  },
  {"id": 2,
    "destino":" Roma ",
    "descripcion":"Roma es una ciudad italiana, capital de la región del Lacio y de Italia. Con una población de 2 857 321 habitantes,​ es el municipio más poblado de Italia y la tercera ciudad más poblada de la Unión Europea. ​ Por antonomasia, se le conoce desde la Antigüedad como la Urbe.",
    "imagen":"https://wallpapercave.com/wp/wp9166770.jpg"
  },
  {"id": 3,
    "destino":" Oporto ",
    "descripcion":"Oporto es la segunda ciudad más grande y poblada de Portugal después de Lisboa, con cerca de 250.000 habitantes en su centro urbano y un millón y medio en su área metropolitana. La pequeña ciudad de Oporto se encuentra situada en la ribera izquierda de la desembocadura del río Duero al Norte de Portugal.",
    "imagen":"https://c4.wallpaperflare.com/wallpaper/526/773/141/bridge-river-boats-portugal-wallpaper-preview.jpg"
  },
  {"id": 4,
    "destino":" Sao Miguel ",
    "descripcion":"La isla de San Miguel​ (en portugués, Ilha de São Miguel) es la mayor isla del archipiélago de las Azores y también la más poblada. En ella se encuentra la capital de la región (Ponta Delgada). Con una superficie de 746,82 km², mide 65 km de este a oeste y su anchura oscila entre 8 y 16 km.",
    "imagen":"https://c4.wallpaperflare.com/wallpaper/180/268/46/nature-landscape-lake-portugal-wallpaper-preview.jpg"
  },
  {"id": 5,
    "destino":" Vigo ",
    "descripcion":"Vigo es única dentro de Galicia: mezcla perfecta de enclave histórico tradicional y ciudad activa, de playa y de montaña, innovadora e industrial.",
    "imagen":"https://t3.ftcdn.net/jpg/02/76/98/70/360_F_276987029_VrKdYuVLXXjdqRH6DcXVWD6wgw7JjA05.jpg"
  },
  {"id": 6,
  "destino":" Budapest ",
  "descripcion":"Budapest es la capital de Hungría y también la ciudad más grande y poblada del país. Es el centro político, cultural, comercial, industrial y de transporte del país, con una población de casi 1,8 millones de habitantes.",
  "imagen":"https://www.wallpapers13.com/wp-content/uploads/2019/02/Sunrise-in-Budapest-Hungarian-Parliament-Danube-River-4K-Ultra-HD-Wallpaper-for-Desktop-Laptop-Tablet-Mobile-Phones-And-TV-5616x3510.jpg"
}
  ]

}
