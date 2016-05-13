var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(arr, num){
    if (num < 1 || isNaN(num)){
      num = 1;
    }
    var newArr = [];
    for (var i = 0; i < arr.length; i+=num) {
      newArr.push(arr.slice(i, i + num));
    }
    return newArr;
  },

  compact: function(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]){
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
    if (isNaN(num)){
      num = 1;
    }
    var newArr = arr.slice(num);
    return newArr;
  },

  dropRight: function(arr, num) {
    if (isNaN(num)){
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
    if (isNaN(start)){
      start = 0;
    }
    if (isNaN(end)){
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
    if (isNaN(start)){
      start = 0;
    }else if(start < 0){
      start = start + arr.length;
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
    if (isNaN(start)){
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
    for (var i = 0; i < arr.length; i++) {
      var found = false;
      for (var j = 1; j < arguments.length; j++) {
        if (arr[i] === arguments[j]){
          found = true;
          break;
        }
      }
      if (found === true){
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
  },

  pullAt: function (arr, indexes) {
    var removed = [];
    for (var i = arguments.length - 1; i > 0; i--) {
      removed.push(arr[arguments[i]]);
      arr.splice(arguments[i], 1);
    }
    return removed.reverse();
  },

  rest: function (arr) {
    return arr.slice(1);
  },

  slice: function (arr, start, end) {
    var newArr = [];
    if (isNaN(start)){
      start = 0;
    }
    if (isNaN(end)){
      end = arr.length - 1;
    }
    for (var i = start; i < end; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  },

  take: function (arr, num) {
    if (isNaN(num)){
      num = 1;
    }
    return arr.slice(0, num);
  },

  takeRight: function (arr, num) {
    if (isNaN(num)){
      num = 1;
    }else if(num > arr.length){
      num = arr.length;
    }
    return arr.slice(arr.length - num);
  },

  zip: function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push([]);
      for (var j = 0; j < arguments.length; j++) {
        newArr[i].push(arguments[j][i]);
      }
    }
    return newArr;
  },

  unzip: function (arr) {
    var newArr = [];
    for (var i = 0; i < arr[0].length; i++) {
      newArr.push([]);
      for (var j = 0; j < arr.length; j++) {
        newArr[i].push(arr[j][i]);
      }
    }
    return newArr;
  },

  without: function (arr, values) {
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
    return newArr;
  }
};