import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CatalogPage } from '../catalog/catalog';
import { ProductPage } from '../product/product';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {}

  goToCatalogPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CatalogPage);
  }

  viewProduct() {
    this.navCtrl.push(ProductPage);
  }
}
