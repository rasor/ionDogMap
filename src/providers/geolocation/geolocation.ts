import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GeolocationProvider provider
  by ionic generate provider geolocation.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GeolocationProvider {

  constructor(public http: Http) {
    console.log('Hello GeolocationProvider Provider');
  }

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
      .then((val) => console.log(val))
      .catch((err) => console.error(err));
  }

}
