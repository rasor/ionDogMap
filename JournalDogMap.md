## JournalDogMap.md ##
### Create project from the tabs starter project ###
#### NodeJs Shell 0:
```
ionic start ionDogMap tabs --type=ionic-angular #Create new proj from https://github.com/ionic-team/ionic2-starter-tabs
# - Following is auto done by ionic start:
#cd ionDogMap 
#npm install #Install local dependencies
#npm install --save-dev --save-exact @ionic/cli-plugin-ionic-angular@latest
#git init
#git add -A
#git commit -m "Initial commit" --no-gpg-sign
```
#### Chrome:
Optional - We want to be able to use Ionic View
https://apps.ionic.io/apps/
Create app ionDogMap
Created https://apps.ionic.io/app/e920c5f0

#### NodeJs Shell 0:
```
cd ionDogMap 
ionic login #optional - for Ionic View
ionic link #adds app_id to ionic.config.json

ionic info --verbose #Verify all ok with the Ionic project
code . #open the folder in VS Code
ionic serve #Test drive
```
#### VS Code Info:
* Info: Using TypeScript (2.3.4) for editor features. TypeScript (1.0.3.0) is installed globally on your machine.
  * Do I have to take actions on that? Skipped further check:
  * Updated user setting 'typescript.check.tscVersion' to false

#### VS Code Shell 1 (ctrl+æ on dk keyb):
```
# verifying above VS Code info:
npm list typescript #2.3.3 - from package.json
npm list -g typescript #2.3.4
tsc -v #1.0.3.0
```
Notes: 
* It seems like npm version of TypeScript is not to be compared directly with the tsc version
* Tsc is installed a lot of places on my PC under 
  * \progf\Microsoft Visual Studio\2017\
  * \progf\Microsoft VS Code\
  * C:\Users\userid\.vscode\extensions\

### Migrate Map from https://github.com/dreamhouseapp/dreamhouse-mobile-ionic
#### VS Code Shell 2:
```
#Press + to open extra terminal 2
cd ..
git clone https://github.com/dreamhouseapp/dreamhouse-mobile-ionic
cd dreamhouse-mobile-ionic
npm install #install dependencies
npm install --save-dev --save-exact @ionic/cli-plugin-ionic-angular@latest
ionic info #verify install
subl . #open the other project in sublime text to make it easy to see difference
ionic serve
ctrl-c #stop serrver

xcopy src\assets\leaflet ..\ionDogMap\src\assets\leaflet\ /e #copy map component
```
#### \ionDogMap\src\index.html:
Add leaflet.css after main.css
```
<link href="assets/leaflet/leaflet.css" rel="stylesheet">
```
#### VS Code SCM:
git commit : Copied leaflet folder

#### srv/pages/tab-map/
tab-map page added and added to 
* page tabs
* app components and module

#### VS Code SCM:
git commit : tab-map added

#### srv/pages/tab-map/
Leaflet map added

#### VS Code SCM:
git commit : Leaflet map added
git commit : ngx.leaflet.components not yet working with ionic

#### VS Code Shell 1:
```
ionic generate provider geolocation
```

#### VS Code SCM:
git commit : mapDefaults added, GeolocationProvider added
git commit : GeolocationProvider.getLocation() called in map
git commit : tab-map can center to location and add marker

#### VS Code Shell 1:
```
ionic generate provider places
```
#### VS Code SCM:
git commit : Copied places-mock-data from ionCrawling
git commit : Added to tab-map: findAll(center: any)
git commit : tab-map: showMarkers() - tmp commit
git commit : tab-map: showMarkers() - shows - and using .then

## Notes ############################################
#### ngx.leaflet.components
* Perhaps use [ngx.leaflet.components](https://www.npmjs.com/package/ngx.leaflet.components)

It is loaded via SystemJs in the instruction.

* HowTo load it with tsconfig.json? Peshaps find answer below under Bundlers

* [Sample using ngx.leaflet.components](https://github.com/elasticrash/Angular.io.MapViewer)

It both uses system.config.js and tsconfig.js

* ngx.leaflet.components depends on [@types/leaflet](https://www.npmjs.com/package/@types/leaflet)

* [ngx-leaflet-starter](https://github.com/haoliangyu/ngx-leaflet-starter) - another leaflet sample

* [leaflet.vectorgrid](https://www.npmjs.com/package/leaflet.vectorgrid) - a leaflet extension for making your own vector layers

* [Leaflet.Icon.Glyph](https://github.com/Leaflet/Leaflet.Icon.Glyph) - add your own icons to [map pointers](https://leaflet.github.io/Leaflet.Icon.Glyph/demo.html)

### Bundlers (SystemJs, WebPack, Browserify) ###
* [Ionic app-scripts](https://ionicframework.com/docs/developer-resources/app-scripts/) - gulp replacement

* [tsconfig fix for Cannot find name 'module'](https://stackoverflow.com/questions/36700693/typescript-error-in-angular2-code-cannot-find-name-module) using `typeRoots`

* Notes on [SystemJs](https://stackoverflow.com/questions/38263406/what-are-differences-between-systemjs-and-webpack)

* Guide for [jQWidgets using SystemJs and TsConfig](http://www.jqwidgets.com/jquery-widgets-documentation/documentation/angular2/angular2.htm)

* A little note on [Bundles in Ionic](https://www.npmjs.com/package/ionic-angular): _SystemJS bundle is primarily meant to be included in a `<script>` tag for demos_.

* [ts-helpers](https://npm.taobao.org/package/ts-helpers) might be needed for compiling?

### Links ###
* [markdown-cheatsheet](https://github.com/rasor/markdown-cheatsheet)
#### Ionic 2
* [Starters, plugins and themes](https://market.ionic.io/starters/)
* [Augmented Reality starter](https://market.ionic.io/starters/wikitude-ionic-2-starter-app)
* [ionic generate](https://ionicframework.com/docs/cli/generate/)
* [How to debug Typescript in Ionic 2 Apps using VS Code](https://forum.ionicframework.com/t/how-to-debug-typescript-in-ionic-2-apps-using-vs-code-and-app-scripts-0-0-46/70023/1) - Well - instead just set debug in chrome. It will still break in your .ts files.
* [Only inject service provider in parent component](https://ionicframework.com/docs/troubleshooting/#multiple-instances-of-a-provider)
* [Custum ionic/ng2 npm module](https://github.com/ionic-team/ionic-module-template)
* [getLocation using plugin](http://tphangout.com/ionic-2-geolocation-and-geocoding/)
* Don't use [npm install typings](http://blog.ionic.io/ionic-and-typings/)
#### ng 2
* Book: [angular-2-from-theory-to-practice](https://codecraft.tv/assets/resources/angular-2-from-theory-to-practice-v1.0.1.pdf)
* [ng generate](https://github.com/angular/angular-cli/wiki/generate)
* [ng2 UI components](https://ng2-ui.github.io/dist/#/getting-started)
* [jQWidgets for ng4](http://www.jqwidgets.com/angular/)
* [ng4 google maps component](https://angular-maps.com/guides/getting-started/)
* [ng4 google maps sample](https://github.com/robisim74/angular-maps)
* [ng2 getLocation sample](https://gist.github.com/sasha7/0c32f3686eb49d44ccc8)
#### ng 1
* [[ng1 getLocation using promise module](https://github.com/arunisrael/angularjs-geolocation/blob/master/src/geolocation.js) - used in ionCrawling
#### Other
* [RunKit](https://npm.runkit.com/angular2-leaflet) for exec node.js scripts having 400k npm packages pre installed.

The end.
