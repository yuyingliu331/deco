import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LikesService } from '../../providers/likes-service';
import { SessionService } from '../../providers/session-service';

@Component({
  selector: 'user-likes',
  templateUrl: 'likes.html'
})
export class LikesPage {
  @Input() sessionInfo;
  products = [];

  constructor(public navCtrl: NavController, private likesService: LikesService, private sessionService: SessionService){
  }

  getSessionInfo = function() {
    return this.sessionService.getSessionInfo()
    .then(result => {
      this.sessionInfo = result;
    });
  }

  getUserLikes = function() {
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
    this.getSessionInfo()
    .then((result: any) =>{
      this.getUserLikes();
    });
  }
}
