import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabMapPage } from '../pages/tab-map/tab-map';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GeolocationProvider } from '../providers/geolocation/geolocation';

//npm
//import { CandTLeafletComponent  } from 'ngx.leaflet.components';
//import { CandTLeafletService } from 'ngx.leaflet.components';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabMapPage,
    TabsPage
    //, CandTLeafletComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabMapPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //CandTLeafletService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeolocationProvider
  ]
})
export class AppModule {}
