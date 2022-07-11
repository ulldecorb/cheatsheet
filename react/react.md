# React
Install:
```
$ npx create-react-app my-app
```
```
$ npx eslint --init
```
If you work on Windows OS add this rules to eslintrc.js file:
```
rules: {
  "comma-dangle": [2, "never"],
  "linebreak-style": 0,
  "global-require": 0,
  "eslint linebreak-style": [0, "error", "windows"]
  }
```
If you want allow react on .js files add this rules to eslintrc.js file:
```
rules: {   
 "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]   
}   
```
```
$ npm i -S prop-types
$ npm i -S react-router
$ npm i -S react-router-dom
```
```
$ npm i redux
$ npm i react-redux
```
```
$ npm i redux-thunk
$ npm i axios
```
To extend test coverage go to package.json file and edit test script:   
```
"test" :  "react-scripts test --watchAll --collect-coverage"
```
uuid library - Automatic generator of Ids   
```
npm i uuid
```
```
import {v4 as uuidv4} from 'uuid';

let myuuid = uuidv4();

console.out('Your UUID is: ' + myuuid);
```
