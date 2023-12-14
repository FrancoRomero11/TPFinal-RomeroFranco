import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './pages/administracion/administracion.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdministracionComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
   SharedModule
  ]
})
export class AdministracionModule { }
