import { Component } from '@angular/core';
import { Firestore, addDoc, collection, getDoc } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-template';


  user: User = new User();

  constructor(private firestore: Firestore){}

  async addUser() {
    const usersCollection = collection(this.firestore, 'users');
    addDoc(usersCollection, this.user.toJson()).then(async (result) => {
      const docSnap = await getDoc(result);

    });
  }


  openDialog(){
    
  }
}
