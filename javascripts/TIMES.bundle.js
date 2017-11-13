var T =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return luminance; });
/* unused harmony export chrominanceRed */
/* unused harmony export chrominanceBlue */
/* unused harmony export average */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return saturation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return toABGR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return splitChannels; });
/*
 *  TIMES: Tiny Image ECMAScript Application
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of TIMES
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with TIMES.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */
 
'use script';

/**
 * @module color
 */
 
 
/**
 * Compute RGBA pixel value from gray uint8 value 
 * @param {number} gray8 - uint8 gray value 
 * @return {number} RGBA Pixel value 
 */
const fromGray8 = (gray8) => gray8 << 24 | gray8 << 16 | gray8 << 8 | 0xff;

/**
 * Convert RGBA pixel value to an array with red, green, blue, and alpha uint8 values
 * @param {number} rgba - RGBA Pixel value 
 * @return {array} An array of red, green, blue, and alpha uint8 components
 */
const fromRGBA = (rgba) => [(rgba >> 24) & 0xff, (rgba >> 16) & 0xff, (rgba >> 8) & 0xff, rgba & 0xff];

const toRGBA = (r,g,b,a) => ( r << 24) | (g << 16) | (b << 8) | a;

// TODO
const fromABGR = (abgr) => ( abgr << 24) | (abgr << 16) | (abgr << 8) | abgr;

/**
 * Compute ABGR pixel value from four uint8 red, green, blue, and alpha components 
 * @param {number} red - uint8 red component 
 * @param {number} green - uint8 green component 
 * @param {number} blue - uint8 blue component 
 * @param {number} alpha - uint8 alpha component 
 * @return {number} ABGR Pixel value 
 */
const toABGR = (r,g,b,a) => ( a << 24) | (b << 16) | (g << 8) | r;

// TODO
const toabgr = (rgba) => ( (rgba & 0xff) << 24) | ( (rgba & 0x00ff00) << 8) | ( (rgba & 0xff0000) >> 8) | ( (rgba & 0xff000000) >> 24);

/**
 * Compute Luminance gray value from RGBA pixel value
 * @param {number} rgba - RGBA Pixel value 
 * @return {number} Luminance uint8 value 
 */
const luminance = (rgba) => {
  // TODO
  /*
  Franci Penov and Glenn Slayden
  From https://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color
  Photometric/digital ITU BT.709: Y = 0.2126 R + 0.7152 G + 0.0722 B
  Digital ITU BT.601 (gives more weight to the R and B components): Y = 0.299 R + 0.587 G + 0.114 B
  Approximation #1: Y = 0.33 R + 0.5 G + 0.16 B
  Approximation #2: Y = 0.375 R + 0.5 G + 0.125 B
  Fast: Y = (R+R+B+G+G+G)/6
  Fast: Y = (R+R+R+B+G+G+G+G)>>3
  */
  
  let r = red(rgba);
  let g = green(rgba);
  let b = blue(rgba);
  return (r+r+r+b+g+g+g+g)>>3; 
};

/**
 * Convert RGBA pixel value to Average gray value
 * @param {number} rgba - RGBA Pixel value 
 * @return {number} uint8 value
 */
const average = (rgba) => Math.floor(red(rgba) + green(rgba) + blue(rgba) / 3.0);

/**
 * Extract red component of RGBA pixel value
 * @param {number} rgba - RGBA Pixel value 
 * @return {number} uint8 value 
 */
const red = (rgba) => rgba >> 24 & 0xff;

/**
 * Extract green component of RGBA pixel value
 * @param {number} rgba - RGBA Pixel value 
 * @return {number} uint8 value 
 */
const green = (rgba) => rgba >> 16 & 0xff;

/**
 * Extract blue component of RGBA pixel value
 * @param {number} rgba - RGBA Pixel value 
 * @return {number} uint8 value 
 */
const blue = (rgba) => rgba >> 8 & 0xff;

/**
 * Extract alpha (transparency) component of RGBA pixel value
 * @param {number} rgba - RGBA Pixel value 
 * @return {number} - uint8 value 
 */
const alpha = (rgba) => rgba & 0xff;

