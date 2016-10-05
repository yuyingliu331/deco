import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ArgonPage } from '../argon/argon';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
  			
  }

	goToArgonPage() {
    	this.navCtrl.push(ArgonPage);
	}
}
