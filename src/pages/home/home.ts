import { Component } from '@angular/core';

import { NavController, MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
  }
}
