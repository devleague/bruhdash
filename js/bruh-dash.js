var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(arr, num){
    var newArr = [];
    for (var i = 0; i < arr.length; i+=num) {
      newArr.push(arr.slice(i, i + num));
    }
    return newArr;
  },

  compact: function(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (!!arr[i]){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  difference: function(arr, compareArr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      var found = false;
      for (var j = 0; j < compareArr.length; j++) {
        if (arr[i] === compareArr[j]){
          found = true;
          break;
        }
      }
      if (found === false){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  drop: function(arr, num){
    if (num === undefined){
      num = 1;
    }
    var newArr = arr.slice(num);
    return newArr;
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