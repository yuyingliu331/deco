import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  styles: ['/pages/ar-view/ar-view.scss'],
  templateUrl: 'ar-view.html'
})
export class ARView {
  constructor(private navCtrl: NavController) {

  }

  refresh(){
    window['location'].reload();
  }
}
