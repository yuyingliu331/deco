import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { WishlistService } from './wishlist-service';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CatalogService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RadioAlertService {

  testRadioOpen: boolean;
  testRadioResult;

  constructor(public alerCtrl: AlertController, private wishlistService: WishlistService) { }

  doRadio(wishlists, productId) {
    let alert = this.alerCtrl.create({ enableBackdropDismiss: true });
    alert.setTitle('Select A Wishlist');

    for(let wishlist of wishlists) {
      alert.addInput({
        type: 'radio',
        label: wishlist.name,
        value: wishlist.id
      });
    }

    alert.addButton({
      text:'Cancel',
      handler: data => {
        this.testRadioResult = undefined;
      }
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.wishlistService.addProductToWishlist(data, productId);
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });

  }
}
