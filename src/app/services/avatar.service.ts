import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private auth:Auth,
    private firestore:Firestore,
    private storage:Storage) { }


    //Creo este metodo para ir a buscar al usuario y mostrar su imagen
    //si no tiene imagen mostrara un mensaje actualiza, etc
    getUserProfile(){
      //como ya estoy registrado muentro el usuario
      const user = this.auth.currentUser;
      //parapoder enlazar el usuario q crearé con firestore, debo usar la coleccion "users" (puede ser con otra coleccion usuario/conductor)
      //dentro de la colleccion users/me voy a conectar al usuer? que tengo capturado y voy a obtener su uid, es decir, 
      const userDocRef = doc(this.firestore, `users/${user?.uid}`);
      //retorna el dato del usuario
      return docData(userDocRef);
    }

    async uploadAvatar(cameraFile: Photo){
      const user = this.auth.currentUser;
      const path = `uploads/${user?.uid}/profile.png`;
      const storageRef = ref(this.storage, path);

      try {
        await uploadString(storageRef, cameraFile.base64String || '' ,'base64');

        const imageUrl = await getDownloadURL(storageRef);
        const userDocRef = doc(this.firestore, `users/${user?.uid}`);
        await setDoc(userDocRef,{
          imageUrl,
        });
        return true;
      } catch (error) {
        return false;
      }
    }


}
