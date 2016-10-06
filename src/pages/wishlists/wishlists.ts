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
  session = {};
  user = false;

  constructor(public navCtrl: NavController, private wishlistservice: WishlistService, private sessionService: SessionService){
  }

  getUserWishlists = function() {
    this.updateSessionInfo();
    if(this.user) {
      this.wishlistservice.getUserWishlists()
      .then(result => {
        this.wishlists = result;
      });
    }
  }

  goToWishlist = function(wishlistId, wishlistName) {
    let scope = this;
    this.wishlistservice.getWishlist(wishlistId)
    .then(wishlist => {
      this.navCtrl.push(WishlistPage, {wishlist, wishlistName});
    });
  }

  createWishlist = function(wishlistName) {
    let userId = this.session.passport.user;
    this.wishlistservice.createWishlist(userId, wishlistName)
    .then(createdWishlist => {
      this.wishlists.push(createdWishlist);
    });
  }

  updateSessionInfo() {
    this.sessionService.getSessionInfo()
    .then( session => {
      this.session = session;
      this.user = !!this.session.passport;
    });
  }

  ngOnInit() {
    this.getUserWishlists();
    this.updateSessionInfo();
  }

}
