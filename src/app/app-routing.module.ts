import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  //lazyloading
  {
    path: "", component: InicioComponent
  },
  {
    path: "auth",
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "inicio",
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: "catalogo",
    loadChildren: () => import('./modules/catalogo/catalogo.module').then(m => m.CatalogoModule)
  },
  {
    path: "administracion",
    loadChildren: () => import('./modules/administracion/administracion.module').then(m => m.AdministracionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
