import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage'
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  public email: string;
  public password: string;
  public name: string

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(){}

  OnSubmitRegister(){
    this.auth.register(this.email, this.password, this.name).then( auth =>{
      this.router.navigate(['menu/home'])
    }).catch( err => console.log(err))
  }

}
