# Speed Run Junior Cheatsheet Reference
List of fullstack notes: HTML, CSS, JS, JS FRAMEWORKS, NODE.JS ... for your own reference.

## Table of contents
* [Javascript](## Javascript)
* [GitHub](## GitHub)
* [SonarQube](##SonarQube)
* [Search operators](## Search operators)  
* [Tips](## Tips) 
* [Markdown](##Markdown)
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

## GitHub
### Deploy simple index.html on Github  
* Open repository.
* Create new branch called 'gh-pages'.
* Go Settings => Go GitHub Pages section => click on 'Check it out here!'.

## SonarQube
### Install a local instance on Windows:
* Download and install [sonarqube](https://www.sonarqube.org/)   
* Go to sonarqube-x.x.x.xxxxx\bin\windows-x86-64 => Run StartSonar.bat    
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

## Tips
### Captura de pantalla nativa de Windows 10 OS
#### Impr Pant
Copia la pantalla al portapaeles.
#### Alt + Impr Pant
Copia la ventana al portapapeles.
#### Windows + Mayus + S
Copia una seleccion de la pantalla al portapapeles.   
La selección se realiza con el ratón.
#### Windows + G
Abre centro de captura de imagen, tanto video como imagen fija.  
Puede hacer video de pantalla o de ventana. Opcón de sonido.
