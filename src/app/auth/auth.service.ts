import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public keyboard: Keyboard
  ) {
      // this.afAuth.authState.subscribe(user =>{
      //   if (user) {
      //     this.user = user;
      //     localStorage.setItem('user', JSON.stringify(this.user));
      //   } else {
      //     localStorage.setItem('user', null);
      //   }
      // })
   }
  async register(username: string, password: string){
    
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
    } catch (error) {
      alert("error!" + error.message);
      console.dir(error)
    }
  }

  async login(email: string, password: string) {
    this.keyboard.hide();
     try {
       await this.afAuth.auth.signInWithEmailAndPassword(email, password)
       
     } catch (error) {
       alert("error!" + error.message);
     }
   }

  async logout() {
     await this.afAuth.auth.signOut();
     localStorage.removeItem('user');
     this.router.navigate(['login']);
   }

  get isLoggedIn(): boolean {
     const user = JSON.parse(localStorage.getItem('user'));
     return user !== null;
  }
  
  public getAuth() {
    return this.afAuth.auth;
  }

  // async loginPhone(number: string) {
  //   var applicationVerifier = new firebase.auth.RecaptchaVerifier(
  //     'recaptcha-container');
  //   try {
  //     await this.afAuth.auth.signInWithPhoneNumber(number, applicationVerifier)
      
  //   } catch (error) {
  //     alert("error!" + error.message);
  //   }
  // }

  // async registerPhone(username: string, password: string){
    
  //   try {
  //     await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
  //   } catch (error) {
  //     alert("error!" + error.message);
  //     console.dir(error)
  //   }
  // }
  
}
