import { Component, Input } from '@angular/core';
import { NavController} from 'ionic-angular';
import { WishlistService } from '../../providers/wishlist-service';
import { ToastService } from '../../providers/toast-service';
import { SessionService } from '../../providers/session-service';
import { WishlistPage } from '../wishlist/wishlist';

@Component({
  selector: 'user-wishlists',
  templateUrl: 'user-wishlists.html'
})

export class WishlistsPage {
  wishlists = [];
  @Input() sessionInfo;

  constructor(public navCtrl: NavController, private wishlistservice: WishlistService, private sessionService: SessionService, private toastService: ToastService){
  }

  getUserWishlists = function() {
    this.wishlistservice.getUserWishlists()
    .then(result => {
      this.wishlists = result;
    });
  }

  goToWishlist = function(wishlistId, wishlistName) {
    this.wishlistservice.getWishlist(wishlistId)
    .then(wishlist => {
      this.navCtrl.push(WishlistPage, {wishlist, wishlistName});
    });
  }

  createWishlist = function(wishlistName) {
    if (this.sessionInfo && this.sessionInfo.passport) {
      let userId = this.sessionInfo.passport.user;
      this.wishlistservice.createWishlist(userId, wishlistName)
      .then(createdWishlist => {
        this.wishlists.push(createdWishlist);
        this.toastService.presentToast('Created ' + createdWishlist.name);
      });
    }
  }

  deleteWishlist = function(wishlistId) {
    this.wishlistservice.deleteWishlist(wishlistId)
    .then(() => {
      this.wishlists = this.wishlists.filter(function(item) {
        return item.id !== wishlistId;
      })
    })
  }

  ngOnInit() {
    this.getUserWishlists();
  }

}
