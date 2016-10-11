import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user-page/user-page';
import { SessionService } from '../providers/session-service';
import { WishlistService } from '../providers/wishlist-service';
import { ToastService } from '../providers/toast-service';
import { LikesService } from '../providers/likes-service';
import { BrowsePage } from '../pages/browse/browse';

@Component({
  template:
  `<ion-tabs>
      <ion-tab tabIcon="home" tabTitle="Home" icon-off="ion-ios-filing-outline" icon-off="ion-ios-filing-outline" class="home" [root]="home"></ion-tab>
      <ion-tab tabIcon="search" tabTitle="Browse" [root]="catalog" icon-off="ion-ios-filing-outline" icon-off="ion-ios-filing-outline"></ion-tab>
      <ion-tab tabIcon="information-circle" tabTitle="Profile" [root]="profile"></ion-tab>
    </ion-tabs>`,
    styleUrls: ['/src/app/app.component.scss'],
  providers: [WishlistService, SessionService, ToastService, LikesService]
})
export class MyApp {
  @ViewChild('mycontent') nav

  home: any;
  catalog: any;
  profile: any;

  constructor(platform: Platform ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

    this.home = HomePage;
    this.catalog = BrowsePage;
    this.profile = UserPage;
  }
}