/**
 * Extract hue component of RGBA pixel value
 * @param {number} rgba - RGBA Pixel value 
 * @return {number} - uint8 value 
 */
const hue = (rgba) => {
  const ratio = (a,b,delta) => (a-b)/delta;
  let r = red(rgba), b = blue(rgba), g = green(rgba);
  let maxi = Math.max(r,Math.max(g,b));
  let mini = Math.min(r,Math.min(g,b));
  let delta = maxi - mini;
  let out = (mini === maxi) ? 0 :
    ( (maxi === r) ? (60 * ratio(g,b,delta) + 360) % 360 : 
      ( (maxi === g) ? 60 * ratio(b,r,delta) + 120 : 
        ( (maxi === b) ? 60 * ratio(r,g,delta) + 240 : 0) ) ); 
  return Math.floor(out / 360 * 255);
};

/**
 * Extract saturation component of RGBA pixel value
 * @param {number} rgba - RGBA Pixel value 
 * @return {number} - uint8 value 
 */
const saturation = (rgba) => {
  let r = red(rgba), b = blue(rgba), g = green(rgba);
  let maxi = Math.max(r,Math.max(g,b));
  let mini = Math.min(r,Math.min(g,b));
  return (maxi === 0) ? 0 : (1.0 - mini/maxi) * 255;
};

/**
 * Extract value component of RGBA pixel value
 * @param {number} rgba - RGBA Pixel value 
 * @return {number} - uint8 value 
 */
const value = (rgba) => Math.max(red(rgba),Math.max(green(rgba), blue(rgba)));



/**
 * Split channels of color Raster according to various colorspaces
 *
 * @param {function} fns - A series of functions among:
 * <ul>
 * <li> red(px), green(px),blue(px),alpha(px),</li>
 * <li> hue(px),saturation(px),value(px),</li>
 * <li> cyan(px),magenta(px),yellow(px),</li>
 * <li> luminance(px), chrominance(px)</li>
 *</ul>
 * @param {Raster} color_img - A RGBA color image
 * @param {boolean} copy - Useless here, only for compatibility with the other process functions
 * @return {Stack} Return a stack containing the channels of various colorspaces
 * @see color.js
 */
const splitChannels = (...fns) => (color_img,copy = true) => {
  let stack = new T.Stack("Split Channels","uint8",color_img.width,color_img.height,fns.length);
  stack.slices.forEach( (sli) => sli.pixelData = T.Raster.createPixels('uint8',color_img.length) );
  stack.slices.forEach( (sli,i) => {
    sli.label = fns[i].name;
    sli.pixelData.forEach( (px,j,pixels) => pixels[j] = fns[i](color_img.pixelData[j]));
  });
  return stack;
};


