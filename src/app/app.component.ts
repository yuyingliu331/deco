import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { CatalogPage } from '../pages/catalog/catalog';
import { WishlistsPage } from '../pages/wishlists/wishlists';
import { UserPage } from '../pages/user-page/user-page';
import { SessionService } from '../providers/session-service';

@Component({
  templateUrl: `../pages/menu/menu.html`

})
export class MyApp {
  @ViewChild('mycontent') nav
  rootPage = HomePage;

  constructor(platform: Platform, private menu: MenuController, private sessionService: SessionService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }


  goToCatalogPage() {
    this.nav.push(CatalogPage);
    this.menu.close();
  }

  goToUserHome(session) {
    this.sessionService.getSessionInfo()
    .then( session => {
      this.nav.push(UserPage, {session});
      this.menu.close();
    });
  }
}
