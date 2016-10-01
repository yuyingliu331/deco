import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';
import { Catalog } from '../catalog/catalog';

@Component({
  templateUrl: 'products.html',
  providers: [],
})
export class ProductsPage {
  products = [];

  constructor(public navCtrl: NavController, params: NavParams){
    this.products = params.get("products");
  }
}
