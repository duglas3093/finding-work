import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from "../services/authenticate.service";
import { NavController } from '@ionic/angular';

import { Storage } from "@ionic/storage";

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

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private storage: Storage
    ) {
      this.loginForm = this.formBuilder.group({
        email: new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
        ),
        password: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
        )
      })
  }
  
  goToRegister(){
    this.navCtrl.navigateForward('/register')
  }

  loginUser(credentials){
    // console.log(credentials)
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage=""
      this.storage.set('isUserLoggedIn', true)
      this.navCtrl.navigateForward("/menu/home")
    }).catch(err=>{
      this.errorMessage = err;
    })
  }

}
