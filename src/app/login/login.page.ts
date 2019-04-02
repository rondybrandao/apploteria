import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
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
    public router: Router
  ) { }

  ngOnInit() {
  }
  async login2(){
    const {username, password} = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@email.com', password)
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
      const res = await this.authService.login(username, password);
      this.router.navigate(['home'])
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
