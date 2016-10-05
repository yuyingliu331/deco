import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HomePage} from '../home/home';

@Component({
  templateUrl: 'menu.html',
  styleUrls: ['/pages/menu/menu.scss']
})
export class MenuPage {
	constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
	}
	goHomePage() {
		this.navCtrl.push(HomePage);
	}
}
