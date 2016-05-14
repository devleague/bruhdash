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
    for (var i = 0; i < array.length; i++){
      if (array.indexOf(values) !== -1){
        var arr = false;
        for (var j = 0; j < arguments.length; j++){
          if (arr === false){
            pulled.push(array[i]);
          if (arr === true){
            arr.splice(i, 1);

        }
      }
    }
      }
      return pulled;
    }

  },

  pullAt: function pullAt(array, indexes) {
    var pulled = [];
    for (var i = 0; i < array.length; i++){
      pulled.push(array[arguments[i]]);
    }
    for (var j = array.length - 1; j > 0; j--){
      array.splice(arguments[j], 0);
    }
    return pulled;

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

  takeRight: function takeRight(array, n) {
    var takeR = array.slice(n, -1);
    return takeR;

  },

  zip: function zip(array) {
    var zipped = [];
    for (var i=0; i < array.length; i++){
      zipped.push([]);
      for (var j = 0; j < arguments.length; j++){
        zipped[i].push(arguments[j][i]);
      }
    }
    return zipped;

  },

  unzip: function unzip(array) {
    var unzipped = [];
    for (var i = 0; i < array.length; i++){
      unzipped.push([]);
      for (var j = 0; j < this.length; j++){
        unzipped[i].push(array[i][j]);
        unzipped[i].push(array[j][i]);
      }
    }
    return unzipped;


  },

  without: function without(array, values) {
     var newArr = [];
    for (var i = 0; i < array.length; i++){
        var arr = false;
        for (var j = 1; j < arguments.length; j++){
          if (array[i] === arguments[j]){
            arr = true;
          }
        }
        if (arr === false){
          newArr.push(array[i]);
      }
    }
        return newArr;
  }

};


