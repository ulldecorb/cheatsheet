# Javascript
## Table of contents
* [Topics](#topics)  
  * [Template Literals](#template-literals)
  * [Default Parameters](#default-parameters)
  * [Destructuring](#destructuring)
  * [Rest Operator](#rest-operator)
* [userAgent](#userAgent)
* [Async functions](#async-functions)
    * [Free APIs to code](#free-apis)
* [DOM](#dom)
* [BOM](#bom)
* [Hot Tips](#hot-tips)
## Topics
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
### Rest operator
```bash
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```


## Navigator.userAgent   
```bash
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
```
## Async Functions
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
## API Calls
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

## Fetch
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

## Free APIs
https://reqres.in/api/users/    
http://pokeapi.co/api/v2/pokemon/   
http://jsonplaceholder.typicode.com/

## DOM

## BOM

## Hot Tips
### Different unique character
```javascript
const string = 'aabbcc';

new Set(string).size // 3
```
