# HTML Cheatsheet   
## Table of content
* [Forms](#forms)
* [Meta-Tags](#meta-tags)
* [Tips to order](#tips)

## FORMS
```html
<section>
  <form>
    <h1>Signup Form</h1>

    <fieldset>
      <legend>Personal Info:</legend>
      <article>
        <label for="name">Name:</label>
        <input type="text" 
               name="name" 
               id="name" />
      </article>
      <article>
        <label for="birthday">Birthday:</label>
        <input type="date" 
               name="birthday" 
               id="birthday" />
      </article>
    </fieldset>

    <fieldset>
      <legend>Credentials:</legend>
      <article>
        <label for="email">Email:</label>
        <input type="email" 
               name="email" 
               id="email" />
      </article>
      <article>
        <label for="password">Password:</label>
        <input type="password" 
               name="password" 
               id="password" />
      </article>
    </fieldset>

    <fieldset>
      <legend>Terms:</legend>
      <article>
        <p>Do you want to recive updates by mail?</p>
        <input type="radio" 
               id="upsates-yes"
               name="updates"
               value="yes" />
        <label for="updates-yes">Yes</label>
        <input type="radio" 
               id="updates-no"
               name="updates"
               value="no"
               checked />
        <label for="updates-no">No</label>
      </article>
      <article>
        <input type="checkbox" 
               name="accept-terms" 
               id="accept-terms"
               value="accept" />
        <label for="accept-terms">
          I accept our terms & conditions
        </label>  
      </article>
    </fieldset>

    <input type="submit" />
  </form>
</section>



```

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
