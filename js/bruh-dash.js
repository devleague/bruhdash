var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/
//
global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length -1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, element) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === element){
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, element) {
    for(var i = 0; i < arr.length-1; i--) {
      if(arr[i] === element) {
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var result = arr.pop();
    return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i]) {
        result.push(arr[i])
      }
    }
    return result;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
   var result = [];
   for(var i = 0; i < arr.length; i++) {
     if((i >= start) && (i < end)) {
       result.push(arr[i]);
     }
   }
   return result;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    var result = [];
    if(n === undefined) {
      arr.shift()
      return arr;
    }
    if(n === 0) {
      return arr;
    }
    for(var i = 0; i < arr.length; i++) {
      if( i > n -1) {
      result.push(arr[i]) 
    }
  }
  return result;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    var result = [];
    if(n === 0) {
      return arr;
    }
    ir(n === undefined) {
      arr.pop()
      return arr;
    }
    var lastIdx = arr.length -3
    for(var i = 0; i < arr.length; i++) {
      if(i < lastIdx + 1) {
        result.push(arr[i]);
      }
    }
    return result;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if(n === 0) {
      return [];
    }
    if(n > arr.length -1) {
      return arr;
    }
    if(n === undefined) {
      return [arr[0]]
    }
    return bruhdash.slice(arr, 0, n);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    var result = [];
    var count = 0; 
    if(n === 0) {
      return [];
    }
    if(n > arr.length -1) {
      return arr;
    }
    if(n === undefined) {
      return [arr[arr.length-1]];
    }
    for(var i = arr.length -1; i>= -1; i--) {
      if(count < n) {
        result.unshift(arr[i]);
        count += 1;
      }
    }
    return reuslt;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, thing, start, end) {
    var result = [];
    if(start === undefined && end === undefined) {
      for(var i = 0; i < arr.length; i++) {
        if(i>= start && i < end) {
          result.push(thing)
        } else {
          result.push(arr[i]);
        }
      }
      return result;
    }
  },

  // removes all given values from an array
  pull: function (arr, values) {
    for(var i = 0; i < arr.length; i++) {
      for(var j = 0; j < values.length; j++) {
        if(arr[i] === values[j]) {
          arr.splice(i,1)
        }
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, indexes) {
    for(var i = 0; i < arr.length; i++) {
      for(var j = 0; j < indexes.length; j++) {
        if(i === indexes[j]) {
          arr[i] = false;
        }
      }
    }
    return bruhdash.compact(arr);
  },

  // creates an array excluding all the specified values
  without: function(arr, values) {
    var result = arr.slice();
    for(var i = 0; i < result.length; i++) {
      for(var j = 0; j < values.length; j++) {
        if(result[i] === values[j]) {
          result.splice(i, 1);
        }
      }
    }
    return result;
  },

  // returns an array with specified values excluded
  difference: function(arr, values) {
    var result = [];
    var map = {};
    for(var i = 0; i < values.length; i++) {
      map[values[i]] = true;
    }
    for(var i = 0; i < arr.length; i++) {
      if(map[arr[i]] === undefinied) {
        result.push(arr[i]);
      }
    }
    return result;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

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
