import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

declare var cordova;

@Component({
  templateUrl: 'home.html',
  styleUrls: ['/pages/home/home.scss']
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {}
}
