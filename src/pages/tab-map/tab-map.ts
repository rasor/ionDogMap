import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';
import { GeolocationProvider } from '../../providers/geolocation/geolocation';
import { PlacesProvider } from '../../providers/places/places-mock';

@Component({
  selector: 'page-tab-map',
  templateUrl: 'tab-map.html',
  providers: [
    GeolocationProvider,
    PlacesProvider
  ]
})

/**
 * Copy from \dreamhouse-mobile-ionic\src\pages\property-list\property-list.ts
 */
export class TabMapPage implements OnInit {
  map: L.Map;
  markersGroup;//: leaflet.LayerGroup;
  places: Array<any>;

  centerUsa :any = {
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

  constructor(
    public navCtrl: NavController,
    public geoSvc: GeolocationProvider,
    public placesSvc: PlacesProvider
    )
  {
  }

  public ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.showMap()
      .then(() => this.setCurrPos())
      .then(() => this.findAll(this.centerUsa))
      .then(() => this.showMarkers())
      .catch((err) => {
        console.error('showMap() or following failed:'+JSON.stringify(err));
      });
  }

  showMap() {
      var mapOpts: L.MapOptions = {};
      this.map = L.map("map", mapOpts);//.setView([this.centerUsa.lat, this.centerUsa.lng], this.centerUsa.zoom);
      leaflet.tileLayer(
        'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        this.mapDefaults)
      .addTo(this.map);
      return Promise.resolve("done");
  };

  //Center map to your location and zoom in and show your location
  setCurrPos(){
    this.geoSvc.getLocation({})
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
      });
  };

  /**
   * Load the markers from the places svc near center
   * Copy from \dreamhouse-mobile-ionic\src\pages\property-list\property-list.ts
   * @memberof TabMapPage
  */
  findAll(center: any){
    this.placesSvc.findAll()
      .then(data => this.places = data)
      .catch((err) => {
        console.error('getLocation() failed:'+JSON.stringify(err));
      });
  };

  /**
   * Show the loaded markers.
   * Copy from \dreamhouse-mobile-ionic\src\pages\property-list\property-list.ts
   * and from /ionCrawling/www/js/controllers.js
   * @memberof TabMapPage
   */
  showMarkers(){
    if (this.markersGroup) {
      this.map.removeLayer(this.markersGroup);
    }
    this.markersGroup = leaflet.layerGroup([]);
    this.places.forEach(place => {
      let coords = place.coords.split(', ');
      place.lat = parseFloat(coords[0]);
      place.long = parseFloat(coords[1]);
      if (place.lat, place.long) {
        let marker: leaflet.Marker = leaflet.marker([place.lat, place.long]);//.on('click', event => this.openPlaceDetail(event.target.data));
        //marker.data = place;
        this.markersGroup.addLayer(marker);
      }
    });
    this.map.addLayer(this.markersGroup);
  };
}
