# Speed Run Junior Cheatsheet Reference
List of fullstack notes: HTML, CSS, JS, JS FRAMEWORKS, NODE.JS ... for your own reference.

## Table of contents
* [Javascript](## JAVASCRIPT METHODS)
* [GitHub](## GitHub)
* [SonarQube](##SonarQube)   
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
* Settings / GitHub Pages / click on 'Check it out here!'.


