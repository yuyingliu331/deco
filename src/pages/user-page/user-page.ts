import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessionService } from '../../providers/session-service';

declare var window: any;

@Component({
  templateUrl: 'user-page.html'
})
export class UserPage {
  session = {passport: ''}
  userView = 'wishlists';
  selected: string;
  user = false;

  constructor(public navCtrl: NavController, private sessionService: SessionService, private params: NavParams, private changeDetector: ChangeDetectorRef) {
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
    browserRef.addEventListener("exit", (event) => {
      this.sessionService.getSessionInfo()
     .then((result : any) => {
       this.session = result;
     });

      browserRef.removeEventListener("exit", (event) => {});
    })
    this.user = true;
  }

  logout() {
    return this.sessionService.logoutSession()
    .then(() => {
      this.session = {passport: ''};
      this.user = false;
    });
  }
}

