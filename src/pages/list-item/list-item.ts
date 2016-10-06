import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';
import { ProductDetailPage } from '../product/product-detail';

@Component({
  selector : 'list-item',
  templateUrl: 'list-item.html',
  providers: []
})
export class ListItem {

  @Input() itemProduct;

  constructor(public navCtrl: NavController ){
  }

  goToProductDetailPage(n) {
    this.navCtrl.push(ProductDetailPage, {
      productId: n
    });
  }
}
