import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';


export interface job{
  description: string,
  name: string,
  id: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(
    private db: AngularFirestore
  ) { }

  getJobRoom(){
    return this.db.collection('jobsRoom').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as job;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

}
