import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage'


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  registerForm: FormGroup
  validation_messages={
    nombre:[
      { type: "required", message:"Este campo es requerido para el registro" },
      { type: "minlength", message:"El apellido debe tener almenos 5 caracteres" }
    ],
    apellido:[
      { type: "required", message:"Este campo es requerido para el registro" },
      { type: "minlength", message:"El apellido debe tener almenos 5 caracteres" }
    ],
    email:[
      { type: "required", message:" El email es requerido" },
      { type: "pattern", message:"Ojo!, este email no es valido" }
    ],
    password:[
      { type: "required", message:" El password es requerido" },
      { type: "pattern", message:"Ojo!, minimo 5 letras para el password" }
    ]
  }

  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
    ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,//campo requerido
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")//que tenga almenos alguno de estos caracteres
        ])
      ),
      password: new FormControl("", Validators.compose([
        Validators.required,//campo requerido
        Validators.minLength(5)//cantidad minima de caracterres
      ])
      ),
      nombre: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])
      ),
      apellido: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ]))
    });
  }

  register(userData){
    // console.log(userData)
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack("/login")
    })
  }
  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }

}
