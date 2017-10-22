## JournalDogMap.md ##

This is branch `B3`.

* Branch `master` was created 3 month ago. The map gave me some trouble. I wanted to start over without the map added.
  * JournalDogMap from [master](https://raw.githubusercontent.com/rasor/ionDogMap/master/JournalDogMap.md){:target="_blank"}
* Branch `B2` i continued from master before the map was added. I had updated to node.js v8 and ran into some upgrade troubles - they were fixed. But then I thought - what else has been upgraded (of the CLI and package.json etc)? 
* So then I created this B3 (all back from the start of master) and restarted with yet another tabs starter.

```bash
# from project folder create an Ionic starter app
ionic start ionDogMap tabs --type=ionic-angular #Create new proj from https://github.com/ionic-team/ionic2-starter-tabs
ionic serve # see what was provided
git commit -a -m "Downloaded latest ionic2-starter-tabs"

# Connected to Ionic Pro - https://rasor.github.io/using-ssh-keys-connect-to-ionic-pro.html
git remote -v # check that there are two remotes 
```

Add map page

```bash
# https://ionicframework.com/docs/cli/generate/
ionic g page tab-map --no-module
ionic g component map
```




---------------------------------


## Repos

* git remote -v
* |origin|https://github.com/rasor/ionDogMap.git|
* |ionic|git@git.ionicjs.com:rasor88/iondogmap.git|

# Links

* [Awesome CLI - JS on Windows](https://github.com/rasor/awesome-config/blob/master/awesome-cli-js.md)
* [Awesome Angular](https://github.com/rasor/awesome-tables/blob/master/awesome-angular-tables.md)
* [MobileTest.me](http://mobiletest.me/htc_one_emulator/?u=https://yagolopez.github.io/ng-dashboard/dist)
* [ionic SASS variables](https://ionicframework.com/docs/theming/overriding-ionic-variables/)
* [Ionic Troubleshooting](https://ionicframework.com/docs/troubleshooting/)
* [3rd party libs](http://ionicframework.com/docs/developer-resources/third-party-libs/#type-definitions)
* [The Future of Declaration Files](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/)
* [TypeScript Types Search](http://microsoft.github.io/TypeSearch/)
* [packages depending on ‘@types/leaflet’](https://www.npmjs.com/browse/depended/@types/leaflet)
* [Code from book build-mobile-apps-w-ionic-2-firebase](https://github.com/Apress/build-mobile-apps-w-ionic-2-firebase)


The End
