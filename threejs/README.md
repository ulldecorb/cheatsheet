# THREE.js
## Table of content
* [Setting up](#setting-up)
* [Topics](#topics)
* [Camera](#camera)
  * [Perspective Camera](#perspective-camera)
  * [Othographic Camera](#orthografic-camera)
  * [Orbit Controls](#orbit-controls)
* [Geometry and Material](#geometry-and-material)
* [Animation](#animation)
* [Helpers](#helpers)
  * [dat.gui](#dat.gui)
  * [Axes Helper](#axes-helper)
  * [Grid Helper](#grid-helper)
* [Fonts](#fonts)

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
Two kind of cameras are available: prespective and othographic. The prespective camera works like classic camera, display objects with perspective. The octographic camera avoid the perspective, so the objects displays ever with the same size. This can be useful for rendering 2D scenes and UI elements, amongst other things.   

You can set the position of the camera by axes:
```bash
camera.position.x = 0;   
camera.position.y = 2;   
camera.position.z = 5;   
```
Or by a shortcut method 'set( x, y, z )':
```bash
camera.position.set (0,2,5);
```
### Perspective Camera
PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )   
   
There are four function arguments:
* fov — (Field of view) Camera frustum vertical field of view.
* aspect — Camera frustum aspect ratio. Usually uses the width window size / height window size.
* near — Camera frustum near plane.
* far — Camera frustum far plane.   

Only the objects between near and far distance will be display.
```bash
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
```
### Othographic Camera
OrthographicCamera( left : Number, right : Number, top : Number, bottom : Number, near : Number, far : Number )   
   
* left — Camera frustum left plane.   
* right — Camera frustum right plane.   
* top — Camera frustum top plane.   
* bottom — Camera frustum bottom plane.   
* near — Camera frustum near plane.   
* far — Camera frustum far plane.    

```bash
const camera = new THREE.OrthographicCamera( 
 width / - 2,
 width / 2,
 height / 2,
 height / - 2,
 1,
 1000 
);
```

### Orbit Controls
```bash
import { OrbitControls } from 'three/examples/jsm/conrols/OrbitControls.js';

const orbit = new THREE.OrbitControls( camera, renderer.donElement );

orbit.update();

```

## Geometry and Material

## Animation
```bash
funstion animate(time) {
   box.rotation.x += 0.01;
   box.rotation.y += 0.01;
   
   renderer.render( scene, camera );
}
animate();
```

## Helpers
A few tools to help development environment.

### dat.gui
The dat.gui provides a window where you can control any argument in the scene in a easy way.
Install dat.gui:
```bash
npm install dat.gui
```
Import and set dat.gui:
```bash
import * as dat from 'dat.gui';

consy gui = new dat.gui();
```
Custom the dat.gui options. Add any attribute you would control. In this case we add sphere color and wireframe controls:
```bash
const options = {
sphereColor: '#ffea00',
wirefame: false
};
```
Add controls to dat-gui:
```bash
gui.add( options, 'sphereColor' ).onChange( function (e) {
   sphere.material.color.set(e);
};


gui.add( options, 'wireframe' ).onChange( function (e) {
   sphere.material.wireframe = e;
};
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
You can provide till two function arguments: The first argument define the size on the grid and the second argument define how many cells build the grid. 
