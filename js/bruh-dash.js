var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
      return arr[arr.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, test) {
      for(var i=0; i < array.length; i++){
        if (array[i] == test) {
          return i;
        }
      }
        return -1;
  },

  // returns the index of the first matching element from left to right
  lastIndexOf: function (arr, test, first) {
    if (first === undefined){
      first = arr.length - 1;
    }
    for (var i = first; i >= 0; i--) {
      if (arr[i] === test){
        return i;
      }
    }
   return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (hi) {
      hi.pop();
      return hi;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
      var secondArr =[];
      for(var i=0; i<arr.length; i++){
        if (arr[i] === false || arr[i] === undefined || arr[i] === null || arr[i] === "" || arr[i] === 0 || isNaN(arr[i])){
        } else {
          secondArr.push(arr[i]);
        }
      }
      return secondArr;
  },

  // creates a slice of an array from the start index up to but not including the end index
   slice: function slice (arr, start, end) {
    var newArr = arr.slice(start, end);
    return newArr;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, number){
    if (isNaN(number)){
      number = 1;
    }
    var newArr = arr.slice(number);
    return newArr;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, number) {
    if(isNaN(number)) {
      number = -1;
    }
    else if (number === 0) {
      number = undefined;
    }
    else {
      number *= -1;
    }
    var newArr =arr.slice(0, number);
    return newArr;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, number) {
    if (isNaN(number)) {
      number = 1;
    }
    return arr.slice(0, number);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, number) {
    if (isNaN(number)) {
      number =1;
    }
    else if (number > arr.length) {
      number = arr.length;
    }
    return arr.slice(arr.length - number);
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, test, first, last) {
    if (isNaN(first)){
      first = 0;
    }
    if (isNaN(last)){
      last = arr.length;
    }
    for (var i = first; i < last; i++) {
      arr[i] = test;
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, test) {
    for (var i=0; i < arr.length; i++) {
      for (var j=0; j< test.length; j++){
        if (arr[i] === test[j]){
          arr.splice(i,1);
      }
    }
  }
    
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, indices) {
    for (var i = 0; i < indices.length; i++); {
      arr.splice(indices[i]-i, 1);
      i++;
    }
    return arr;
  },

  // creates an array excluding all the specified values
  without: function(arr, test) {

  },

  // returns an array with specified values excluded
 difference: function(arr, secondArr) {
    var thirdArr = [];
    for (var i = 0; i < arr.length; i++) {
      var found = false;
      for (var j = 0; j < secondArr.length; j++) {
        if (arr[i] === secondArr[j]){
          found = true;
          break;
        }
      }
      if (found === false){
        thirdArr.push(arr[i]);
      }
    }
    return thirdArr;
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