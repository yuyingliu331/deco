import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { WishlistService } from './wishlist-service';
import { ToastService } from './toast-service';
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
  refreshWishlists: boolean;
  newWishlist;

  constructor(public alerCtrl: AlertController, private wishlistService: WishlistService, private toastService: ToastService) { }

  doRadio(wishlists, productId, userId) {
    let alert = this.alerCtrl.create({ enableBackdropDismiss: true });
    alert.setTitle('Select A Wishlist');

    for(let wishlist of wishlists) {
      alert.addInput({
        type: 'radio',
        label: wishlist.name,
        value: wishlist
      });
    }
    alert.addButton({
      text: 'New Wishlist',
      handler: data => {
        this.testRadioOpen = false;
        this.noWishlistsAlert(userId, productId)
      }
    });
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
        this.wishlistService.addProductToWishlist(data.id, productId);
        this.toastService.presentToast('Item added to ' + data.name);
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });

  }

  noWishlistsAlert(userId, productId ) {
      let prompt = this.alerCtrl.create({
        title: 'Create Wishlist',
        message: "Enter a Wishlist Name",
        inputs: [
          {
            name: 'name',
            placeholder: 'Wishlist Name'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              this.testRadioResult = undefined;
            }
          },
          {
            text: 'Save',
            handler: data => {
              this.refreshWishlists = true;
              this.testRadioOpen = false;
              this.wishlistService.createWishlist(userId, data.name)
              .then((response : any) =>{
                this.newWishlist = response;
                return this.wishlistService.addProductToWishlist(response.id, productId);
              })
              .then((response : any) =>{
                this.wishlistService.announceNewWishlist(this.newWishlist);
                return this.toastService.presentToast('Item added to new wishlist: ' + data.name);
              })
            }
          }
        ]
      });
      prompt.present().then(() => {
        this.testRadioOpen = true;
      });
  }

  loginAlert() {
    let alert = this.alerCtrl.create({
      title: 'Please Login',
      subTitle: 'Please login on the Profile Page.',
      buttons: ['OK']
    });
    alert.present();
  }
}
