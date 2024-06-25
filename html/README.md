# HTML Cheatsheet   

## META-TAGS
```html
<html>
  <head>
    <title>Usefull html meta-tags</title>
    
    <!-- Description that user can read on search results -->
    <meta name="description" content="Learn html meta-tags">
    
    <!-- Key words to internet searchers -->
    <meta name="keywords" content="HTML, Meta-tags">
    <meta name="author" content="John Doe">
    
    <!-- Set timer to authomatic refresh. Content attribute set seconds timer -->
    <meta http-equiv="refresh" content="5">
    
    <!-- Set default width by device -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Define charset -->
    <meta charset="UTF-8">

    <!-- Tell search engines and other robots search behaviour -->
    <!-- Allow to be indexed by search engines and show links path on search  -->
    <meta name="robots" content="index, follow">
    <!-- Disallow index the web page by search engines and disallow the same search engines follow the links on our website  -->
    <meta name="robots" content="noindex, nofollow">
    
    <!-- Avoid search engines indexing duplicate webs -->
    <link rel="canonical" href="https://www.thewebname.com">
  </head>
</html>

```
## TIPS
Edit Box:
```html
<div contenteditable="true">
```
Color Picker:
```html
<input type="color" value="#000">
```   
Progress Bar:
```html
<meter max="100" min="0">
<progress max="100" min="0">
```   
Spellcheck
```html
<input type="text" spellcheck="true">
```    
Quick Toggle
```html
<details>
  <summary>Title here</summary>
  The rest of toggled text...
</details>
```    
Spellcheck
```html
<input type="text" spellcheck="true">
```    
