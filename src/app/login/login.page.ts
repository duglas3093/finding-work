import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { AuthenticateService } from "../services/authenticate.service";
import { NavController } from '@ionic/angular';

import { Storage } from "@ionic/storage";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  loginForm: FormGroup
  validation_messages={
    email:[
      { type: "required", message:"El email es requerido" },
      { type: "pattern", message:"Ojo!, este email no es valido" }
    ],
    password:[
      { type: "required", message:"El password es requerido" },
      { type: "pattern", message:"Ojo!, el campo debe contener almenso 5 caracteres"}
    ]
  }

  errorMessage: string = ""

  email: string;
  password: string;

  constructor(
    private authService: AuthService, 
    public router: Router,
    private navCtrl: NavController,
    private storage: Storage
    ) { }

  onSubmitLogin(){
    this.authService.login(this.email,this.password).then( res => {
      this.storage.set('isUserLoggedIn',true)
      this.navCtrl.navigateForward('/menu/home');  
    }).catch(err => alert('Los datos son incorrectos o no existe el usuario'))
  }

  goToRegister(){
    this.navCtrl.navigateForward('/register');
  }
}
