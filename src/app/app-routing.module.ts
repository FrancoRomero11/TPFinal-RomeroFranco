import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  //lazyloading
  {
    path: "", component: InicioComponent
  },
  {
    path: "",
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "",
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: "",
    loadChildren: () => import('./modules/catalogo/catalogo.module').then(m => m.CatalogoModule)
  },
  {
    path: "",
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
