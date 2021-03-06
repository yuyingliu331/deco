import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product/product-detail';

@Component({
  templateUrl: 'products.html',
  providers: [],
})
export class ProductsPage {
  products = [];

  constructor(public navCtrl: NavController, params: NavParams){
    this.products = params.get("products");
  }

  goToProductDetailPage(n) {
    this.navCtrl.push(ProductDetailPage, {
      productId: n
    });
  }
}
