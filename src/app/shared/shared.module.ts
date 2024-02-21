// Importación del decorador NgModule desde '@angular/core'
import { NgModule } from '@angular/core';
// Importación del módulo CommonModule desde '@angular/common'
import { CommonModule } from '@angular/common';

// Importación del módulo AppRoutingModule desde '../app-routing.module'
import { AppRoutingModule } from '../app-routing.module';

// MATERIAL
// Importación de módulos de Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

// COMPONENTES 
// Importación de componentes personalizados
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Decorador NgModule para declarar un módulo en Angular
@NgModule({
  // Declaración de componentes pertenecientes al módulo
  declarations: [
    // DECLARAMOS COMPONENTES NAVBAR Y FOOTER
    NavbarComponent,
    FooterComponent
  ],
  // Importación de otros módulos necesarios
  imports: [
    CommonModule,
    AppRoutingModule,
    // MATERIAL
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  // Exportación de componentes y módulos para su uso fuera del módulo actual
  exports: [
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ]
})
// Exportación de la clase SharedModule como módulo compartido para reutilización
export class SharedModule { }
