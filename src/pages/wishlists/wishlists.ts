import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { WishlistService } from '../../providers/wishlist-service';
import { ProductDetailPage } from '../product/product-detail';
import { WishlistPage } from '../wishlist/wishlist';

@Component({
  templateUrl: 'user-wishlists.html',
  providers: [WishlistService],
})
export class WishlistsPage {
  wishlists = [];

  constructor(public navCtrl: NavController, private wishlistservice: WishlistService){
  }

  getUserWishlists = function() {
    this.wishlistservice.getUserWishlists()
    .then(result => {
      this.wishlists = result;
    });
  }

  goToWishlist = function(wishlistId) {
    let scope = this;
    this.wishlistservice.getWishlist(wishlistId)
    .then(wishlist => {
      this.navCtrl.push(WishlistPage, {wishlist});
    });
  }

  ngOnInit() {
    this.getUserWishlists();
  }

}
