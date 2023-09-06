# CSS

## Summary
- [MediaQuery](#mediaquery)
- [CSS reset](#css-reset)
- [Flex](#flex)
- [Grid](#grid)
- [Tips](#tips)
- [Style topic webs](#style-topic-webs)

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
### CSS reset
Add on top of your css hierarchy to a more intuitive behaviour of margin and padding atributes.
```html
*,*::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```   
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
[Link to MDN about media queries](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries)

## Tips
> Center Element
```css
place-items: center;
display: grid;
```

> inline

Use with 'float' and a transparent background .png 
```css
.image {
	position: float;
	shape-outside: url('https://route.to/img.png')
	shape-margin: 2px;
	widht: 50%;
}
```

> Custom border
```css
border-image: url();
```
> animation-play-state

start/pause animation
```css
div {
	atributes...

	span {
		animation: animation-name 2s infinite;
		animation-play-state: paused;
	}

	&:hover {
		animation-play-state: running;
	}
}

```

> Png images border shaper

Use with 'float' and a transparent background .png 
```css
.image {
	position: float;
	shape-outside: url('https://route.to/img.png')
	shape-margin: 2px;
	widht: 50%;
}
```

> Custom border
```css
border-image: url();
```
## Flex
[Flex cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
![](https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png)
## Grid
[Grid cheatsheet](https://css-tricks.com/snippets/css/complete-guide-grid/#top-of-site)
![](https://css-tricks.com/wp-content/uploads/2022/02/css-grid-poster.png)

## Style topic webs
[iconarchive](https://iconarchive.com/)
