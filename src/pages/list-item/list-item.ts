import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductDetailPage } from '../product/product-detail';
import { WishlistService } from '../../providers/wishlist-service';

@Component({
  selector : 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItem {

  @Input() itemProduct;

  wishlistId;

  constructor(public navCtrl: NavController, private wishlistService: WishlistService){

  }

  goToProductDetailPage(n) {
    this.navCtrl.push(ProductDetailPage, {
      productId: n
    });
  }


}
