import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    user: User = new User();

  constructor(private firestore: Firestore, private authService: AuthService) {}

  register() {
    this.authService.signUp(this.user.email, this.user.password)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        // Behandeln Sie hier Fehler, z.B. indem Sie eine Fehlermeldung anzeigen
      });
  }


  login() {
    this.authService.signIn(this.user.email, this.user.password)
      .then(response => {
        console.log(response);
        // Sie können hier etwas tun, nachdem die Anmeldung erfolgreich war, z.B. den Benutzer zur Hauptseite der App umleiten
      })
      .catch(error => {
        // Behandeln Sie hier Fehler, z.B. indem Sie eine Fehlermeldung anzeigen
      });
  }

  signOut(){
    this.authService.signOut();
  }


  async addUser() {
    const usersCollection = collection(this.firestore, 'users');
    addDoc(usersCollection, this.user.toJson()).then(async (result) => {
      const docSnap = await getDoc(result);

    });
  }


  openDialog() {

  }
}
