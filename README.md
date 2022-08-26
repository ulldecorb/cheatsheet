# Speed Run Junior Cheatsheet Reference
List of fullstack notes: HTML, CSS, JS, JS FRAMEWORKS, NODE.JS ... for your own reference.

## Table of contents
* [CSS](#css)
   * [Media Query](#mediaquery)
   * [Initial Reset](#css-reset)
   * [Flex](#flex)
   * [Grid](#grid)
* [Javascript](#javascript)   
 * [Methods](#methods)
  * [Number methods](#number-methods)
 * [Async functions](#async-functions)
    * [API Calls](#api-calls)
    * [Free APIs](#free-apis)
* [Console](#console)
* [React](#react)
 * [Get data from api rest](https://github.com/ulldecorb/Backend-cheat-sheet)   
* [GitHub](#github)
  * [Deploy Github Project](#deploy-github-project)    
  * [Markdown](./markdown/markdown.md)
* [SASS](#sass)
* [SonarQube](#sonarqube)
* [Search operators](#search-operators)  
* [PHP](./php/php.md)   
* [Tailwind](#tailwindcss)   
* [typescrpt](./typescript/typescript.md)   
* [Test](./test/test.md)   
* [Tips](#tips) 
* [Tools](#tools)   
## CSS
### MediaQuery
```html
<style>
@media (max-width: 600px) {
  body {
    background-color: #00f;
  }
 
@media (orientation: landscape){
  .facet_sidebar {
    flex-direction: column;
  }
}
</style>
```
### CSS reset
Add on top of your css hierarchy to a more intuitive behaviour of margin and padding atributes.
```html
*,*::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
[Link to MDN about media queries](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries)
### Flex
[Flex cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
![](https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png)
### Grid
[Grid cheatsheet](https://css-tricks.com/snippets/css/complete-guide-grid/#top-of-site)
![](https://css-tricks.com/wp-content/uploads/2022/02/css-grid-poster.png)

## Javascript
### Template Literals
```
const showName = (name) => {
  console.log(`My name is ${name}`)
}

console.log(showName(John));
// expected output: My name is John

```
### Default Parameters
```
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5

```
### Destructuring
```
 const user = { name: John, surname: Doe }; 
 const { name, surname} = user
 
 console.log(name);
 // expected output: John

 console.log(surname);
 // expected output: Doe

```
### Async Functions
>Constants:
```javascript
const datos = [{
  id: 1,
  title: 'Is',
  year: 1980
},{
  id: 2,
  title: 'Your',
  year: 1990
  
},{
  id: 2,
  title: 'Job',
  year: 2000
}]
```
>Promise
```javascript
const getDatos = () => {
    return new Promise((resolve, reject) => {
    if (datos.length === 0) {
     reject(new Error('No existen datos'));
    }
    setTimeout(() => {
      resolve(datos);
    }, 1000);
  });
}
```
>then
```javascript
getDatos().then((datos) => console.log(datos));
```
>async / await
```javascript     
async function fetchingData () {
 try {
 const datosFetched = await getDatos();
 console.log(datosFetched);
 } catch (err) {
 console.log(err.message)
 }
}
  
fetchingData();
```
### API Calls
> XTMLttpRequest
```javascript
const API_URL = "http::/jsonplaceholder.typicode.com";

const xhr = new HTMLttpRequest();

function onRequesthandler() {
 if(this.readyState === 4 && this.status === 200) {
  const data = JSON.parse(this.response);
  console.log(data);
 }
}

xhr.addEventListener( 'load', onRequestHandler ); 
xhr.open( 'GET', `${API_URL}/users` );
xhr.send();
```
> readyState status:   
> 0 = UNSET, open method hasn't been called   
> 1 = OPENED, open method has been called   
> 2 = HEADERS_RECEIVED, send() method is being called   
> 3 = LOADING, the response is being received   
> 4 = DONE, operation is completed   

### Fetch
>GET fetch   
```
fetch('https://reqres.in/api/users')
.then(res => res.json())
 .then(data => console.log(data))
 .cath(error => console.log('ERROR'))
```
>POST fetch   
```
fetch('https://reqres.in/api/users', {
 method: 'POST',
 headers: {
  'Content-Type': 'application/json'
 },
 body: JSON.stringify({
  name: 'User 1'
 })
}).then(res => {
 return res.json()
 })
 .then(data => console.log(data))
 .cath(error=> console.log('ERROR'))
```

### Free APIs
https://reqres.in/api/users/    
http://pokeapi.co/api/v2/pokemon/   
http://jsonplaceholder.typicode.com/

## React
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
### Methods
#### Number methods
> Math.min()   
Math.min()    

To get the maximum and minimum element in arrays:
```javascript
const arr = [ 1, 54, 69, 34, 99 ]

Math.max(...arr) // => 99

Math.min(...arr) // => 1
```
### Console
```javascript
console.table()
```
```javascript
console.out()
```

## GitHub
### Clone github repository without git historial
Add ``` --depth ``` with value 1 on the CLI clone git repository command:
```bash
gh repo clone ulldecorb/catalan-time --depth 1
```
To add git history to a repository anytime:
```bash
git pull --unshallow
```

### Deploy Github Project
* Open repository.
* Create new branch called 'gh-pages'.
* Go Settings => Go GitHub Pages section => click on 'Check it out here!'.


## SASS
SASS \(Syntactically Awesome Style Sheets)   
Allow:   
* Attribute nesting.
* Value variables.
>_color.scss   

```bash
$colorVaribale : #FFFFFF;   
$colorVaribale : #FFFFFF;   
$colorVaribale : #FFFFFF;   
```
```bash
@mixin flex ($direction, $justify, $align) {
    display: flex;
    flex-direction: $direction;
    justify-content: $justify;
    align-items: $align;    
}
```
```bash
@import './color'
@import './mixin'
```

## SonarQube
### Install a local instance on Windows:
* Download and install [sonarqube](https://www.sonarqube.org/)   
* Go to sonarqube-x.x.x.xxxxx\bin\windows-x86-64 and run StartSonar.bat    
  On other operating systems, as a non-root user execute:   
  /opt/sonarqube/bin/[OS]/sonar.sh console
* Open browser and go to url [http://localhost:9000](http://localhost:9000)   
### Analyzing a Project
* Click the Create new project button.
* Give your project a Project key and a Display name and click the Set Up button.
* How do you want to analyze your repository? => Click 'Locally'
* Under Provide a token, select Generate a token. Give your token a name, click the Generate button, and click Continue.
* Select your project's main language under Run analysis on your project, and follow the instructions to analyze your project.   
  Here you'll download and execute a Scanner on your code (see below).
* Execute the Scanner link on your 
### Install sonar-scanner
* Download and install [sonar-scanner](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/)
* To add the 'bin' directory to the %PATH% environment variable on windows OS go to 'variables de entorno' > select 'Path' and click 'Edit' > Click 'New' and paste your computer path sonar-scanner\bin.  
*  P.E: C:\sonar-scanner-4.6.2.2472-windows\bin
*  Click 'Aceptar'

## Search operators
Browser's search search like google also has operators that can be usefull to improve your development search.   
Only apply them on input text.
* Operator for website
```site:github.com```
* Operator for date  ```before:YYYY-MM-DD``` ```after:YYYY-MM-DD```
* Operator for exact match ```"John Doe"```
* Operator OR ```dogs OR cats```
* Operator AND ```dogs AND cats```
* Operator for price € $ ```keyboard $ 300```  ```keyboard € 300```
* Operator for dictionary ```define:dog``` 
* Operator for filetype  ```CV filetype:pdf```  ```cv ext:pdf```
* Operator for web title ```intitle:react```  ```allintitle:react jest```
* Operator for url ```inurl:react```  ```allinurl:react jest```
* Operator for web body content  ```intext:react```  ```allintext: react jest```
* Operator for proximity on web body content: 
  ```react AROUND(4) jest```   
  Find react and jest word no more far away 4 words   
  There are much more operators to discover!

# [Tailwindcss](https://tailwindcss.com/docs/installation)
1. Install Tailwind CSS
```
npm install -D tailwindcss
npx tailwindcss init
```
2. Configure your template paths:
```
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
3. Add the Tailwind directives to your CSS (p.e: input.css):
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4. Start the Tailwind CLI build process:
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
Where input.css refers to point 3. And output.css refers to the style file that links on index.html or component.   
5. Start using Tailwind in your HTML:
```
<html>
<head>
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

## Tips
### Create package.json in your project
```
npm init
```
### [Specials Characters on HTML](https://ascii.cl/es/codigos-html.htm)
< - \&#60;   
&#62; - \&#62;

### Captura de pantalla nativa de Windows 10 OS
#### ```Impr Pant```
Copia la pantalla al portapaeles.
#### ```Alt + Impr Pant```
Copia la ventana al portapapeles.
#### ```Windows + Mayus + S```
Copia una seleccion de la pantalla al portapapeles.   
La selección se realiza con el ratón.
#### ```Windows + G```
Abre centro de captura de imagen, tanto video como imagen fija.  
Puede hacer video de pantalla o de ventana. Opcón de sonido.

## Tools
### Online editors
Code editors   
[JS Bin](https://jsbin.com/?html,output)   
[Codepen](https://codepen.io/pen/)   
Visual editors   
[Excalidraw](https://excalidraw.com/)   
[Figma](https://www.figma.com/)   
[Photopea](https://www.photopea.com/)   
