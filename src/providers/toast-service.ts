import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CatalogService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ToastService {

  constructor(public toastCtrl: ToastController) { }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'top'
    });

    toast.present();
  }
}