// Exports
 
 
 



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Raster__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Image__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Stack__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Window__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__process_color__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__process_utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__process_view__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__render_render2D__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Raster", function() { return __WEBPACK_IMPORTED_MODULE_0__Raster__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return __WEBPACK_IMPORTED_MODULE_1__Image__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return __WEBPACK_IMPORTED_MODULE_2__Stack__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Window", function() { return __WEBPACK_IMPORTED_MODULE_3__Window__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return __WEBPACK_IMPORTED_MODULE_4__process_color__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return __WEBPACK_IMPORTED_MODULE_4__process_color__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return __WEBPACK_IMPORTED_MODULE_4__process_color__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return __WEBPACK_IMPORTED_MODULE_4__process_color__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "luminance", function() { return __WEBPACK_IMPORTED_MODULE_4__process_color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return __WEBPACK_IMPORTED_MODULE_4__process_color__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "saturation", function() { return __WEBPACK_IMPORTED_MODULE_4__process_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return __WEBPACK_IMPORTED_MODULE_4__process_color__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "splitChannels", function() { return __WEBPACK_IMPORTED_MODULE_4__process_color__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toABGR", function() { return __WEBPACK_IMPORTED_MODULE_4__process_color__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return __WEBPACK_IMPORTED_MODULE_5__process_utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "montage", function() { return __WEBPACK_IMPORTED_MODULE_6__process_view__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "view", function() { return __WEBPACK_IMPORTED_MODULE_6__process_view__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "renderUint8", function() { return __WEBPACK_IMPORTED_MODULE_7__render_render2D__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "renderRGBA", function() { return __WEBPACK_IMPORTED_MODULE_7__render_render2D__["a"]; });
/*
 *  TIMES: Tiny Image ECMAScript Application
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of TIMES
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with TIMES.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */
 







/* Process/color */






/* Process/utils */


/* Process/view */


/* Render */









/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 *  TIMES: Tiny Image ECMAScript Application
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of TIMES
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with TIMES.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */
 

/**
 * Class for Raster
 *
 * @alias T.Raster
 */
 
class Raster {
  /**
   * Create an empty TRaster.
   * 
   * @param {string} type - One of these: uint8, uint16, float32, rgba
   * @param {number} width - Image Width
   * @param {number} height - Image Height
   * @param {number} offset - Offset
   */
  constructor(type,width,height,label='None') {
    /**
     * Width
     */
    this.width = width;
    
    /**
     * Height
     */
    this.height = height;
    
    /**
     * Label
     */
    this.label = label;
    
    /**
     * Length = width * height
     */
    this.length = this.width * this.height;
    
    /**
     * Type: uint8, uint16, uint32, float32,rgba
     */
    this.type = type;
    
    /**
     * Pixels array
     */
    this.pixelData; 
  }
  
  /*
   * Create the Pixels Array filled in black (value = 0)
   *
   * @alias T.Raster.createPixels
   * @param {string} type - uint8, uint16, uint32, float32,rgba
   */
  static createPixels(type,length) {
    let arr;
    switch (type) {
    case 'uint8': arr = new Uint8ClampedArray(length).fill(0);
    case 'uint16': arr = new Uint16Array(length).fill(0);
    case 'uint32': arr = new Uint32Array(length).fill(0);
    case 'float32': arr = new Float32Array(length).fill(0.0);
    case 'rgba': arr = new Uint32Array(length).fill(0);
    }
    return arr;
  }
  
  static MIN_VALUE() {
    return 0;
  }
  
  static fromWindow(win, copy = true) {
    let img = new TRaster(win.metadata.type,win.metadata.width,win.metadata.height);
    img.pixelData (copy === true) ? [...win.raster.pixelData] : win.raster.pixelData; // Copy pixels
    img.setWindow(win);
    return img;
  }
  
  /**
   * Create a new Raster from another Raster
   *
   * @alias T.Raster.from
   * @param {TRaster} other - uint8, uint16, uint32, float32,rgba
   */
  static from(other, copy = true) {
    let img = new T.Raster(other.type,other.width, other.height);
    img.pixelData = (copy === true) ? [...other.pixelData] : other.pixelData; // Copy pixels
    return img;
  }
  
  fill(value) {
    this.pixelData.fill(value);
  }
  
    
  /**
   * compose(func1, func2, func3, ..., funcn)
   * From https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
   *
   * @alias T.Raster.compose
   * @example compose(func1,func2) returns func1(func2(x))
   *
   * @author Eric Elliott
   */
  compose (...fns) {
    return fns.reduceRight((v, f) => f(v,false), this);
  }

  /**
   * pipe(func1, func2, func3, ..., funcn)
   * From https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
   *
   * @example pipe(func1,func2) returns func2(func1(x))
   *
   * @author Eric Elliott
   */
  pipe (...fns) {
    return fns.reduce((v, f) => f(v,false), this);
  }
  
  /**
   * Get pixel value at given index
   *
   * @alias T.Raster~get
   * @param {number} index - Index
   * @returns {number}  Pixel Value
   *
   * @author: Jean-Christophe Taveau
   */
  get(index) {
    return this.pixelData[index];
  }
  
  /**
   * Get pixel value at given X,Y-coordinates
   *
   * @alias T.Raster~getPixel
   * @param {number} x - X-coordinate
   * @param {number} y - Y-coordinate
   * @returns {number}  Pixel Value
   *
   * @author: Jean-Christophe Taveau
   */
  getPixel(x,y) {
    let index = x + y * this.width;
    return this.pixelData[index];
  }
  
  /**
   * Get X,Y-coordinate from index
   *
   * @alias T.Raster~xy
   * @param {number} index - Index
   * @returns {array}  X- and Y-coordinates
   *
   * @author: Jean-Christophe Taveau
   */
  xy(index) {
    return [this.x(index), this.y(index)];
  }
  
  /**
   * Get X-coordinate from index
   *
   * @alias T.Raster~x
   * @param {number} index - Index
   * @returns {number}  X-coordinate
   *
   * @author: Jean-Christophe Taveau
   */
  x(index) {
    return x % this.width;
  }
  
  /**
   * Get Y-coordinate from index
   *
   * @alias T.Raster~y
   * @param {number} index - Index
   * @returns {number}  Y-coordinate
   *
   * @author: Jean-Christophe Taveau
   */
  y(index) {
    return Math.floor(x / this.width);
  }
  
  /**
   * Set pixel value at given index
   *
   * @author Jean-Christophe Taveau
   */
  set(index,value) {
    this.pixelData[index] = value;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Raster;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 *  TIMES: Tiny Image ECMAScript Application
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of TIMES
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with TIMES.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */
 
 
/**
 * Class for Image
 *
 * @alias T.Image
 */
 
class Image {
  /**
   * Create an empty TImage.
   * 
   * @param {string} type - One of these: uint8, uint16, float32, rgba
   * @param {number} width - Image Width
   * @param {number} height - Image Height
   * @param {number} offset - Offset
   */
  constructor(title,type,width,height, pattern="black") {
    /**
     * Title
     */
    this.title = title;
    
    /**
     * Width
     */
    this.width = width;
    
    /**
     * Height
     */
    this.height = height;
    
    
    /**
     * Length = width * height
     */
    this.length = this.width * this.height;
    
    /**
     * Type: uint8, uint16, uint32, float32,rgba
     */
    this.type = type;

    /**
     * Metadata containing annotations, information,etc.
     */
    this.metadata = {
      dimension : 2,
      title : title,
      type: type,
      width : width,
      height : height,
      depth : 1,
      fill : pattern
    };
    
    /**
     * Raster containing the pixels
     */
    this.raster = new T.Raster(type,width,height); 
    this.fillPattern(pattern);
  }
  
  
  fillPattern(pattern) {
    let raster = this.raster;
    if (raster.pixelData === undefined) {
      raster.pixelData = T.Raster.createPixels(this.type,this.length);
      console.log(`Create pixels of ${this.type}`);
    }
    if (pattern.toLowerCase() === 'black') {
      raster.pixelData.fill(T.Raster.MIN_VALUE(this.type));
    }
    else if (pattern.toLowerCase() === 'white') {
      raster.pixelData.fill(T.Raster.MAX_VALUE(this.type));
    }
    else if (pattern.toLowerCase() === 'ramp') {
      raster.pixelData.map(x => T.Raster.MAX_VALUE()/ this.width * (i % this.width));
    }
  }
  

  /**
   * Get raster
   *
   * @author Jean-Christophe Taveau
   */
  getRaster() {
    return this.raster;
  }

  /**
   * Set raster
   *
   * @author Jean-Christophe Taveau
   */
  setRaster(a_raster) {
    this.raster = a_raster;
  }

  /**
   * Set pixels
   *
   * @author Jean-Christophe Taveau
   */
  setPixels(data) {
    this.raster.pixelData = data;
  }
  
  setWindow(win) {
    this.window = win;
  }

  setWindow(win) {
    this.window = win;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Image;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 *  TIMES: Tiny Image ECMAScript Application
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of TIMES
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with TIMES.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */
 
/**
 * @namespace T
 */
 
 
/**
 * Class for Stack
 *
 * @alias T.Stack
 */

class Stack {
  /**
   * Create an empty Stack
   * @param {string} type - Pixel type number: uint8, uint16, float32, rgba
   * @param {number} width - Width
   * @param {number} height - Height
   * @param {number} nslices - Slice number in the stack
   */
  constructor(title,type,width,height,nslices,pattern="black") {
    /**
     * Title
     */
    this.title = title;
    
    /**
     * Width
     */
    this.width = width;
    
    /**
     * Height
     */
    this.height = height;
    
    /**
     * Type: uint8, uint16, uint32, float32,rgba
     */
    this.type = type;
    
    /**
     * Pixels array
     */
    this.pixelData; 
    
    /**
     * Slice number
     */
    this.nslices = nslices;
    
    /**
     * Length = width * height * nslices
     */
    this.length = this.width * this.height * this.nslices;

    /**
     * Metadata containing annotations, information,etc.
     */
    this.metadata = {
      dimension : 2.5,
      title : title,
      type: type,
      width : width,
      height : height,
      nslices : nslices,
      fill : pattern,
    };
    
    /**
     * Array of TRaster
     */
    this.slices = Array.from({length: nslices}, (x,i) => new T.Raster(type,width,height,i.toString()));
  }

  /**
   * Set pixels
   * 
   * @alias T.Stack~setPixels
   * @author Jean-Christophe Taveau
   */
  setPixels(data) {
    this.slices.forEach( (sli,i) => sli.pixelData = data.slice(i*sli.length, i*sli.length + sli.length) );
  }


  /**
   * Execute function for each slice in this stack
   *
   * @param {function} func - Function run for each slice of the stack
   *
   * @author Jean-Christophe Taveau
   */
  forEach(func) {
    this.slices.forEach( (x,i) => func(x,false));
  }
  
  /**
   * Execute function for each slice in this stack
   *
   * @param {function} func - Function run for each slice of the stack
   * @return {array} - returns an array of objects
   *
   * @author Jean-Christophe Taveau
   */
  map(func) {
    return this.slices.map( (x,i) => func(x,true));
  }
  
  /**
   * Extract one slice at given index 
   *
   * @param {number} index - Slice index must be comprised between 0 and length - 1
   * @return {TRaster} 
   * @author Jean-Christophe Taveau
   */
   slice(index) {
    let output = this.slices[index];
    // Copy pixels
    output.setPixels(this.pixelData.filter( (x,i) => (i >= output.offset && i < output.offset + output.length) ) );
    return output;
   }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Stack;




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 *  TIMES: Tiny Image ECMAScript Application
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of TIMES
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with TIMES.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

class Window {
  constructor(title, width,height, forceCPU=true) {
    this.title = title;
    this.width = width;
    this.height = height;
    
    // Build HTML5 elements
    this.HTMLelement = document.createElement('div');
    this.HTMLelement.name = this.title;
    this.HTMLelement.id = this.title.toLowerCase(); //  + '-' + wm.windows.length;
    this.canvas = document.createElement('canvas');
    this.HTMLelement.appendChild(this.canvas);

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // Try to get HW Acceleration
    this.useGPU = false;
    if (!forceCPU) {
      // Get WEBLG 2 context
      this.ctx = this.canvas.getContext("webgl2");
      // no webgl2 for you!
      this.useGPU = (!this.ctx) ? false : true;
    }
    if (!this.useGPU && forceCPU) {
      this.ctx = this.canvas.getContext('2d');
      this.useGPU = false;
    }
  }

  getImage() {
    return (this.metadata.dimension === 2) ? this.content : undefined;
  }


  getStack() {
    return (this.metadata.dimension === 2.5) ? this.content : undefined;
  }


  getVolume () {
    return (this.metadata.dimension === 3) ? this.content :  undefined;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Window;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pipe; });
/*
 *  times: Tiny Image ECMAScript Application
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of times
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with times.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */
 
/**
 * Extract alpha (transparency) component of RGBA pixel value
 */
const append = function (obj) {
  TIMES.storage.push(obj);
  return TIMES.storage;
}


/**
 * pipe(func1, func2, func3, ..., funcn)
 * From https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d
 *
 * @example pipe(func1,func2) returns func2(func1(x))
 *
 * @author Eric Elliott
 */
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);


// Exports




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return montage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return view; });
/*
 *  TIMES: Tiny Image ECMAScript Application
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of TIMES
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with TIMES.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

/**
 * @module view
 */
 
/**
 * Rectangular view of a single image 
 *
 * @param {number} x - X-coord of the top-left corner of the rectangle
 * @param {number} y - Y-coord of the top-left corner of the rectangle
 * @param {number} w - Width of the rectangle. A value of -1 corresponds to the input width.
 * @param {number} h - Height rectangle.  A value of -1 corresponds to the input height.
 * @param {TRaster} img - Input Image
 * @param {boolean} copy - Copy mode to manage memory usage. Useless, here just for compatibility. 
 * @returns {TView} Returns a view for rendering
 *
 * @author Jean-Christophe Taveau 
 */
const view = (x=0,y=0,w=-1,h=-1) => (img,copy_mode=true) => {
  console.log('TODO: view(row,column,scale)');
};

/**
 * Montage - Convert a stack in a view for rendering
 *
 * @param {number} row - Row number
 * @param {number} column - Column number
 * @param {number} scale - Scaling of the resulting image
 * @param {number} border - Border
 * @param {TStack} stack - Input Stack
 * @param {boolean} copy - Copy mode to manage memory usage. Useless, here just for compatibility. 
 * @returns {TView} Returns a view for rendering
 *
 * @author Jean-Christophe Taveau
 */
const montage = (row,column,scale=1.0,border=0) => (stack,copy_mode=true) => {
  console.log('TODO: montage(row,column,scale,border)');
  // TODO
  let output = new T.Image('montage','uint8',stack.width, stack.height * stack.nslices);
  output.setPixels( stack.slices.reduce( (accu,x) => [...accu,...x.pixelData], []) );
  return output;
};


// Exports



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return renderUint8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderRGBA; });
/*
 *  TIMES: Tiny Image ECMAScript Application
 *  Copyright (C) 2017  Jean-Christophe Taveau.
 *
 *  This file is part of TIMES
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,Image
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with TIMES.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

/**
 * Functions used to render image in a HTML5 web page
 * @module render
 */
 
/**
 * Display uint8 image
 *
 * @param {TWindow} win - Window used to display the image in the HTML5 page
 * @param {TImage} uint8 - Image containing uint8 pixels data
 * @param {boolean} copy - Useless. Just here for compatibility with other process/render functions.
 *
 * @author Jean-Christophe Taveau
 */
const renderUint8 = (win) => (img8bit,copy=true) => {
  // Tutorial: https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/
  let imgdata = win.ctx.createImageData(win.width, win.height);

  // New RGBA image buffer
  let buf = new ArrayBuffer(win.width * win.height * 4);
  let buf32 = new Uint32Array(buf);
  let buf8 = new Uint8Array(buf);
  // Fill with ABGR color values
  buf32.forEach( (px,i,arr) => arr[i] = T.toABGR(img8bit.pixelData[i],img8bit.pixelData[i],img8bit.pixelData[i],255) );
  console.log(buf32);

  imgdata.data.set(buf8);
  win.ctx.putImageData(imgdata, 0, 0);
};


/**
 * Display RGBA image
 *
 * @param {TWindow} win - Window used to display the image in the HTML5 page
 * @param {TImage} img - Image containing RGBA pixels data
 * @param {boolean} copy - Useless. Just here for compatibility with other process/render functions.
 *
 * @author Jean-Christophe Taveau
 */
const renderRGBA = (win) => (img,copy=true) => {
  // Tutorial: https://hacks.mozilla.org/2011/12/faster-canvas-pixel-manipulation-with-typed-arrays/
  let imgdata = win.ctx.createImageData(win.width, win.height);

  // New RGBA image buffer
  let buf = new ArrayBuffer(win.width * win.height * 4);
  let buf32 = new Uint32Array(buf);
  let buf8 = new Uint8Array(buf);
  // Fill with ABGR color values
  buf32.forEach( (px,i,arr) => arr[i] = T.toABGR(T.red(img.pixelData[i]),T.green(img.pixelData[i]),T.blue(img.pixelData[i]),T.alpha(img.pixelData[i]) ) );

  imgdata.data.set(buf8);
  win.ctx.putImageData(imgdata, 0, 0);
};

// Exports
 



/***/ })
/******/ ]);