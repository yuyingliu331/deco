import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';
import { WishlistService } from '../../providers/wishlist-service';
import { RadioAlertService } from '../../providers/radioAlert-service';
import { ToastService } from '../../providers/toast-service';
import { LikesService } from '../../providers/likes-service';
import { SessionService } from '../../providers/session-service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

declare var cordova;

@Component({
  templateUrl: 'product-detail.html',
  styleUrls: ['/pages/product/product-detail.scss'],
  providers: [CatalogService, RadioAlertService]
})
export class ProductDetailPage {
  product = {size: [], photo: '', product3dModel: '', modelPath: '', category: ''};
  showDescription = false;
  showSize = false;
  showMaterial = false;
  like = false;
  wishlists = [];
  sessionInfo = null;
  public productId:any;
  safeUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, private catalogService: CatalogService, private wishlistService: WishlistService, private radioAlertService: RadioAlertService, private likesService: LikesService, private sessionService: SessionService, params: NavParams, private sanitizer: DomSanitizer) {
    this.productId = params.get('productId');
  }

  getSessionInfo() {
    return this.sessionService.getSessionInfo()
    .then(result => {
      this.sessionInfo = result;
    });
  }

  getSafeUrl() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://sketchfab.com/models/' + this.product.modelPath + '/embed?autostart=1');
    return this.safeUrl;
  }

  getProductById() {
    return this.catalogService.getProductById(this.productId)
    .then((result: any) => {
      this.product = result;
    })
    .then(() => this.getSafeUrl())
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

  openVR() {
    var WikitudePlugin = cordova.require('com.wikitude.phonegap.WikitudePlugin.WikitudePlugin');

    function onUrlInvoke(url) {
      if (url.indexOf('captureScreen') > -1) {
        console.log('capturing screen!');
        WikitudePlugin.captureScreen(
          function(absoluteFilePath) {
            console.log('Screenshot successfully saved');
          },
          function (errorMessage) {
            console.log('Error saving screenshot');
          },
          true, null
        );
      } else {
          alert(url + "not handled");
      }
    }

    WikitudePlugin.isDeviceSupported(
      () => {
        console.log('supported');
        WikitudePlugin.loadARchitectWorld(
          () => {
            WikitudePlugin.callJavaScript('getModelFromNative("' + this.product.product3dModel + this.product.modelPath + '")')
            WikitudePlugin.setOnUrlInvokeCallback(onUrlInvoke)
          },
          () => {
            console.log('error loading ar');
          },
          'www/assets/ar/furniture/index.html', //url
          ['geo'],
          {
            camera_position: 'back'
          }
        );
      },
      () => {
        console.log('unsupported');
      },
      ['geo']
    );
  }
}
