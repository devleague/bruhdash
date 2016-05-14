var global = window || GLOBAL;

global.bruhdash = {
  /**
* Creates an array of elements split into groups the length of size.
* If array can't be split evenly, the final chunk will be the remaining elements.
* @param {Array} array – The array to process.
* @param {number} [size=1] – The length of each chunk
* @returns {Array} – Returns the new array of chunks.
*/
chunk: function chunk(array, size){
    if (size < 1 || isNaN(size)){
      size = 1;
    }
    var arr = array.slice(0);
    var chunkArr = [];
    while (arr.length){
      var chunked = arr.splice(0, size);
      chunkArr.push(chunked);
    }
    return chunkArr;
  },

  compact: function compact(array) {
    var values = [];
    for (var i = 0; i < array.length; i++){
    if (array[i]){
      values.push(array[i]);
    }
  }
    return values;
  },

  difference: function difference(array, values) {
    var diffArr = [];
    for (var i = 0; i < array.length; i++){
      if (values.indexOf(array[i]) === -1) {
        diffArr.push(array[i]);
      }
    }
    return diffArr;

  },

  drop: function drop(array, n){
    var dropArray = [];
    dropArray.push(array.slice(n));
    return dropArray;
  },

  dropRight: function dropRight(array, n) {
    var dropIt = [];
    dropIt.push(array.slice(0, -n));
    return dropIt;
  },

  fill: function fill(array, value, start, end){


  },

  first: function first(array) {
    var firstElement = array.shift();
    return firstElement;
  },

  indexOf: function indexOf (array, value, index) {
      return array.indexOf(value);
  },

  initial: function initial (array) {
    return array.slice(0, -1);
  },

  last: function last(item) {
    var lastElement = item.pop();
    return lastElement;
  },

  lastIndexof: function lastIndexof(array, value) {
    var lastIndex = array.lastIndexOf(value);
    return lastIndex;
  },

  pull: function pull(array, values) {
    var pulled = [];
      if (array.indexOf(values) !== -1){
        pulled.push(array.slice(0, values));
      }
      return pulled;

  },

  pullAt: function () {

  },

  rest: function rest(array) {
    var tail = array.slice(1);
    return tail;

  },

  slice: function slice(array, start, end) {
    var arr = array.slice(start, end);
    return arr;

  },

  take: function take(array, n) {
    var taken = array.slice(0, n);
    return taken;

  },

  takeRight: function () {

  },

  zip: function () {

  },

  unzip: function () {

  },

  without: function() {

  }
};


