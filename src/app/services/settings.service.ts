import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private db: AngularFirestore) { }

  getUserInfo(user_id: string){
    return this.db.collection('users').doc(user_id).valueChanges()
  }

}
