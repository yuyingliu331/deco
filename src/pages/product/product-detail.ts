import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CatalogService } from '../../providers/catalog-service';
import { WishlistService } from '../../providers/wishlist-service';
import { RadioAlertService } from '../../providers/radioAlert-service';
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
  product = {size: [], photo: '', product3dModel: '', modelPath: '', category: '', scale: ''};
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
    if(this.sessionInfo.passport) {
      return this.wishlistService.getUserWishlists()
      .then((result: any) => {
        this.wishlists = result;
      });
    }
  }

  isProductLiked() {
    if(this.sessionInfo.passport) {
      let userId = this.sessionInfo.passport.user;
      return this.likesService.getLikeStatus(userId, this.productId)
      .then((result: any) => {
        this.like = result ? true : false;
      })
    }
  }

  initialize() {
    this.getProductById()
    .then((result: any) => {
      return this.getSessionInfo();
    })
    .then((result: any) => {
      return this.getUserWishlists();
    })
    .then((result: any) => {
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
   if(this.sessionInfo.passport) {
     this.like = !this.like;
     let userId = this.sessionInfo.passport.user;
     if(this.like && userId) this.likesService.likeItem(userId, this.productId);
     if(!this.like && userId) this.likesService.unlikeItem(userId, this.productId);
   } else {
     this.radioAlertService.loginAlert();
   }
  }

  addProductWishlist(wishlists) {
    if(this.sessionInfo.passport) {
      this.radioAlertService.doRadio(wishlists, this.productId, this.sessionInfo.passport.user)
      if(this.radioAlertService.refreshWishlists) this.getUserWishlists();
    } else {
      this.radioAlertService.loginAlert();
    }
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
        console.log('going to assets/' + this.product.product3dModel + this.product.scale);
        WikitudePlugin.loadARchitectWorld(
          () => {
            WikitudePlugin.callJavaScript('getModelFromNative("' + this.product.product3dModel + this.product.scale + '")')
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
