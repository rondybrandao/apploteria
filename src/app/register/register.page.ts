import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
    public router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }
  async register2(){
    const {username, password, cpassword} = this
    if(password !== cpassword){
      return console.log("Password nao combina")
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      console.log(res)
    } catch (error) {
      console.dir(error)
    }
  }

  async register(){
    const {username, password, cpassword} = this
    if(password !== cpassword){
      return this.errorPasswordToast()
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username , password);
      console.log(res);
      this.router.navigate(['home'])
    } catch (error) {
      console.dir(error)
      this.errorExisteToast()
    }
  }
  async errorExisteToast() {
    const toast = await this.toastController.create({
      message: 'Email já cadastrado. Por favor escolha outro nome de usario.',
      duration: 2000
    });
    toast.present();
  }

  async errorPasswordToast() {
    const toast = await this.toastController.create({
      message: 'Senhas não combinam. Por favor tente outra vez.',
      duration: 2000
    });
    toast.present();
  }

}
