import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LikesService } from '../../providers/likes-service';

@Component({
  selector: 'user-likes',
  templateUrl: 'likes.html'
})
export class LikesPage {
  @Input() sessionInfo;
  products = [];

  constructor(public navCtrl: NavController, private likesService: LikesService){
  }

  getUserLikes() {
    if(this.sessionInfo && this.sessionInfo.passport) {
      this.likesService.getUserLikes(this.sessionInfo.passport.user)
      .then(result => {
        return this.likesService.getUserLikeProducts(result);
      })
      .then(results => {
        this.products = results;
      })
    }
  }

  ngOnInit() {
    this.getUserLikes();
  }
}
