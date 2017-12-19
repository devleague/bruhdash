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
    return array[array.length -1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, value) {
    return array.indexOf(value);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (array, value) {
    return array.lastIndexOf(value);
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    array.pop();
    return array;
  },

  // returns an array with all falsey values removed
  compact: function(array) {
    return array.reduce((acc, curr) => {
      curr ? acc.push(curr) : acc;
      return acc;
    }, [])
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, num1, num2) {
    return array.slice(num1, num2);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, num){
    num === undefined ? num = 1 : num;
    return array.slice(num);
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, num) {
    num === undefined ? num = 1 : num;
    return array.slice(0, array.length - num);
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, num) {
    num === undefined ? num = 1 : num;
    return array.slice(0, num);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (array, num) {
    num === undefined ? num = 1 : num;
    return array.slice(array.length - num, array.length);
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, filler, start, end) {
    start === undefined ? (start = 0, end = array.length) : (start = start, end = end);
    for(var i = start; i < end; i++){
        array[i] = filler;
      }
      return array;
  },

  // removes all given values from an array
  pull: function (array, ...args) {
    args.forEach(function(element){
      let index = array.indexOf(element);
      array.splice(index, 1);
    })
    return array;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array, removedIndex) {

    removedIndex.forEach((element, index) => array.splice(element-index, 1));
    return array;
    // var newArray = [];
    // array.forEach((element,index) => {
    //   if(remIdx.indexOf(index)=== -1){
    //     newArray.push(element);
    //   }
    // });
    //
    // return newArray;
  },

  // creates an array excluding all the specified values
  without: function(array, args) {
    var newArray = [];
    array.forEach(function(element){
      if(args.indexOf(element) === -1){
        newArray.push(element);
      }
    })
    return newArray;
  },

  // returns an array with specified values excluded
  difference: function(array, args) {
    var newArray = [];
    array.forEach((element) => {
      if(args.indexOf(element) === -1){
        newArray.push(element);
      }
    });
    return newArray;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function (arg1, arg2) {
    console.log(arguments);
    arg1.forEach((element);
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
