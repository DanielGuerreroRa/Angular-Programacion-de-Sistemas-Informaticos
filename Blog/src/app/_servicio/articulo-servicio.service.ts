import { Injectable } from '@angular/core';
import { Articulo } from '../_modelo/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloServicioService {

  articulos=[
    {"id":1,
     "titulo":"Hacking ético",
      "resumen":"¿QUÉ ES EL HACKING ÉTICO? El hacking ético, también conocido como «ethical hacking» en inglés, es una práctica de ciberseguridad en la que profesionales expertos en tecnología informática, conocidos como «hackers éticos», emplean sus habilidades para identificar y solucionar vulnerabilidades en sistemas, redes y aplicaciones de manera legal y autorizada. Aunque la palabra «hacker» a menudo evoca imágenes de actividades ilegales y ciberdelincuentes, el hacking ético se basa en principios y estándares éticos que promueven la seguridad digital y la protección de datos. En este artículo vamos a explicar con todo detalle.",
      "imagen":"https://www.segurilatam.com/wp-content/uploads/sites/5/2021/07/hacking-etico-articulo-1200x630.jpg"
    },
    {"id":2,
     "titulo":"Legislación de Seguridad en Europa",
      "resumen":"El artículo 153 del Tratado de Funcionamiento de la Unión Europea ha servido como base para adoptar numerosas medidas europeas en materia de salud y seguridad en el trabajo. Las directivas europeas son vinculantes y los Estados miembros deben trasponerlas a su legislación nacional. Las directivas europeas establecen requisitos mínimos y principios fundamentales, como los principios de prevención y evaluación de riesgos, y las responsabilidades de los empleadores y los empleados. Una serie de guías europeas tiene como objetivo facilitar la aplicación de las directivas y normas de la UE adoptadas por organizaciones.",
      "imagen":"https://www.secureit.es/wp-content/uploads/2018/11/Real-Decreto-Directiva-NIS.png"
    },
    {"id":3,
     "titulo":"¿Cómo evitar que te hackeen la cuenta?",
      "resumen":"Con el creciente número de cuentas en línea, aplicaciones móviles y cámaras de seguridad para el hogar, los consumidores deben ser conscientes de los posibles riesgos que conlleva esta conveniente tecnología. Los propietarios de cámaras de seguridad para el hogar han reportado ncidentes inquietantes, desde una voz en su cámara advirtiendo falsamente de un ataque con misiles hasta hackers que hablan con su hijo a través del altavoz de su cámara. Entonces, ¿cómo están entrando los hackers? Según Digital Shadows, una lista creciente de credenciales violadas —alrededor de 24 mil millones— están disponibles en la Dark Web. ",
      "imagen":"https://fotografias.antena3.com/clipping/cmsimages02/2022/04/15/F76FAAAB-39F0-4D8C-BA15-6A62FF1A1117/bancos-alertan-estafa-sms-como-nueva-tecnica-phishing_98.jpg?crop=1600,900,x0,y0&width=1900&height=1069&optimize=low&format=webply"
    },
    {"id":4,
     "titulo":"¿Que es phising?",
      "resumen":"El phishing es la forma más común de ingeniería social, la práctica de engañar, presionar o manipular a las personas para que envíen información o activos a personas indebidas. Los ataques de ingeniería social basan su éxito en tácticas de error humano y presión. El atacante normalmente se hace pasar por una persona u organización en la que la víctima confía (por ejemplo, un compañero de trabajo, un jefe, una compañía con la que la víctima o la empresa de la víctima tiene negocios) y crea una sensación de urgencia que lleva a la víctima a actuar precipitadamente. Los hackers utilizar estas tácticas porque es más fácil.",
      "imagen":"https://opendatasecurity.io/wp-content/uploads/2017/02/phishing-protection.jpg"
    },
    {"id":5,
     "titulo":"Que datos NUNCA te deben pedir",
      "resumen":"Cuando el banco te pide un dato es únicamente para confirmar pero existen algunos que jamás te solicitará. Los datos financieros que no debes compartir son: números de cuenta bancaria, números de tarjetas de crédito, claves de acceso, NIP y CVC (los números que aparecen detrás de tu tarjeta junto a la firma).",
      "imagen":"https://www.obicex.es/sites/obicex/files/styles/blog_desktop/public/images/blog/phising-informatico.jpg?itok=01U28S1f"
    },
    {"id":6,
     "titulo":"¿Por qué aprender Linux?",
      "resumen":"Linux es un sistema operativo tipo Unix basado en el núcleo Linux. Los sistemas Unix son sistemas operativos multiprocesador y multitarea, y están diseñados para ser lo más estables posible, con un alto nivel de seguridad. Es un sistema operativo libre (licencia GNU/Linux) y de código abierto. Por tanto, los usuarios tienen una gran autonomía en términos de personalización y configuración. Es legítimo sentir cierto temor al principio antes de dar el paso. El miedo a no encontrar los programas habituales, a tener que aprender el scripting de Bash o Python, a perderse entre las diferentes distribuciones, etc.",
      "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPTZkuVdNFazqgFR2J2zQBqtdQiHBG0NhBA&usqp=CAU"
    }
  ]

  constructor() { }

  obtenerArticulo(indice:number){
    return this.articulos[indice];
  }

  obtenerTodosArticulos(){
    return this.articulos;
  }
  altaArticulo(articulo:Articulo){
    this.articulos.push(articulo);
}
}