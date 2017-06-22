import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';
import { GeolocationProvider } from '../../providers/geolocation/geolocation';

@Component({
  selector: 'page-tab-map',
  templateUrl: 'tab-map.html',
  providers: [GeolocationProvider]
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
  currPos: any;
  _geoSvc: GeolocationProvider;

  constructor(public navCtrl: NavController, public geoSvc: GeolocationProvider) {
    this._geoSvc = geoSvc;
    this.showMap();
    this.currPos = this.getCurrPos()
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

  //Center map to your location and zoom in and show your location
  getCurrPos(){
    this._geoSvc.getLocation({})
      .then((pos) => {
        console.log(pos);
        this.currPos = pos;
        //this.centerUsa.lat = pos.coords.latitude;
        //this.centerUsa.lng = pos.coords.longitude;
        this.centerUsa.zoom = 5;//12;
        console.log('getLocation():'+JSON.stringify(this.centerUsa));
      })
      .catch((err) => {
        console.error('getLocation() failed:'+JSON.stringify(err));
        //console.error(err);
      });
  }

}
