# Speed Run Junior Cheatsheet Reference
List of fullstack notes: HTML, CSS, JS, JS FRAMEWORKS, NODE.JS ... for your own reference.

## Table of contents
* [Javascript](#Javascript)   
* [React](#react)
* [GitHub](#github)
* [SonarQube](#sonarQube)
* [Search operators](#search-operators)  
* [Tailwind](#tailwindcss)
* [Tips](#tips) 
<!-- * [Markdown](#markdown) -->
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
    'comma-dangle': [2, 'never'],
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows']
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

## GitHub
### Deploy simple index.html on Github  
* Open repository.
* Create new branch called 'gh-pages'.
* Go Settings => Go GitHub Pages section => click on 'Check it out here!'.

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

# Tailwindcss
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
