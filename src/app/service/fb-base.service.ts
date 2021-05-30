import { Injectable } from '@angular/core';
import {AngularFirestore, CollectionReference, Query} from '@angular/fire/firestore';
import {Shipment} from 'src/app/shared/models/shipment.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private firestore: AngularFirestore) { }

  async add(collectionName: string, data: Shipment, id?: string): Promise<string>{
    const uid = id ? id : this.firestore.createId();
    data.id = uid;
    await this.firestore.collection(collectionName).doc(uid).set(data);
    return uid;
  }
  // tslint:disable-next-line:typedef
  weakAdd(collectionName: string, data: Shipment){
    return this.firestore.collection(collectionName).add(data);
  }

  get(collectionName: string): Observable<Shipment[]>{
    return this.firestore.collection(collectionName).valueChanges() as Observable<Shipment[]>;
  }
  // tslint:disable-next-line:typedef
  delete(collectionName: string, id: string){
    return this.firestore.collection(collectionName).doc(id).delete();
  }
  get1(collectionName: string, hrf: string): Observable<Shipment[]>{
    return this.firestore.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('id', '==', hrf).limit(1);
      return query;
    }).valueChanges() as Observable<Shipment[]>;
  }
}
