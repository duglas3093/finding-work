import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { Storage } from '@ionic/storage'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router){}
  async canActivate(){//async: para que la app se detenga y evalue esta funcion para continuar
    const isIntroShower = await this.storage.get('isIntroShower')
    if(isIntroShower){
      return true
    }else{
      this.router.navigateByUrl('/intro')
    }
  }
}
