import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { CatalogPage } from '../pages/catalog/catalog';

declare var cordova;

@Component({
  templateUrl: `../pages/menu/menu.html`,
  styles: [`
    html, body, ion-content, ion-page, ion-app, .nav-decor {
      background-color: transparent !important;
    }
  `]
})
export class MyApp {
  @ViewChild('mycontent') nav
  rootPage = HomePage;

  constructor(platform: Platform, private menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      let tapEnabled = false;
      let dragEnabled = false;
      let toBack = true;
      let rect = {
        x: 0,
        y: 0,
        width: platform.width(),
        height: platform.height()
      };

      cordova.plugins.camerapreview.startCamera(rect, "rear", tapEnabled, dragEnabled, toBack);
    });
  }

  goToCatalogPage() {
    this.nav.push(CatalogPage);
    this.menu.close();
  }
}
