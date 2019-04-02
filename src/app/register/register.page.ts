import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string = ""
  password: string = ""
  cpassword: string = ""
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit() {
  }
  async register2(){
    const {username, password, cpassword} = this
    if(password !== cpassword){
      return console.log("Password nao combina")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@email.com', password)
      console.log(res)
    } catch (error) {
      console.dir(error)
    }
  }

  async register(){
    const {username, password, cpassword} = this
    if(password !== cpassword){
      return console.log("Password nao combina")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@email.com', password);
      console.log(res);
      this.router.navigate(['home'])
    } catch (error) {
      console.dir(error)
    }
  }

}
