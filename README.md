# ionDogMap README.md

## What is this?
This is a Ionic V3/ng V4 project for a near-me app for dog owners

The app has 3 main tabs
* Map
* List of places
* Settings

The places on the map is divided into one or more of the categories
* Hotel: 'ion-home',
* Restaurant: 'ion-fork',
* Shop: 'ion-ios-cart',
* Wellness: 'ion-happy',
* Park: 'ion-leaf',
* Beautysalon: 'ion-scissors',
* Hospital: 'ion-ios-medkit',
* Photographer: 'ion-camera',
* Travel: 'ion-briefcase',
* Pension: 'ion-archive',
* Contest: 'ion-trophy',
* School: 'ion-university',
* Event: 'ion-arrow-shrink'

Places are shown with an icon corresponding to its category.

Depending of what the time allows the todo list contains:
* Goto jump to place details from map
* Add gallery with for intro and help
* Replace hardcoded places with places from various APIS
(unfortunately the generated dummy data includes lots op places in the oceans and the coordinates doen not fit with their address)
* Add central DB, so ratings and perhaps new places can be stored
* Add ratings to various pages
* Add "New Place" page
* Add favorites list and store it in local DB
* Manage favorites from settings page

# Credits
## Base projects
The projects base is from three projects
* <https://github.com/ionic-team/ionic2-starter-tabs> for getting an up-to-date Ionic V3 tabs starter
* <https://github.com/rasor/dreamhouse-mobile-ionic> for getting Ionic V3 code using leaflet
* <https://github.com/rasor/angularattack2017-crawling> for getting some Ionic V1 code that needs update to V3 and further development

## Credits from angularattack2017-crawling
This app was based on a sample from [Ahmed Alparslan Özdemir](https://github.com/alparslanahmed/MekanBul).  Thank you.

Uses the [Angular Leaflet Directive](https://tombatossals.github.io/angular-leaflet-directive/) by [David Rubert](https://github.com/tombatossals).

Of course, it wouldn't exist without the fine folks from [Drifty](http://www.drifty.com) and the [Ionic Framework Team](http://ionicframework.com).

<div>
	<div>Icons made by <a href="http://www.flaticon.com/authors/scott-de-jonge" title="Scott de Jonge">Scott de Jonge</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
	<div>Icons made by <a href="http://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
	<div>Icons made by <a href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
	<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
	<div>Icons made by <a href="http://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
</div>

# Old README.md below ------------------

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

