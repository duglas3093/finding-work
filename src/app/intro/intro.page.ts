import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidePerview: 1,
    centeredSlides: true,
    speed: 400
  };

  slides = [{
    imgageSrc:"assets/images/logo.png",
    imageAlt:"Platizi Music Logo",
    title:"Encuentra tú trabajo ideal",
    subTitle:"",
    description: "Busca cualquier tipo de trabajo en cualquier momento, a todas horas.",
    icon:"construct"
  },
  {
    imgageSrc:"assets/images/logo.png",
    imageAlt:"Platizi Music Logo",
    title:"PUBLICA UN EMPLEO",
    subTitle:"Y ENCUENTRA TRABAJADORES",
    description: "Puedes publicar un trabajo para conseguir nuevos trabajadores.",
    icon:"business"
  },
  {
    imgageSrc:"assets/images/logo.png",
    imageAlt:"Platizi Music Logo",
    title:"CREA TÚ",
    subTitle:"HOJA DE VIDA",
    description: "Publica tu curriculum vitae para que los empleadores sepan lo bueno que eres.",
    icon:"paper"
  },
  {
    imgageSrc:"assets/images/logo.png",
    imageAlt:"Platizi Music Logo",
    title:"CONVERSA POR EL",
    subTitle:"CHAT",
    description: "Puedes comunicarte mediante el sistema de mensajeria con el postulante / empleador",
    icon:"chatboxes"
  }
  ]

  constructor(private router:Router, private storage:Storage) { }

  finish(){
    this.storage.set("isIntroShower", true);
    this.router.navigateByUrl('/home')
  }

  ngOnInit() {
  }

}
