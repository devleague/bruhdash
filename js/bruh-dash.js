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

  compact: function compact(num) {



  },

  difference: function() {

  },

  drop: function(){

  },

  dropRight: function() {

  },

  fill: function() {

  },

  first: function () {

  },

  indexOf: function () {

  },

  inital: function () {

  },

  last: function () {

  },

  lastIndexof: function () {

  },

  pull: function () {

  },

  pullAt: function () {

  },

  rest: function () {

  },

  slice: function () {

  },

  take: function () {

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


