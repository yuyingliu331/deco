import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ARView } from '../ar-view/ar-view';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {}

  loadARView = function() {
    this.navCtrl.push(ARView);
  }
}
