# Node.js speed cheatlist
## Table of content
[Install](#install)   
[Dependencies](#dependencies)   
+ [Express](#express)   
+ [Mongoose](#mongoose)   
+ [Nodemon](#nodemon)
+ [Debug](#debug)      
+ [Chalk](#chalk)   
+ [Ejs](#ejs)   
+ [Morgan](#morgan)   
+ [Dotenv](#dotenv)   
+ [Body Parser](#body-parser)   
+ [Cors](#cors)   

## Install
```bash
npm init -y
```

## Dependencies
### EXPRESS
```bash
npm i express
```
### MONGOOSE   
To connect Data Base.
```bash
npm i mongoose
```
### NODEMON   
Watch changes on code and restart server. Type <code>rs</code> on terminal to force restart.
```bash
npm i nodemon
```
On package.json, replace 'node' to 'nodemon' on scripts.start:
```json
"scripts": {
    "start": "nodemon app.js"
}
```
### DEBUG   
A tiny JavaScript debugging utility modelled after Node.js core's debugging technique.   
Works in Node.js and web browsers.
```bash
npm install debug
```
### CHALK   
Color your console messages.    
Animated version is available on npm chalk-animated.
```bash
npm i chalk
```
```node
console.log(chalk.red('This message will print on red color');
```
### EJS   

```bash
npm i ejs
```
### MORGAN   

```bash
npm i morgan
```
### DOTENV   

```bash
npm i dotenv
```
### BODY PARSER   

```bash
npm i body-parser
```
```node
const bodyParser = require('body-parser');

app.use(bodyParser.json());
```
### CORS   
Allow Cross-origin resource sharing.
```bash
npm i cors
```
```node
const cors = require('cors');

app.use(cors());
```
