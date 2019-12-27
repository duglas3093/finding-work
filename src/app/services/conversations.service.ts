import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import { message } from '../models/message';
import { firestore } from 'firebase';


export interface conversation{
  description: string,
  name: string,
  id: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  constructor(
    private db: AngularFirestore
    ) { }


  getConversationsRoom(){
    return this.db.collection('conversationsRoom').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as conversation;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  getConversationRoom(conversation_id : string){
    return this.db.collection('conversationsRoom').doc(conversation_id).valueChanges()
  }

  sendMsgToFirebase(message: message, conversation_id: string){
    this.db.collection('conversationsRoom').doc(conversation_id).update({
      message: firestore.FieldValue.arrayUnion(message),  
    })
  }

}
