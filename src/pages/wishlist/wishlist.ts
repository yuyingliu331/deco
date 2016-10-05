import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WishlistService } from '../../providers/wishlist-service';
import { ProductDetailPage } from '../product/product-detail';

@Component({
  templateUrl: 'wishlist.html',
  providers: [WishlistService],
})
export class WishlistPage {
  @Input() wishlist;

  constructor(public navCtrl: NavController, private wishlistservice: WishlistService){
  }

  getUserWishlists = function() {
    this.wishlistservice.getUserWishlists()
    .then(result => {
      this.wishlist = result;
    });
  }

  ngOnInit() {
    this.getUserWishlists();
  }

}
