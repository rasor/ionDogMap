import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import placesMockData from './places-mock-data';

/*
  Copy from \dreamhouse-mobile-ionic\src\providers\property-service-mock.ts
*/
@Injectable()
export class PlacesProvider {

  constructor(public http: Http) {
    console.log('PlacesProvider mock ctor');
  }

}
