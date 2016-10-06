import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';
import { WishlistService } from '../../providers/wishlist-service';
import { RadioAlertService } from '../../providers/radioAlert-service';

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
  public productId:any;

  constructor(public navCtrl: NavController, private catalogService: CatalogService, private wishlistService: WishlistService, private radioAlertService: RadioAlertService, params: NavParams) {
    this.productId = params.get('productId');
  }

  getProductById() {
    this.catalogService.getProductById(this.productId)
    .then((result: any) => {
      this.product = result;
    })
  }

   getUserWishlists() {
    this.wishlistService.getUserWishlists()
    .then((result: any) => {
      this.wishlists = result;
    });
  }

  ngOnInit() {
    this.getProductById();
    this.wishlists = this.getUserWishlists();
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
  }

  addProductWishlist(wishlists) {
    this.radioAlertService.doRadio(wishlists, this.productId)
  }
}
