var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
      return array[0];
  },

  // returns the last element of an array
  last: function (array) {
    return array[array.length - 1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, value, fromIndex) {
    
    return array.indexOf(value, fromIndex);

  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (array, value, fromIndex) {
    if (fromIndex === undefined) {
      fromIndex = array.length - 1;
    }
    return array.lastIndexOf(value, fromIndex);
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    return array.slice(0,array.length-1);
    // return array;
  },
  
  // returns an array with all falsey values removed
  compact: function(array) {
    let compactArray = [];
    array.forEach(function(elem){
      if (elem !== false && elem !== null && elem !== 0 && elem !== "" && elem !== undefined && !isNaN(elem)) {
        compactArray.push(elem);
      }
    });
    return compactArray;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, start, end) {
    return array.slice(start, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, n){
    if (n === undefined) {
      n = 1;
    }
    array.splice(0, n);
    return array;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, n) {
    if (n === undefined) {
      n = 1;
    }
    for (let i = 0; i < n; i++) {
      array.pop();   
    }
    return array;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, n) {
    if (n === undefined) {
      return array.slice(0, 1);
    }
    return array.slice(0, n);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (array, n) {
    if (n === undefined) {
      return array.slice(array.length - 1);
    }
    if (n === 0) {
      return [];

    }
    return array.slice(-n);
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, value, start, end) {
    return array.fill(value, start, end);
  },

  // removes all given values from an array
  pull: function (array) {
    let map = new Map();
    for (let index = 1; index < arguments.length; index++) {
      map.set(arguments[index], 0);      
    }
    for (let index = array.length - 1; index >= 0; index--) {
      if (map.get(array[index]) === 0) {
        array.splice(index, 1);
      }
    }
    return array;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array) {
    let pulledItems = [];
    let temp = array;
    let map = new Map();
    let indices = [];
    for (let index = 1; index < arguments.length; index++) {
      let arg = arguments[index];
      if ((typeof arg) === 'number') {
        pulledItems.push(temp[arg]);
        map.set(arg,arg);

      }
      if (Array.isArray(arg)) {
        arg.forEach(function(elem) {
          pulledItems.push(temp[elem]);
          map.set(elem,elem);
          
        });
      }
    }
    map.forEach(function(value, key){
      indices.push(key);
    });
    indices = indices.sort();
    for (let index = indices.length - 1; index >= 0; index--) {
      array.splice(indices[index], 1);      
    }
    return pulledItems;
  },

  // creates an array excluding all the specified values
  without: function(array) {
    let result = [];
    let map = new Map();
    for (let index = 1; index < arguments.length; index++) {
      map.set(arguments[index], 0);      
    }
    array.forEach(function (elem) {
      if (map.get(elem) !== 0) {
        result.push(elem);
      }
    });
    return result;
  },

  // returns an array with specified values excluded
  difference: function(array) {
    let result = [];
    let map = new Map();
    for (let index = 1; index < arguments.length; index++) {
      let arg = arguments[index];
      if (Array.isArray(arg)) {
        arg.forEach(function(elem){
          map.set(elem, 0);      
        });
      }
    }
    array.forEach(function (elem) {
      if (map.get(elem) !== 0) {
        result.push(elem);
      }
    });
    return result;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {
    let result = [];
    let arraySize = 0;
    for (let i = 0; i < arguments.length; i++) {
      let arg = arguments[i];
      if (Array.isArray(arg)) {
        if (arg.length > arraySize) {
          arraySize = arg.length;
        }
      }      
    }
    for (let i = 0; i < arraySize; i++) {
      result.push([]);      
    }
    for (let i = 0; i < arguments.length; i++) {
      let arg = arguments[i];
      if (Array.isArray(arg)) {
        for (let i  = 0; i < arraySize; i++) {
          result[i].push(arg[i]);
        }        
      }
    }    
    return result;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (array) {
    let result = [];
    for (let i = 0; i < array[0].length; i++) {
      result.push([]);      
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        result[j].push(array[i][j]);
      }      
    }
    return result;

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
