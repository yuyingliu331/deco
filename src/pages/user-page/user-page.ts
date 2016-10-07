import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessionService } from '../../providers/session-service';
import { WishlistsPage } from '../wishlists/wishlists';


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
