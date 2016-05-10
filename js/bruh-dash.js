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

  dropRight: function(arr, num) {
    if (num === undefined){
      num = -1;
    }else if (num === 0){
      num = undefined;
    }else{
      num *= -1;
    }
    var newArr = arr.slice(0, num);
    return newArr;
  },

  fill: function(arr, value, start, end) {
    if (start === undefined){
      start = 0;
    }
    if (end === undefined){
      end = arr.length;
    }
    for (var i = start; i < end; i++) {
      arr[i] = value;
    }
    return arr;
  },

  first: function (arr) {
    return arr[0];
  },

  indexOf: function (arr, value, start) {
    if (start === undefined){
      start = 0;
    }
    for (var i = start; i < arr.length; i++) {
      if (arr[i] === value){
        return i;
      }
    }
    return -1;
  },

  initial: function (arr) {
    return arr.slice(0, arr.length-1);
  },

  last: function (arr) {
    return arr[arr.length-1];
  },

  lastIndexOf: function (arr, value, start) {
    if (start === undefined){
      start = arr.length - 1;
    }
    for (var i = start; i >= 0; i--) {
      if (arr[i] === value){
        return i;
      }
    }
    return -1;
  },

  pull: function (arr, values) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      var found = false;
      for (var j = 1; j < arguments.length; j++) {
        if (arr[i] === arguments[j]){
          found = true;
          break;
        }
      }
      if (found === false){
        newArr.push(arr[i]);
      }
    }
    arr = newArr;
    return arr;
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