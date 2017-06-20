## JournalDogMap.md
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

### Links ###
* <https://github.com/rasor/markdown-cheatsheet>

The end.
