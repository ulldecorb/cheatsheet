# CSS

## Index
* [MediaQuery](#mediaquery)
* [CSS reset](#css-reset)
* [Box organization](#box-organization)
	* [Flex](#flex)
	* [Grid](#grid)
* [Style topic webs](#style-topic-webs)

## MediaQuery
```html
<style>
@media (max-width: 600px) {
  body {
    background-color: #00f;
  }
 
@media (orientation: landscape){
  .facet_sidebar {
    flex-direction: column;
  }
}
</style>
```
🚀 [MDN about media queries](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries)

## CSS reset
Add the follow code on top of your css hierarchy to a more intuitive behaviour of margin and padding atributes.   
Short way code:
```html
*,*::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```   
Extense way code:
```html
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

## Box Organization
### Flex
[Flex cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
![](https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png)
### Grid
[Grid cheatsheet](https://css-tricks.com/snippets/css/complete-guide-grid/#top-of-site)
![](https://css-tricks.com/wp-content/uploads/2022/02/css-grid-poster.png)

## Style topic webs
* [iconarchive](https://iconarchive.com/)
* [CSS Battle](https://cssbattle.dev/)