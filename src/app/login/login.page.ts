import { AuthService } from './../auth/auth.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import { auth } from 'firebase/app'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public router: Router,
    private zone: NgZone
  ) {
    // afAuth.auth.onAuthStateChanged((user)=>{
    //   if(user){
    //     this.zone.run(() => {
    //       this.router.navigate(['/home']);
    //   });
    //   }
    // } )
   }

  ngOnInit() {
  }
  async login2(){
    const {username, password} = this
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(username, password)
    } catch (error) {
      console.dir(error)
      if(error.code === "auth/user-not-found"){
        console.log("user not found")
      }
    }
  }

  async login(){
    const {username, password} = this
    try {
      await this.authService.login(username, password);
      //this.router.navigate(['home'])
    } catch (error) {
      console.dir(error)
      if(error.code === "auth/user-not-found"){
        console.log("user not found")
      }
    }
  }

  register(){
    this.router.navigate(['register'])
  }

}
