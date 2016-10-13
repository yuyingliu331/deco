import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessionService } from '../../providers/session-service';

declare var window: any;

@Component({
  templateUrl: 'user-page.html'
})
export class UserPage {
  session = {passport: ''};
  userView = 'wishlists';
  selected: string;

  constructor(public navCtrl: NavController, private sessionService: SessionService, private params: NavParams) {
    this.selected = 'wishlists';
  }

  changeSegment(segment) {
    this.userView = segment;
  }

  getSessionInfo() {
    this.sessionService.getSessionInfo()
    .then((result : any) => {
      this.session = result;
    });
  }

  ngOnInit() {
    this.getSessionInfo();
  }

  //load auth process in inappbrowser, close when redirects to callback
  login(name) {
    let browserRef = window.cordova.InAppBrowser.open('http://gh-deco.herokuapp.com/auth/' + name, '_blank', 'location=yes');
    let authCallback = "http://gh-deco.herokuapp.com/auth/" + name + "/callback";
    browserRef.addEventListener("loadstart", (event) => {
      if ((event.url).indexOf(authCallback) != -1 || event.url == authCallback) {
        browserRef.close();
        browserRef.removeEventListener("loadstart", (event) => {});
      }
    })
  }

  logout() {
    return this.sessionService.logoutSession()
    .then(() => {
      this.session = {passport: ''};
    });
  }
}

