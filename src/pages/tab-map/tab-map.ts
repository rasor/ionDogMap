import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';

@Component({
  selector: 'page-tab-map',
  templateUrl: 'tab-map.html'
})
export class TabMapPage {
  map;
  centerUsa = {
    lat: 37,
    lng: -110,
    zoom: 4
  };
  mapDefaults = {
    //tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    //maxZoom: 18,
    zoomControlPosition: 'bottomleft',
    attribution: 'Tiles &copy; Esri'
  };

  constructor(public navCtrl: NavController) {
    this.showMap();
  }

  showMap() {
      setTimeout(() => {
          this.map = leaflet.map("map").setView([this.centerUsa.lat, this.centerUsa.lng], this.centerUsa.zoom);
          leaflet.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            this.mapDefaults)
          .addTo(this.map);
          //this.showMarkers();
      })
  }

}
