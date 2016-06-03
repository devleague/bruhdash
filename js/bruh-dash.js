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
    var compArray = array.slice(0,array.length);
    for(var i = 0; i < array.length; i++){
      if(array[i] === false || array[i] === null || array[i] === 0
        || array[i] === "" || array[i] === undefined || isNaN(array[i])){
        compArray.splice(i,1);
      }
    }
    return compArray;
  },

  difference: function(array, values) {
    var diffArray = array.slice(0, array.length);
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < values.length; j++){
        if(array[i] === values[j]){
          diffArray.splice(i,1);
        }
      }
    }
    return diffArray;
  },

  drop: function(array, n){
    var dropArray = array.slice(0,array.length);
    if(isNaN(n) || n < 0){
      n = 1;
    }
    for(var i = 0; i < n; i++){
        dropArray.shift();
    }
    return dropArray;
  },

  dropRight: function(array, n) {
    var dropRightArray = array.slice(0,array.length);
    if(isNaN(n) || n < 0){
      n = 1;
    }
    for(var i = 0; i < n; i++){
        dropRightArray.pop();
    }
    return dropRightArray;
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
    var index = [];
    for(var k = 1; k < arguments.length; k++){
        index.push(arguments[k]);
    }
    index.sort();
    for(var i = array.length-1; i >= 0; i--){
      for(var j = index.length-1; j >= 0; j--){
        if(i === index[j]){
          pullArray.unshift((array.splice(i,1))[0]);
        }
      }
    }
    return pullArray;
  },

  rest: function (array) {
    var restArray = array.slice(1,array.length);
    return restArray;
  },

  slice: function (array, start, end) {
    if(isNaN(start) || start < 0){
      start = 0;
    }
    if(isNaN(end) || end > array.length){
      end = array.length;
    }
    var slicedArray = [];
    for(start; start < end; start++){
      slicedArray.push(array[start]);
    }
    return slicedArray;
  },

  take: function (array, n) {
    if(isNaN(n)){
      n = 1;
    }else if(n > array.length){
      n = array.length;
    }
    var takeArray = [];
    for(var i = 0; i < n; i++){
      takeArray.push(array[i]);
    }
    return takeArray;
  },

  takeRight: function (array, n) {
    if(isNaN(n)){
      n = 1;
    }else if(n > array.length){
      n = array.length;
    }
    var takeRightArray = [];
    for(var i = 0; i < n; i++){
      var popped = array.pop();
      takeRightArray.unshift(popped);
    }
    return takeRightArray;
  },

  zip: function (arrays) {
    var zipArray = [];
    for(var i = 0; i < arguments[i].length; i++){
      zipArray[i] = [];
      for(var j = 0; j < arguments.length; j++){
        zipArray[i].push(arguments[j][i]);
      }
    }
    return zipArray;
  },

  unzip: function (array) {
    var unzipArray = [];
    //not sure if you can do this...
    //I'm assuming that all the arrays are the same size
    for(var i = 0; i < array[0].length; i++){
      unzipArray[i] = [];
      for(var j = 0; j < array.length; j++){
        unzipArray[i].push(array[j][i]);
      }
    }
    return unzipArray;
  },

  without: function(array, values) {
    for(var i = 0; i < array.length; i++){
      for(var j = 1; j < arguments.length; j++){
        if(array[i] === arguments[j]){
          array.splice(i,1);
          i--;
        }
      }
    }
    return array;
  }
};
