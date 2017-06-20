## JournalDogMap.md
### NodeJs Shell:
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
### Chrome:
Optional - We want to be able to use Ionic View
https://apps.ionic.io/apps/
Create app ionDogMap
Created https://apps.ionic.io/app/e920c5f0

### NodeJs Shell:
```
cd ionDogMap 
ionic login #optional - for Ionic View
ionic link #adds app_id to ionic.config.json

ionic info --verbose #Verify all ok with the Ionic project
code . #open the folder in VS Code
ionic serve #Test drive
```
### VS Code Info
* Info: Using TypeScript (2.3.4) for editor features. TypeScript (1.0.3.0) is installed globally on your machine.
  * Do I have to take actions on that? Skipped further check:
  * Updated user setting 'typescript.check.tscVersion' to false

### VS Code Shell (ctrl+æ on dk keyb):
```
# verifying above VS Code info:
npm list typescript #2.3.3 - from package.json
npm list -g typescript #2.3.4
tsc -v #1.0.3.0
```

### Links
* <https://github.com/rasor/markdown-cheatsheet>

The end.
