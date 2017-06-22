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
  map: L.Map;
  centerUsa = {
    lat: 37,
    lng: -110,
    zoom: 4
  };
  mapDefaults: L.TileLayerOptions = {
    //tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    //maxZoom: 18,
    //zoomControlPosition: 'bottomleft', //not used in ng2
    attribution: 'Tiles &copy; Esri'
  };
  _geoSvc: GeolocationProvider;

  constructor(public navCtrl: NavController, public geoSvc: GeolocationProvider) {
    this._geoSvc = geoSvc;
    this.showMap();
    this.setCurrPos();
    //this.showMarkers();
  }

  showMap() {
      setTimeout(() => {
          var mapOpts: L.MapOptions = {};
          this.map = L.map("map", mapOpts);//.setView([this.centerUsa.lat, this.centerUsa.lng], this.centerUsa.zoom);
          leaflet.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            this.mapDefaults)
          .addTo(this.map);
      })
  }

  //Center map to your location and zoom in and show your location
  setCurrPos(){
    this._geoSvc.getLocation({})
      .then((pos: Position) => {
        console.log(pos);
        this.centerUsa.lat = pos.coords.latitude;
        this.centerUsa.lng = pos.coords.longitude;
        this.centerUsa.zoom = 12;//5;
        console.log('getLocation():'+JSON.stringify(this.centerUsa));

        //http://leafletjs.com/examples/quick-start/

        //Center and zoom
        var panOpts: L.ZoomPanOptions = {};//{animate: true, duration: 200000};
        this.map.setView([this.centerUsa.lat, this.centerUsa.lng], this.centerUsa.zoom, panOpts);

        //Add marker
        var markerOpts: L.MarkerOptions = {draggable: false, title: 'Here you are', clickable: true};
        var marker = L.marker([pos.coords.latitude, pos.coords.longitude], markerOpts);
        marker.bindPopup(markerOpts.title).openPopup();
        marker.addTo(this.map);
      })
      .catch((err) => {
        console.error('getLocation() failed:'+JSON.stringify(err));
        //Center to default place if any error
        this.map.setView([this.centerUsa.lat, this.centerUsa.lng], this.centerUsa.zoom);
        //console.error(err);
      });
  }

}
