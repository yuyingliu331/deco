import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LikesPage } from '../likes/likes';

@Component({
  templateUrl: 'user-page.html'
})
export class UserPage {
  session = {};
  userView = 'wishlists';

  constructor(public navCtrl: NavController, private params: NavParams) {
    this.session = params.get('session');
  }

  changeSegment(segment) {
    this.userView = segment;
  }
}
