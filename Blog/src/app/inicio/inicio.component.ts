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
    {"id":1,
     "titulo":"Hacking ético",
      "resumen":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit veritatis quis illum aliquid ipsum quos excepturi totam blanditiis voluptatibus nesciunt similique debitis sapiente soluta, eos non quisquam voluptates expedita.",
      "imagen":"https://www.segurilatam.com/wp-content/uploads/sites/5/2021/07/hacking-etico-articulo-1200x630.jpg"
    },
    {"id":2,
     "titulo":"Legislación de Seguridad en Europa",
      "resumen":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit veritatis quis illum aliquid ipsum quos excepturi totam blanditiis voluptatibus nesciunt similique debitis sapiente soluta, eos non quisquam voluptates expedita.",
      "imagen":"https://www.secureit.es/wp-content/uploads/2018/11/Real-Decreto-Directiva-NIS.png"
    },
    {"id":3,
     "titulo":"¿Cómo evitar que te hackeen la cuenta?",
      "resumen":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit veritatis quis illum aliquid ipsum quos excepturi totam blanditiis voluptatibus nesciunt similique debitis sapiente soluta, eos non quisquam voluptates expedita.",
      "imagen":"https://fotografias.antena3.com/clipping/cmsimages02/2022/04/15/F76FAAAB-39F0-4D8C-BA15-6A62FF1A1117/bancos-alertan-estafa-sms-como-nueva-tecnica-phishing_98.jpg?crop=1600,900,x0,y0&width=1900&height=1069&optimize=low&format=webply"
    },
    {"id":4,
     "titulo":"¿Que es phising?",
      "resumen":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit veritatis quis illum aliquid ipsum quos excepturi totam blanditiis voluptatibus nesciunt similique debitis sapiente soluta, eos non quisquam voluptates expedita.",
      "imagen":"https://opendatasecurity.io/wp-content/uploads/2017/02/phishing-protection.jpg"
    },
    {"id":5,
     "titulo":"Que datos NUNCA te deben pedir",
      "resumen":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit veritatis quis illum aliquid ipsum quos excepturi totam blanditiis voluptatibus nesciunt similique debitis sapiente soluta, eos non quisquam voluptates expedita.",
      "imagen":"https://www.obicex.es/sites/obicex/files/styles/blog_desktop/public/images/blog/phising-informatico.jpg?itok=01U28S1f"
    },
    {"id":6,
     "titulo":"¿Por qué aprender Linux?",
      "resumen":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit veritatis quis illum aliquid ipsum quos excepturi totam blanditiis voluptatibus nesciunt similique debitis sapiente soluta, eos non quisquam voluptates expedita.",
      "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPTZkuVdNFazqgFR2J2zQBqtdQiHBG0NhBA&usqp=CAU"
    },
  ]

}