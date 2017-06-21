import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';

@Component({
  selector: 'page-tab-map',
  templateUrl: 'tab-map.html'
})
export class TabMapPage {
  map;

  constructor(public navCtrl: NavController) {
    this.showMap();
  }

  showMap() {
      setTimeout(() => {
          this.map = leaflet.map("map").setView([42.361132, -71.070876], 14);
          leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
              attribution: 'Tiles &copy; Esri'
          }).addTo(this.map);
          //this.showMarkers();
      })
  }

}
