import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WishlistService } from '../../providers/wishlist-service';

@Component({
  templateUrl: 'wishlist.html',
  providers: [WishlistService]
})
export class WishlistPage {
  wishlist = [];
  wishlistName;
  wishlistId;

  constructor(public navCtrl: NavController, private wishlistservice: WishlistService, params: NavParams) {
    this.wishlistName = params.get("wishlistName");
    this.wishlistId = params.get("wishlist");
  }

  //we pass in a wishlist with just productId's from the wishlists page via params
  //we then get all the products from the wishlist
  getWishlist = function() {
    this.wishlist = this.wishlistservice.getWishlistProducts(this.wishlistId);
  }

  delete(wid,pid){
    console.log("wid", wid, "pid", pid);
   this.wishlistservice.deleteWishlistProduct(wid, pid);
   this.wishlist = this.wishlist.filter(function(item) {
     return item.id !== pid;
   });
  }

  ngOnInit() {
    this.getWishlist();
  }

}
