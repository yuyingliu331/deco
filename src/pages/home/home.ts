import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { CatalogPage } from '../catalog/catalog';
import { ProductDetailPage } from '../product/product-detail';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {}
}
