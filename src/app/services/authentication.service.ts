import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import "firebase/auth"
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState: any = null;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => this.authState = data)
  }

  get authenticated(): boolean {
    return this.authState !== null
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null
  }

  login() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    console.log(this);
  }

  logout() {
    this.afAuth.signOut()
  }
}
