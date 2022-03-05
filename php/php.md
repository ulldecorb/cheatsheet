# PHP Cheat Sheet
PHP: Hypertext Preprocessor
## Table of Content
*
>PHP on html file:
```php
<?php
// PHP code goes here
?>
```
>PHP variable declaration:
```php
$txt = 'Hello World!';
```
A variable starts with the $ sign, followed by the name of the variable.   
A variable name must start with a letter or the underscore character.   
A variable name cannot start with a number.   
A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ ).   
Variable names are case-sensitive ($age and $AGE are two different variables).   
>Variables Scope
* Global   
* Local   
* Static   
>Define constants   
define(name, value, case-insensitive)
```php
<?php
define("GREETING", "Welcome to W3Schools.com!", true); 
echo greeting;
?>
```
```php
<?php
define("cars", [
  "Alfa Romeo",
  "BMW",
  "Toyota"
]);
echo cars[0];
?>
```
>Comments
```php
// Single line comment

# Single line comment

/*
Multiple-lines
commments
*/
```
>Strings
```php
$txt = "coding";
echo "I love " . $txt . "!";
echo "I love $txt!";
```
>Operators
```php
echo 2 ** 5 # 25  Exponentation

$x = 5;  
$y = 10;

echo ($x <=> $y); // returns -1 because $x is less than $y
echo ($x <=> $y); // returns 0 because values are equal
echo ($x <=> $y); // returns +1 because $x is greater than $y
```
```php
<?php
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);
?>

$arrlength = count($cars);
```
```php
```
