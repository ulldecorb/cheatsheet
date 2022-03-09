# typescript-cheat-sheet
Typescript cheat sheet
## Table of Content
* [Data Types]{#data-types}
* [Arrays]{#arrays}
* [Funtions]{#functions}
* [Objects]{#objects}
* [Types Liases]{#types-aliases}

## Data Types
```javascript   
const username: string = "John";   
const age: number = 41;   
const boomer: boolean = true;
```

## Arrays
```javascript   
const username: string[] = ["John", "Paul". "George"];   
const age: number[] = [41, 21, 67];   
const boomer: boolean[] = [true, false, true];
const boomer: any[] = ["John", 41, true];
```

## Functions
Parameters
```javascript   
function sum ( a: number, b: number) {
return a+b;
```

Parameters and return value
Parameters
```javascript   
function sum( a: number, b: number): number {
return a+b;
```

## Objects
```javascript    
const user: {name: string,  age: number} = {
  name: 'John',   
  age: 41
};
```

## Types Aliases
```javascript   
type user = {
name: string;
age: number;
}

const john: user = {
  name: 'John',
  age: 41,
}

const laura: user = {
  name: 'Laura',
  age: 33,
```


<!-- ## Data Types
```javascript

``` -->
