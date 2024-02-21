// Importación del decorador Injectable desde '@angular/core'
import { Injectable } from '@angular/core';
// Importación de AngularFirestore y AngularFirestoreCollection desde '@angular/fire/compat/firestore'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
// Importación del modelo Usuario desde 'src/app/models/usuario'
import { Usuario } from 'src/app/models/usuario';

// Decorador Injectable que proporciona metadatos para la inyección de dependencias
@Injectable({
  providedIn: 'root' // Especifica que el servicio se proporcionará en la raíz del módulo
})
// Definición de la clase FirestoreService
export class FirestoreService {
  // Definición de una colección de AngularFirestoreCollection para usuarios
  private usuariosCollection: AngularFirestoreCollection<Usuario>;

  // Constructor del servicio, inyecta AngularFirestore para interactuar con la base de datos
  constructor(private database: AngularFirestore) {
    // Inicialización de la colección de usuarios apuntando a la colección 'usuarios' en la base de datos
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  // Método para agregar un usuario a la base de datos
  agregarUsuario(usuario: Usuario, id: string) {
    // Devuelve una promesa que se resolverá cuando se complete la operación de agregado
    return new Promise(async (resolve, reject) => {
      try {
        // Asignación del ID al usuario antes de agregarlo a la base de datos
        usuario.uid = id;

        // Setea el documento del usuario en la colección 'usuarios' con el ID proporcionado
        const resultado = await this.usuariosCollection.doc(id).set(usuario);

        // Resuelve la promesa con el resultado de la operación
        resolve(resultado);
      } catch (error) {
        // Rechaza la promesa con el error capturado
        reject(error);
      }
    });
  }
}
