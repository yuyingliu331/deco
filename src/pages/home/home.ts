import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ArgonPage } from '../argon/argon';

declare var cordova;

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {}

  goToArgonPage() {
    this.navCtrl.push(ArgonPage);
  }

  wikitude() {
    var WikitudePlugin = cordova.require('com.wikitude.phonegap.WikitudePlugin.WikitudePlugin');

    WikitudePlugin.isDeviceSupported(
      () => {
        console.log('supported');
        WikitudePlugin.loadARchitectWorld(
          () => {
            WikitudePlugin.setOnUrlInvokeCallback((url) => {
              console.log('callback url: ' + url);
            });

          },
          () => {
            console.log('error loading ar');
          },
          'www/assets/ar/dog/index.html', //url
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

