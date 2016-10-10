import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';
import { WishlistService } from '../../providers/wishlist-service';
import { RadioAlertService } from '../../providers/radioAlert-service';
import { LikesService } from '../../providers/likes-service';
import { SessionService } from '../../providers/session-service';

@Component({
  templateUrl: 'product-detail.html',
  styleUrls: ['/pages/product/product-detail.scss'],
  providers: [CatalogService, RadioAlertService]
})
export class ProductDetailPage {
  product = {size: [], photo: ''};
  showDescription = false;
  showSize = false;
  showMaterial = false;
  like = false;
  wishlists = [];
  sessionInfo = null;
  public productId:any;

  constructor(public navCtrl: NavController, private catalogService: CatalogService, private wishlistService: WishlistService, private radioAlertService: RadioAlertService, private likesService: LikesService, private sessionService: SessionService, params: NavParams) {
    this.productId = params.get('productId');
  }

  getSessionInfo() {
    return this.sessionService.getSessionInfo()
    .then(result => {
      this.sessionInfo = result;
    });
  }

  getProductById() {
    return this.catalogService.getProductById(this.productId)
    .then((result: any) => {
      this.product = result;
    })
  }

  getUserWishlists() {
    return this.wishlistService.getUserWishlists()
    .then((result: any) => {
      this.wishlists = result;
    });
  }

  isProductLiked() {
    let userId = this.sessionInfo.passport.user;
    return this.likesService.getLikeStatus(userId, this.productId)
    .then((result: any) => {
      this.like = result.productId ? true : false;
    })
  }

  initialize() {
    this.getProductById()
    .then( result => {
      return this.getUserWishlists();
    })
    .then( result => {
      return this.getSessionInfo();
    })
    .then( result => {
      return this.isProductLiked();
    })
  }

  ngOnInit() {
    this.initialize();
  }

  showIcon(category) {
    if (category) {
      return 'ios-remove-circle-outline';
    } else {
      return 'ios-add-circle-outline';
    }
  }

  toggleDescription() {
    this.showDescription = !this.showDescription;
  }

  toggleSize() {
    this.showSize = !this.showSize;
  }

  toggleMaterial() {
    this.showMaterial = !this.showMaterial;
  }

  showLike(){
   return this.like;
  }

  toggleLike(){
   this.like = !this.like;
   let userId = this.sessionInfo.passport.user;
   if(this.like && userId) this.likesService.likeItem(userId, this.productId);
   if(!this.like && userId) this.likesService.unlikeItem(userId, this.productId);
  }

  addProductWishlist(wishlists) {
    this.radioAlertService.doRadio(wishlists, this.productId);
  }
}
