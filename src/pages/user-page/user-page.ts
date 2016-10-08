import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessionService } from '../../providers/session-service';

@Component({
  templateUrl: 'user-page.html'
})
export class UserPage {
  session = {};
  userView = 'wishlists';

  constructor(public navCtrl: NavController, private sessionService: SessionService, private params: NavParams) {
  }

  changeSegment(segment) {
    this.userView = segment;
  }

  getSessionInfo() {
    this.sessionService.getSessionInfo()
    .then(result => {
      this.session = result;
    });
  }

  ngOnInit() {
    this.getSessionInfo();
  }
}
