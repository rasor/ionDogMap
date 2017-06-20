import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tab-map',
  templateUrl: 'tab-map.html'
})
export class TabMapPage {
  map;

  constructor(public navCtrl: NavController) {

  }

}
