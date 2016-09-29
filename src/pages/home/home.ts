import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CatalogPage } from '../catalog/catalog';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  name = 'Elvis';

  goToCatalogPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CatalogPage);
  }

  constructor(public navCtrl: NavController) {
  }
}
