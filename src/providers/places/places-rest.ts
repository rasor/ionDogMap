import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

/*
  Copy from \dreamhouse-mobile-ionic\src\providers\property-service-rest.ts
*/
@Injectable()
export class PlacesProvider {

  constructor(public http: Http) {
    console.log('PlacesProvider rest ctor');
  }
}
