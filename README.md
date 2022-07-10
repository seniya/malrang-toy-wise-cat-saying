# @malrang-toy/wise-cat-saying &middot; [![npm version](https://badge.fury.io/js/@malrang-toy%2Fwise-cat-saying.svg)](https://badge.fury.io/js/@malrang-toy%2Fwise-cat-saying)

This is a toy projects. this module is shown The WiseSaying with cute cat


<img src="https://github.com/seniya/malrang-toy-wise-cat-saying/blob/main/public/screen-01.png?raw=true" alt="Get a word with Cat" style="width:300px;"/>

<img src="https://github.com/seniya/malrang-toy-wise-cat-saying/blob/main/public/screen-02.png?raw=true" alt="Get a word with Cat" style="width:300px;"/>


### Table of Contents

* [Installation](#installation)
* [Basic Usage for old-school](#basic-usage-for-old-school)
* [Basic Usage for ES module](#basic-usage-for-es-module)


## Installation

#### Manually

Simply include `main.umd.js` in the `<head>`...
```html
<head>
  ...
  <script src="main.umd.js"></script>
  <!-- 
  Or remotely via Unpkg CDN 
  <script src="https://unpkg.com/@malrang-toy/wise-cat-saying@1.0.2/dist/main.umd.js"></script>
  -->
</head>
```

If you downloaded the package via zip file from Github, these files are located in the `dist` folder. Otherwise, you can use the Unpkg CDN as shown in the examples above.


#### Via NPM
```sh
npm i @malrang-toy/wise-cat-saying
```

Files & locations:

|        File        |             Folder              |               Description               |
| ------------------ | ------------------------------- | --------------------------------------- |
| main.umd.js  | node_modules/@malrang-toy/wise-cat-saying/dist | old school version |
| main.esm.js | node_modules/@malrang-toy/wise-cat-saying/dist | ES module version |                



## Basic Usage for old-school

Write the element in markup file:
```html
<head>
  ...
  <script src="main.umd.js"></script>
  <!-- 
  Or remotely via Unpkg CDN 
  <script src="https://unpkg.com/@malrang-toy/wise-cat-saying@1.0.2/dist/main.umd.js"></script>
  -->
</head>
<body>
  ...
  <div id="my-cat-card"></div>
  <script>
    window.onload = function(){
      console.log('window.onload')      
      const theCat = new WiseCatSaying('my-cat-card')
      const theWord = theCat.actionSay()
      console.log('theWord : ', theWord)      
      theCat.render()
    }
  </script>
</body>
```

Importing the library for javascript:
```javascript
import WiseCatSaying from '@malrang-toy/wise-cat-saying';

// 'my-cat-card' is markup elemt ID
// ex) <div id="my-cat-card"></div>
const theCat = new WiseCatSaying('my-cat-card')

```

## Basic Usage for ES module

Write the element in markup file:
```html
<body>
  ...
  <div id="my-cat-card"></div>
</body>
```

Importing the library for javascript:
```javascript
import WiseCatSaying from '@malrang-toy/wise-cat-saying';

window.onload = function(){
  // 'my-cat-card' is markup elemt ID
  // ex) <div id="my-cat-card"></div>
  const theCat = new WiseCatSaying('my-cat-card')
  theCat.render()
}
```

Thank you !!

## Origin Source From
#### Cat image : https://thecatapi.com/
#### WiseSaying : google(?)



