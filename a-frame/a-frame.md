# A-FRAME
A web framework for building 3D/AR/VR experiences.
## Table of Content
* [Install](#install)
* [Concepts](#concepts)
* [ECS](#entity-component-system)
* [JS and DOM](#javascript-and-dom)
* [Three.js](#threejs)
* []()
* []()
* []()
* [Links](#links)

## [INSTALL](https://aframe.io/docs/1.3.0/introduction/installation.html)
> CDN    
```html
<head>
  <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
</head>
```
> NPM   
```bash
$ npm install aframe
```
```javascript
require('aframe');
```
Also can use angle: command line interface for A-Frame
```bash
npm install -g angle && angle initscene
```
## Concepts
> Headsets features:   

Positional tracking (six degrees of freedom (6DoF))   
Rotation tracking (three degrees os freedom (3DoF))   

> WebXR:    

A-Frame uses the WebXR API to gain access to VR headset sensor data (position, orientation) to transform the camera and to render content directly to VR headsets.
> Primitives (also refers as [assemblages](http://vasir.net/blog/game-development/how-to-build-entity-component-system-in-javascript))

```html
<a-box color="red" width="3"></a-box>
```
sugar syntactic for:
```html
<a-entity geometry="primitive: box; width: 3" material="color: red"></a-entity>
```

> [Registering a Primitive](https://aframe.io/docs/1.3.0/introduction/html-and-primitives.html#registering-a-primitive)
```javascript
AFRAME.registerPrimitive(name, definition)
```
## Entity-Component-System
> Doc Links:
* [Entity-component-system on Wikipedia](https://en.wikipedia.org/wiki/Entity_component_system)
* [What is an Entity System? by Adam Martin](http://t-machine.org/index.php/2007/11/11/entity-systems-are-the-future-of-mmog-development-part-2/)
* [Decoupling Patterns — Component on Game Programming Patterns](http://gameprogrammingpatterns.com/component.html)
* [Evolve Your Hierarchy by Mick West](https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/)

A-Frame has APIs that represents each piece of ECS:   
 * Entities are represented by the <a-entity> element and prototype.   
 * Components are represented by HTML attributes on <a-entity>‘s. Underneath, components are objects containing a schema, lifecycle handlers, and methods. Components are registered via the AFRAME.registerComponent (name, definition) API.   
 * Systems are represented by <a-scene>‘s HTML attributes. System are similar to components in definition. Systems are registered via the AFRAME.registerSystem (name, definition) API.   
  
<p align="center">
   <img align="center" src="https://cloud.githubusercontent.com/assets/674727/25463804/896c04c2-2aad-11e7-8015-2fc84118a01c.gif" width="565" height="353">
</p>   
  
## Javascript and DOM
> Register component:   
```javascript
  AFRAME.registerComponent('log', {
  schema: {type: 'string'},

  init: function () {
    var stringToLog = this.data;
    console.log(stringToLog);
  }
});
```
```html
  <a-scene log="Hello, Scene!">
    <a-box log="Hello, Box!"></a-box>
  </a-scene>
```
> Extensibility
```javascript
  AFRAME.registerComponent('foo', {
  schema: {
    bar: {type: 'number'},
    baz: {type: 'string'}
  },

  init: function () {
    // Do something when component first attached.
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});  
```
> [Adding an Entity with .appendChild()](https://aframe.io/docs/1.3.0/introduction/javascript-events-dom-apis.html#adding-an-entity-with-appendchild)    
```javascript
var sceneEl = document.querySelector('a-scene');

AFRAME.registerComponent('do-something-once-loaded', {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    console.log('I am ready!');
  }
});

var entityEl = document.createElement('a-entity');
entityEl.setAttribute('do-something-once-loaded', '');
sceneEl.appendChild(entityEl);
```
> Query selectors:   
* .querySelector()   
* .querySelectorAll()  
> Attributes:   
* .getAttribute()   
* .createElement()   
* .appendChild()   
* .removeChild()   
* .setAttribute()   
* .removeAttribute()   
> Listeners:   
* .emit()   
* .addEventListener()   
* .removeEventListener()      
  
## Three.js
[Accessing the three.js Scene](https://aframe.io/docs/1.3.0/introduction/developing-with-threejs.html#accessing-the-three-js-scene)   
  ```javascript
  document.querySelector('a-scene').object3D;  // THREE.Scene
  ```   
  ```javascript
  document.querySelector('a-entity').sceneEl.object3D;  // THREE.Scene
  ```
  ```javascript
  AFRAME.registerComponent('foo', {
    init: function () {
      var scene = this.el.sceneEl.object3D;  // THREE.Scene
    }
  });
  ```
[Setting an Object3D on an Entity](https://aframe.io/docs/1.3.0/introduction/developing-with-threejs.html#setting-an-object3d-on-an-entity)   
.setObject3D(name)   
  ```javascript
  AFRAME.registerComponent('pointlight', {
  init: function () {
    this.el.setObject3D('light', new THREE.PointLight());
  }
});
  ```
.getObject3D(name)   
```javascript
entityEl.getObject3D('light');
  ```
.removeObject3D(name)   
  ```javascript
  AFRAME.registerComponent('pointlight', {
  init: function () {
    this.el.setObject3D('light', new THREE.PointLight());
  },

  remove: function () {
    // Remove Object3D.
    this.el.removeObject3D('light');
  }
});
  ```
[Transforming Between Coordinate Spaces](https://aframe.io/docs/1.3.0/introduction/developing-with-threejs.html#transforming-between-coordinate-spaces)
* .getWorldPosition (vector)   
```javascript
  var worldPosition = new THREE.Vector3();
  entityEl.object3D.getWorldPosition(worldPosition);
```
* .getWorldQuaternion (quaternion)   
```javascript
  var worldQuaternion = new THREE.Quaternion();
  entityEl.object3D.getWorldQuaternion(worldQuaternion);
```
* .localToWorld (vector)   
* .getWorldDirection (vector)   
* .getWorldQuaternion (quaternion)
* .getWorldScale (vector)
  
[World to Local Transforms](https://aframe.io/docs/1.3.0/introduction/developing-with-threejs.html#world-to-local-transforms)   
  To obtain a matrix that transforms from world to an object’s local space, get the inverse of the object’s world matrix.   
```javascript
var worldToLocal = new THREE.Matrix4().getInverse(object3D.matrixWorld)
```
  Then we can apply that worldToLocal matrix to anything we want to transform:   
```javascript
anotherObject3D.applyMatrix(worldToLocal);
  ```

## Links
* [Glitch to quick Test](https://glitch.com/edit/#!/reliable-righteous-belt?path=index.html%3A6%3A8)
* [A-frame school](https://aframe.io/)   
* [A-frame docs](https://aframe.io/docs/1.3.0/introduction/)
* [three.js](https://threejs.org/)
  
> Examples links    
* [BeatSaver Viewer](https://github.com/supermedium/beatsaver-viewer/)
* [Super Says](https://github.com/supermedium/supersays/)
* [A-Painter](https://github.com/aframevr/a-painter/)
* [A-Blast](https://github.com/aframevr/a-blast/)
* [Scene: ocean, rain, light, sky and sphere](https://glitch.com/edit/#!/mirror-abstracted-silkworm)
