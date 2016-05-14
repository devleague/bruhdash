var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(array, size){
   var chunks;
   var resultArray = [];
   if(size < 1 || isNaN(size)){
     size = 1;
   }
   while(array.length){
      chunks = array.splice(0,size);
      resultArray.push(chunks);
   }

   return resultArray;
  },

  compact: function(array) {
    for(var i = 0; i < array.length; i++){
      if(array[i] === false || array[i] === null || array[i] === 0
        || array[i] === "" || array[i] === undefined || isNaN(array[i])){
        array.splice(i,1);
      }
    }
    return array;
  },

  difference: function(array, values) {
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < values.length; j++){
        if(array[i] === values[j]){
          array.splice(i,1);
        }
      }
    }
    return array;
  },

  drop: function(array, n){
    if(isNaN(n) || n < 0){
      n = 1;
    }
    for(var i = 0; i < n; i++){
        array.shift();
    }
    return array;
  },

  dropRight: function(array, n) {
    if(isNaN(n) || n < 0){
      n = 1;
    }
    for(var i = 0; i < n; i++){
        array.pop();
    }
    return array;
  },

  fill: function(array, value, start, end) {
    if(start < 0 || isNaN(start))
      start = 0;
    if(isNaN(end))
      end = array.length;
    for(var i = start; i < end; i++){
        array[i] = value;
    }
    return array;
  },

  first: function (array) {
    return array[0];
  },

  indexOf: function (array, value, fromIndex) {
    if(fromIndex < 0 || isNaN(fromIndex)){
      fromIndex = 0;
    }
    for(var i = fromIndex; i < array.length; i++){
      if(array[i] === value){
        return i;
      }
    }
  },

  initial: function (array) {
    array.pop();
    return array;
  },

  last: function (array) {
    return array.pop();
  },

  lastIndexof: function (array, value, fromIndex) {
    if(isNaN(fromIndex)){
      fromIndex = array.length-1;
    }
    for(var i = fromIndex; fromIndex >= 0; i--){
      if(array[i] === value){
        return i;
      }
    }
  },

  pull: function (array, values) {
    for(var i = 0; i < array.length; i++){
      for(var j = 1; j < arguments.length; j++){
          if(array[i] === arguments[j]){
             array.splice(i,1);
             i--;
        }
      }
    }
    return array;
  },

  pullAt: function (array, indexes) {
    var pullArray = [];
    var newArray = array.slice(0,array.length);
    for(var i = 0; i < array.length; i++){
      for(var j = 1; j < arguments.length; j++){
        debugger;
        if(i === arguments[j]){
          pullArray.push(array[i]);
          newArray.splice(i,1);
        }
      }
    }
    array = newArray;
    return pullArray;
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
