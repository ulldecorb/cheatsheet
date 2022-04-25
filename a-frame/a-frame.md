# A-FRAME
A web framework for building 3D/AR/VR experiences.
## Table of Content
* [Install](#install)
* [Concepts](#concepts)
* [ECS](#entity-component-system)
* [JS and DOM](#javascript-and-dom)
* []()
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
     
![](https://cloud.githubusercontent.com/assets/674727/25463804/896c04c2-2aad-11e7-8015-2fc84118a01c.gif)   
    
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
