// Importación de módulos desde Angular Core
import { NgModule } from '@angular/core';
// Importación del módulo BrowserModule desde Angular Platform Browser
import { BrowserModule } from '@angular/platform-browser';

// Importación del módulo AppRoutingModule desde './app-routing.module'
import { AppRoutingModule } from './app-routing.module';
// Importación del componente AppComponent desde './app.component'
import { AppComponent } from './app.component';
// Importación del módulo BrowserAnimationsModule desde Angular Platform Browser Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importación del módulo SharedModule desde './shared/shared.module'
import { SharedModule } from './shared/shared.module';

// FIREBASE
// Nos conectamos con la BD; NOS TRAE MÓDULOS NECESARIOS

// Importación del objeto environment desde 'src/environments/environment'
import { environment } from 'src/environments/environment';
// Importación del módulo AngularFireModule desde '@angular/fire/compat' para Cloud Firestore
import { AngularFireModule } from '@angular/fire/compat';
// Importación del módulo AngularFireAuthModule desde '@angular/fire/compat/auth' para la autenticación
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// Importación del módulo AngularFireStorageModule desde '@angular/fire/compat/storage' para almacenamiento de imágenes
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

// Decorador NgModule para declarar un módulo en Angular
@NgModule({
  // Declaración de componentes
  declarations: [
    AppComponent,
  ],
  // Importación de otros módulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // Configuración de módulos FIREBASE
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicialización de la app de Firebase con la configuración proporcionada en environment.firebaseConfig
    AngularFireAuthModule, // Módulo de autenticación de Firebase
    AngularFireStorageModule // Módulo de almacenamiento de Firebase para imágenes
  ],
  providers: [], // Proveedores de servicios
  bootstrap: [AppComponent] // Componente raíz para iniciar la aplicación
})
// Exportación de la clase AppModule como módulo principal de la aplicación
export class AppModule { }
