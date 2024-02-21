// Importación de módulos desde '@angular/router'
import { RouterModule, Routes } from '@angular/router';
// Importación del componente InicioComponent desde './modules/inicio/pages/inicio/inicio.component'
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
// Importación del decorador NgModule desde '@angular/core'
import { NgModule } from '@angular/core';

// Definición de las rutas de la aplicación
const routes: Routes = [
  // Configuración de rutas para lazy loading
  {
    path: "", component: InicioComponent // Ruta por defecto que carga el componente InicioComponent
  },
  {
    path: "", // Ruta base para cargar módulo de autenticación
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "", // Ruta base para cargar módulo de inicio
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: "", // Ruta base para cargar módulo de catálogo
    loadChildren: () => import('./modules/catalogo/catalogo.module').then(m => m.CatalogoModule)
  },
  {
    path: "", // Ruta base para cargar módulo de administración
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
];

// Decorador NgModule para declarar un módulo en Angular
@NgModule({
  // Importación del módulo RouterModule con las rutas definidas
  imports: [RouterModule.forRoot(routes)],
  // Exportación del módulo RouterModule para su uso en otros lugares de la aplicación
  exports: [RouterModule]
})
// Exportación de la clase AppRoutingModule como módulo principal de enrutamiento de la aplicación
export class AppRoutingModule { }
