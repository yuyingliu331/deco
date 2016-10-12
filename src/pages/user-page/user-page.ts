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

  login(name) {
    //need to moniter it and close it when it redirects to callback
    let browserRef = window.cordova.InAppBrowser.open('http://gh-deco.herokuapp.com/auth/' + name);
    browserRef.addEventListener("loadstart", (event) => {
      console.log('event.url',event.url);
      if ((event.url).indexOf("http://gh-deco.herokuapp.com/auth/" + name + "/callback") === 0) {
        browserRef.removeEventListener("exit", (event) => {});
        browserRef.close();
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

