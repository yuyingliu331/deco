import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var cordova;

@Component({
  templateUrl: 'argon.html',
  styleUrls: ['/pages/argon/argon.scss']
})

export class ArgonPage {

  constructor(public navCtrl: NavController, params: NavParams){
  }

  ngOnInit() {
    let tapEnabled = false;
    let dragEnabled = false;
    let toBack = true;
    let rect = {
      x: 0,
      y: 0,
      width: 300,
      height: 300
    };

    cordova.plugins.camerapreview.startCamera(rect, "rear", tapEnabled, dragEnabled, toBack);
  }

  refresh(){
    window['location'].reload();
  }

}
