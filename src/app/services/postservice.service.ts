import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, Query, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Post } from './post';
import 'rxjs-compat/add/operator/map'
import { map } from 'rxjs-compat/operator/map';
import * as firebase from 'firebase/compat';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  postsCollection: AngularFirestoreCollection<Post>
  postDoc!: AngularFirestoreDocument<Post>
  showData: any;
  postsCollection1: AngularFirestoreCollection<Post>
  postsCollection2: AngularFirestoreCollection<Post>
  postsCollection3: AngularFirestoreCollection<Post>

  constructor(private afs: AngularFirestore, private firebase: AngularFireDatabase) {
    this.postsCollection = this.afs.collection('Blog', ref => ref.orderBy('CDate', 'desc'))
    this.postsCollection1 = this.afs.collection('/Blog', ref => ref.where('cateName', '==', 'rent'))
    this.postsCollection2 = this.afs.collection('/Blog', ref => ref.where('cateName', '==', 'payment'))
    this.postsCollection3 = this.afs.collection('/Blog', ref => ref.where('cateName', '==', 'other'))
  }
  getPosts() {
    return this.postsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return { id, ...data }
      })
    })
  }

  getPostFilter1() {
    return this.postsCollection1.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return { id, ...data }

      })
    })
  }
  getPostFilter2() {
    return this.postsCollection2.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return { id, ...data }

      })
    })
  }
  getPostFilter3() {
    return this.postsCollection3.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return { id, ...data }

      })
    })
  }

  getPostDatacat() {
    this.postDoc = this.afs.doc<Post>(`Blog`)
    return this.postDoc.valueChanges()
  }

  getPostData(id: any) {
    this.postDoc = this.afs.doc<Post>(`Blog/${id}`)
    return this.postDoc.valueChanges()
  }

  create(data: Post) {
    this.postsCollection.add(data)
  }

  getPost(id: any) {
    return this.afs.doc<Post>(`Blog/${id}`)
  }
  delete(id: any) {
    return this.getPost(id).delete();
  }

  update(id: any, formdata: any) {
    return this.getPost(id).update(formdata);
  }

}
