import { Component, OnInit } from '@angular/core';
// NUEVA INTERFAZ
import { SetAjedrez } from 'src/app/models/set-ajedrez';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: SetAjedrez[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor() {
    this.info = [
      {
        idProducto: "" ,
        nombre: "Juego De Ajedrez" ,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_833854-MLU72972411229_112023-F.webp",
        alt: "Tablero de Ajedrez",
        descripcion: "Tablero de Ajedrez",
        precio: 13000,
      },
      {
        idProducto: "" ,
        nombre: "Juego De Ajedrez" ,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_605471-MLC52962190072_122022-F.webp",
        alt: "Tablero de Ajedrez",
        descripcion: "Tablero de Ajedrez",
        precio: 8000,
      },
      {
        idProducto: "" ,
        nombre: "Juego De Ajedrez" ,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_858249-MLA45996456827_052021-F.webp",
        alt: "Tablero de Ajedrez",
        descripcion: "Tablero de Ajedrez",
        precio: 22000,
      }
    ]
  }

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void {
  }
}
