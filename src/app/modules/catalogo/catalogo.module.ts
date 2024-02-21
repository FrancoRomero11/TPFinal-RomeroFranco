import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { TarjetaComponent } from './component/tarjeta/tarjeta.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    CatalogoComponent,
    TarjetaComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    TarjetaComponent,
  ]
})
export class CatalogoModule { }
