import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { WishlistService } from '../../providers/wishlist-service';
import { SessionService } from '../../providers/session-service';
import { ProductDetailPage } from '../product/product-detail';
import { WishlistPage } from '../wishlist/wishlist';

@Component({
  templateUrl: 'user-wishlists.html',
  providers: [WishlistService],
})
export class WishlistsPage {
  wishlists = [];

  constructor(public navCtrl: NavController, private wishlistservice: WishlistService, private sessionService: SessionService){
  }

  getUserWishlists = function() {
    this.sessionService.getSessionInfo()
    .then( session => {
      if(session.passport) {
        this.wishlistservice.getUserWishlists()
        .then(result => {
          this.wishlists = result;
        });
      }
    })

  }

  goToWishlist = function(wishlistId, wishlistName) {
    let scope = this;
    this.wishlistservice.getWishlist(wishlistId)
    .then(wishlist => {
      this.navCtrl.push(WishlistPage, {wishlist, wishlistName});
    });
  }

  ngOnInit() {
    this.getUserWishlists();
  }

}
