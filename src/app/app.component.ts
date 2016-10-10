import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { CatalogPage } from '../pages/catalog/catalog';
import { UserPage } from '../pages/user-page/user-page';
import { SessionService } from '../providers/session-service';
import { WishlistService } from '../providers/wishlist-service';
import { ToastService } from '../providers/toast-service';
import { LikesService } from '../providers/likes-service';

@Component({
  template:
  `<ion-tabs>
      <ion-tab tabIcon="home" tabTitle="home" [root]="home"></ion-tab>
      <ion-tab tabIcon="search" tabTitle="browse" [root]="catalog"></ion-tab>
      <ion-tab tabIcon="information-circle" tabTitle="profile" [root]="profile"></ion-tab>
    </ion-tabs>`,
  providers: [WishlistService, SessionService, ToastService, LikesService]
})
export class MyApp {
  @ViewChild('mycontent') nav

  home: any;
  catalog: any;
  profile: any;

  constructor(platform: Platform, private menu: MenuController, ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

    this.home = HomePage;
    this.catalog = BrowsePage;
    this.profile = UserPage;
  }


  goToCatalogPage() {
    this.nav.push(CatalogPage);
    this.menu.close();
  }

  goToUserHome() {
    this.nav.push(UserPage);
    this.menu.close();
  }
}
