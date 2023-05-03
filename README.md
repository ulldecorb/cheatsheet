# Ever Junior Cheat Sheet
List of fullstack notes: HTML, CSS, JS, JS FRAMEWORKS, NODE.JS ... for your own reference.

## Table of contents
* [CSS](https://github.com/ulldecorb/speed-run-cheatsheet/tree/main/css/css.md)
* [Javascript](https://github.com/ulldecorb/speed-run-cheatsheet/blob/main/javascript/javascript.md)   
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
* [Windows](#windows) 

## React
>Create React App      
   
Javascript react app:
```
$ npx create-react-app my-app
```
[Typescript](https://create-react-app.dev/docs/adding-typescript/#installation) react app:
```bash
$ npx create-react-app my-app --template typescript
```
>Add Lintern
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

## Windows 
### Host file redirect web name shortcut
Go to file <code>c:Windows/System32/drivers/etc/host</code> and open on your favorite text editor.    
Write a browser direction ( localhost, http...) and a name to refer that direction.   
After safe the file, you can type the name on any browser on your system and will redirect to the direction associated.   
Usefull for develop tests but quite confusing for any unconscientious teammate.
```bash
127.0.0.1   myweb.com
```
