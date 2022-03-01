# DART _cheat-sheet_
## Table of Contents
* [Type of values](#type-of-values)   
    * [Get type value](#get-type-value)
    * [Type test](#type-test)
    * [Convert Types](#convert-types)
* [Quotes](#quotes)
* [Operators](#operators)
* [Conditionals](#conditionals)
* [Loops](#loops)

## Types of Values
```dart
int amount = 100;   
double amount = 100,11;   
String name = 'John';   
bool isDone = true;    
dynamic noTypeFixed = 'true';   
var likeDynamic = 'true';
```
### Get type value
```dart   
const aConstNum = 0;   
print(aConstNum.runtimeType);
```
>int
### Type test
```dart
if ( x is int ) {
  print('integrer);
}
```  
### Convert Types
```dart   
var newInt = int.parse('2022');
assert(newInt == 2022);

var newDouble = double.parse('12.34');
assert(newDouble == 12.34);

String intToString = 1.toString();
assert(intToString == '1');

String doubleToString = 3.14159.toStringAsFixed(2);
assert(doubleToString == '3.14');
```
## Quotes
```dart
var s1 = 'Single quotes';   
var s2 = "Double quates";   
var s3 = 'It\'s easy to scape';   
var s4 = "It's easy too"

var rawString = r'No special \n treatment';

var s5 = '''   
Multi-line   
string   
'''   
var s4 = """   
Also multi-line   
string   
"""

String name = 'John';   
var templateLiterals = 'My name is $name'
```
## Operators
```dart
int num = 20;
num + 2;
num - 2;

// modulus operator
num % 2;

// relational ==, !=, >=, <=
if(num == 0) {
  print('zero')
}

num = 100;
num *= 2; //num = num * 2

//unary operator
++num;
num++;
num += 1;
num -= 1;

//logical && and logical ||
if (num > 200 && num < 202) {
    print('201');
}

//Null Aware Operator
// (?.), (??), (??=)

number = n?.num ?? 0;

//ternary operator

void main() {
    int x = 101;
    var result = x % 2 == 0 ? 'Even' : 'Odd;
    print(result); 
}
```
## Conditionals
```dart
int number = 100;

if ( number % 2 == 0 ) {
    print('Even');
} 
else if ( number % 2 != 0 ) {
    print('Odd');
} else {
    print('Danzed and Confused')
};
```
```dart
int number = 1;

switch ( number ) {
    case 0:
        print('Even');
        break;
    case 1:
        print('Odd');
        break;
    default:
    print('Not 0 or 1')
}
```
## Loops
```dart
for ( var i = 0 ; 1 <= 10; ++i ) {
    print('Number: $i')
};
```
>For in
```dart
var numbers = [1, 2, 3];

for ( var n in numbers ) {
    print(n)
};
```
>.forEach() method
```dart
numbers.forEach((num) => print(num));
```
>while
```dart
int num = 5;

while (num > 0) {
    print(num);
    num-= 1;
}
```
>do while
```dart
int num = 5;

do {
    print(num);
    num -=1;
} while (num > 0);
```
>break
```dart
for (var i = 0; i <= 10; ++i) {
    if( i > 5 ) break;
    print(i);
}
```
>continue
```dart
for ( var i = 0; i <= 0; ++i ) {
    if( i % 2 == 0 ) continue;
    print('Odd: $i')
}
```
## Collection
>List
```dart
List names = [ 'John', 'Brown' ];

List <String> users = const [ 'Mario', 'Luigi']

var users2 = [...users]
```
>Set
```dart
var object = <String>{};

Set <Strings> names = {}
```
>Map
```dart
var object = {
    //Key:   Value:
    'user': 'Spiderman',
    'name': 'Peter',
    'surname': 'Parker',
}

print(object['user'])

var newObject = Map();
```
```dart

```
