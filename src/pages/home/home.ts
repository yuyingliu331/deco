import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

import { CatalogPage } from '../catalog/catalog';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
  name = 'Elvis';

  goToCatalogPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CatalogPage);
  }
}
