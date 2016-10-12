import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessionService } from '../../providers/session-service';

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

  logout() {
    return this.sessionService.logoutSession()
    .then(() => {
      this.session = {passport: ''};
    });
  }
}

