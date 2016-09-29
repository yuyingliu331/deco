import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'catalog.html'
})
export class CatalogPage {
  item: 'im an item';
  constructor(public navCtrl: NavController) {
  }
}
