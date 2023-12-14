import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './pages/administracion/administracion.component';

const routes: Routes = [
  //ruta secundaria 
  {path:"administracion", component: AdministracionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
