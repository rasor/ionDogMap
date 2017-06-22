import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';

/*
  Generated class for the GeolocationProvider provider
  by ionic generate provider geolocation.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

// https://gist.github.com/sasha7/0c32f3686eb49d44ccc8
// https://github.com/arunisrael/angularjs-geolocation/blob/master/src/geolocation.js
const GEOLOCATION_ERRORS = {
	'errors.location.unsupportedBrowser': 'Browser does not support location services',
	'errors.location.permissionDenied': 'You have rejected access to your location',
	'errors.location.positionUnavailable': 'Unable to determine your location',
	'errors.location.timeout': 'Service timeout has been reached'
};

@Injectable()
export class GeolocationProvider {

  public currPos: any;
  //constructor(public http: Http) {
  constructor() {
    console.info('GeolocationProvider ctor');
  }

	/**
	 * Obtains the geographic position, in terms of latitude and longitude coordinates, of the device.
	 * @param {Object} [opts] An object literal to specify one or more of the following attributes and desired values:
	 *   - enableHighAccuracy: Specify true to obtain the most accurate position possible, or false to optimize in favor of performance and power consumption.
	 *   - timeout: An Integer value that indicates the time, in milliseconds, allowed for obtaining the position.
	 *              If timeout is Infinity, (the default value) the location request will not time out.
	 *              If timeout is zero (0) or negative, the results depend on the behavior of the location provider.
	 *   - maximumAge: An Integer value indicating the maximum age, in milliseconds, of cached position information.
	 *                 If maximumAge is non-zero, and a cached position that is no older than maximumAge is available, the cached position is used instead of obtaining an updated location.
	 *                 If maximumAge is zero (0), watchPosition always tries to obtain an updated position, even if a cached position is already available.
	 *                 If maximumAge is Infinity, any cached position is used, regardless of its age, and watchPosition only tries to obtain an updated position if no cached position data exists.
	 * @returns {Promise} An promise to fetch with .then().catch() with the geographical location of the device running the client and the error in the catch.
	 */
  public getLocation(opts){
    var promise = new Promise((resolve, reject) => {

			if (window.navigator && window.navigator.geolocation) {
				window.navigator.geolocation.getCurrentPosition(
					(position) => {
            resolve(position);
						//observer.next(position);
            //observer.complete();
					},
					(error) => {
						switch (error.code) {
							case error.PERMISSION_DENIED:
                {throw new Error(GEOLOCATION_ERRORS['errors.location.permissionDenied'])}
								//observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
								//break;
							case error.POSITION_UNAVAILABLE:
                {throw new Error(GEOLOCATION_ERRORS['errors.location.positionUnavailable'])}
								//observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
								//break;
							case error.TIMEOUT:
                {throw new Error(GEOLOCATION_ERRORS['errors.location.timeout'])}
								//observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
								//break;
						}
					},
					opts);
			}
			else {
        {throw new Error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser'])}
				//observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
			}
    });
    return promise;
  }

  //Demo caller
  callGetLocation(){
    this.getLocation({})
      .then((pos: Position) => {
        console.log(pos);
        this.currPos = pos;
      })
      .catch((err) => console.error(err));
  }

  //Promise snippet
  error = true;
  doAsyncTask() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Work Complete");
        if (this.error) {
          {throw new Error("fail")}
        } else {
          resolve("done");
        }
      }, 1000);
    });
    return promise;
  }

  callAsyncTask(){
    this.doAsyncTask()
      .then((val) => {
        console.log('doAsyncTask():'+JSON.stringify(val));
        //console.log(val);
      })
      .catch((err) => {
        console.error('doAsyncTask() failed:'+JSON.stringify(err));
        //console.error(err);
      });
  }

}
