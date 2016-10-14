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
  subscription: any;
  @Input() sessionInfo;

  constructor(public navCtrl: NavController, private wishlistservice: WishlistService, private sessionService: SessionService, private toastService: ToastService){
    wishlistservice.wishlistCreated$.subscribe(newWishlist => {
      this.wishlists.push(newWishlist);
    })
  }

  getSessionInfo = function() {
    return this.sessionService.getSessionInfo()
    .then(result => {
      this.sessionInfo = result;
    });
  }

  getUserWishlists = function() {
    this.wishlistservice.getUserWishlists(this.sessionInfo.passport.user)
    .then(result => {
      this.wishlists = result;
    });
  }

  goToWishlist = function(wishlistId, wishlistName) {
    this.wishlistservice.getWishlist(this.sessionInfo.passport.user, wishlistId)
    .then(wishlist => {
      this.navCtrl.push(WishlistPage, {wishlist, wishlistName, userId: this.sessionInfo.passport.user});
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

  testWishlistLength = function() {
    return (this.wishlists || []).length > 0;
  }

  ngOnInit() {
    this.getSessionInfo()
    .then((result: any) => {
      this.getUserWishlists();
    });
  }

}
