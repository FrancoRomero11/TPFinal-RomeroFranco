import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  coleccionProductos: Producto[] = []; // creamos colección basada en interfaz Producto

  productoSeleccionado!: Producto; // ! -> recibir valores vacíos

  constructor(
    public servicioCrud: CrudService // patentamos servicio de forma local
  ){}
  
  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }
}
