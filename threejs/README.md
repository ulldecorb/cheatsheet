# THREE.js
## Table of content
* [Setting up](#setting-up)
* [Topics](#topics)
* [Camera](#camera)
  * [Perspective Camera](#perspective-camera)
  * [Othographic Camera](#orthografic-camera)
  * [Orbit Controls](#orbit-controls)
* [Geometry and Material](#geometry-and-material)
* [Helpers](#helpers)
  * [dat.gui](#dat.gui)
  * [Axes Helper](#axes-helper)
  * [Grid Helper](#grid-helper)

## Setting up
Install initial package.json:
```bash
npm init -y
```
In case, use a bundler in dev environment:
```bash
npm install parcel --save-dev
```
Or install global on your device:
```bash
npm install parcel -g
```
Inside the body element on index.html file add the three.js script where write your code:
```html
<script src="./js/scripts.js" type="module"></script>
```
Finally install three.js dependency:
```bash
npm install three
```
To avoid incorrect margin add style to head element on html:
```html
<head>
  <style>
    body: {
      margin: 0;
    }
  </style>
</head>
```

## Topics
To actually be able to display anything with three.js, we need three things: scene, camera and renderer, so that we can render the scene with camera.

## Camera
## Geometry and Material
## Helpers
### dat.gui
Install dat.gui:
```bash
npm install dat.gui
```
### Axes Helper
Add three axes (x, y, z) lines to reference the scene:
```bash
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
```
The function argument refers to the length of each axes.
### Grid Helper
Add a grid to develop with space reference:
```bash
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);
```
