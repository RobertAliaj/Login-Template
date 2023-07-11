import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }


  async signUp(email: string, password: string) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);
  }


  async signIn(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }


  async signOut() {
    return this.afAuth.signOut();
  }
}