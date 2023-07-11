import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-template';


  user: User = new User();


  constructor(private firestore: Firestore, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        // Benutzer ist angemeldet
        console.log('navigate to main');
        this.router.navigate(['/main']);  // Weiterleiten zur Hauptseite
      } 
      else {
        // Benutzer ist abgemeldet
        this.router.navigate(['/login']);  // Weiterleiten zur Anmeldeseite
      }
    });
  }
}
