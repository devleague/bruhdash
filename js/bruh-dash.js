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
    return  arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, value) {
    for(var i=0; i<array.length; i++){
      if (array[i]==value){
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from left to right
  lastIndexOf: function (array, value) {
    for(var i=array.length-1; i>=0; i--){
      if (array[i]==value){
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    array.pop();
    return array;
  },

  // returns an array with all falsey values removed
  compact: function(array) {
    var newArray = [];
    for(var i=0; i<array.length; i++){
      if (array[i]===false || array[i]===null || array[i]===0 || array[i]===undefined || array[i]==="" || isNaN(array[i])) {
      } else {
        newArray.push(array[i]);
      }
    }
    return newArray;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, start=0, end=array.length) {
    var newArray = [];
    for (var i=start; i<end; i++){
      newArray.push(array[i]);
    }
    return newArray;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, n=1){
    for (var i=0; i<n; i++){
      array.shift();
    }
    return array;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, n=1){
    for (var i=0; i<n; i++){
      array.pop();
    }
    return array;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, n=1) {
    if (n>array.length) return array;
    var newArray = [];
    for (var i=0; i<n; i++){
      newArray.push(array[i]);
    }
    return newArray;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (array, n=array.length) {
    if (n>array.length) return array;
    if (n==0) return [];
    var newArray = [];
    for (var i=n-1; i<array.length; i++){
      newArray.push(array[i]);
    }
    return newArray;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, value, start=0, end=array.length) {
    for (i=start; i<end; i++){
      array[i] = value;
    }
    return array;
  },

  // removes all given values from an array
  pull: function (array, values) {
    for (var i=0; i<array.length; i++){
      for (var j=0; j<values.length; j++){
        if (array[i] == values[j]){
          array.splice(i, 1);
        }
      }
    }
    return array;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array, indices) {
    var i = 0;
    for(var j=0; j<indices.length; j++){
      array.splice(indices[j]-i, 1);
      i++;
    }
    return array;
  },

  // creates an array excluding all the specified values
  without: function(array, values) {
    var newArray = [];
    var val = false;
    for (i=0; i<array.length; i++){
      for (j=0; j<values.length; j++){
        if (array[i]===values[j]){
          val = true;
          break;
        }
      }
      if (val==false) {newArray.push(array[i]);}
      val = false;
    }
    return newArray;
  },

  // returns an array with specified values excluded
  difference: function(array, values) {
    var newArray = [];
    var val = false;
    for (i=0; i<array.length; i++){
      for (j=0; j<values.length; j++){
        if (array[i]===values[j]){
          val = true;
          break;
        }
      }
      if (val==false) {newArray.push(array[i]);}
      val = false;
    }
    return newArray;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function (array1, array2) {
    var newArray = [];
    for (var i=0; i<array1.length; i++){
      newArray.push([array1[i], array2[i]]);
    }
    return newArray;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arrays) {
    var newArray = [];
    var ac = arrays[0].length;
    for (var i = 0; i<ac; i++){
      var intArr = [];
      for (var j = 0; j<arrays.length; j++){
        intArr.push(arrays[j][i]);
      }
      newArray.push(intArr);
    }
    return newArray;
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(array, size=1){
    var newArray = [];
    if (array.length==0){ return []; }

    if (size>array.length){
      newArray.push(array);
      return newArray;
    }
    var n = 0;
    var groupSize = 0;
    if (array.length%size==0){
      groupSize = array.length/size;
    } else {
      groupSize = (array.length/size - array.length%size) + 1;
    }
    for (var i=0; i<groupSize; i++){
      var iArr = [];
      for (j=0; j<size && n<array.length ; j++){
        iArr.push(array[n]);
        n++;
      }
      newArray.push(iArr);
    }
    return newArray;
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(object, func) {
    if (Array.isArray(object)){
      for (i=0; i<object.length; i++){
        func(object[i]);
      }
    } else {
      for (i in object){
        func(object[i]);
      }
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(object, f) {
    var newArray = [];
    if (Array.isArray(object)){
      for (i=0; i<object.length; i++){
        newArray.push(f(object[i]));
      }
    } else { for(i in object){
        newArray.push(f(object[i]));
      }
    }
    return newArray;
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(collection, f) {

    if (Array.isArray(collection)){
      var newArray = [];
      for (i=0; i<collection.length; i++){
        if (f(collection[i])){
          newArray.push(collection[i]);
        }
      }
      return newArray;
    } else {
      var newObj = {};
      for(i in collection){
        if (f(collection[i])) {
          newObj[i] = collection[i];
        };
      }
      return newObj;
    }
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(collection, iteratee, accumulator=0) {
    if (Array.isArray(collection)){
      for (i=0; i<collection.length; i++){
        accumulator = iteratee(accumulator, collection[i]);
      }
      return accumulator;
    } else {
      for(i in collection){
        accumulator = iteratee(accumulator, collection[i]);
      }
      return accumulator;
    }
  }
};