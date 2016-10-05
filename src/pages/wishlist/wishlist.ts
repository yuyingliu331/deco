import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WishlistService } from '../../providers/wishlist-service';
import { ProductDetailPage } from '../product/product-detail';

@Component({
  templateUrl: 'wishlist.html',
  providers: [WishlistService]
})
export class WishlistPage {
  wishlist = [];

  constructor(public navCtrl: NavController, private wishlistservice: WishlistService, params: NavParams) {
  }

  //we pass in a wishlist with just productId's from the wishlists page via params
  //we then get all the products from the wishlist
  getWishlist = function(wishlist) {
    this.wishlist = this.wishlistservice.getWishlistProducts(params.get("wishlist"));
  }

  ngOnInit() {
    this.getWishlist();
  }

}
