var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(array, size){
      var chunkArray = [];
      for (var i = 0; i < array.length; i += size) {
        chunkArray.push(array.slice(i, i + size));
      }
      return chunkArray;
  },

  compact: function(array) {
    var compactArray = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
      compactArray.push(array[i]);
      }
    }
    return compactArray;
  },

  difference: function(array, ignored) {
    var uniqueValueArray = [];
    for (var i = 0; i < array.length; i++) {
      var compare = false;
      for (var j = 0; j < ignored.length; j++) {
        if (array[i] === ignored[j]) {
          compare = true;
        }
      }
      if (compare === false) {
        uniqueValueArray.push(array[i]);
      }
    }
    return uniqueValueArray;
  },

  drop: function(array, removeBy){
    if (removeBy < 0) {
      removeBy = 0;
    }
    var dropArray = array.slice(removeBy);
    return dropArray;
  },

  dropRight: function(array, removeBy) {
    if (removeBy < 0) {
      removeBy = 0;
    }
    var dropRightArray = array.slice(0, -removeBy);
    return dropRightArray;
  },

  fill: function(array, fillValue, start, end) {
    for (var i = start; i < end; i++) {
      array[i] = fillValue;
    }
    return array;
  },

  first: function (array) {
    return array[0];
  },

  indexOf: function (array, searchValue, start) {
    if (start === undefined || isNaN(start)) {
      start = 0;
    }
    if (start >= 0) {
      for (var i = start; i < array.length; i++) {
        if (array[i] === searchValue) {
          return i;
        }
      }
    } else {
      for (var j = array.length + start; j < array.length; j++) {
        if (array[j] === searchValue) {
          return j;
        }
      }
    }
    return -1;
  },

  initial: function (array) {
    var initialArray = array.slice(0, array.length - 1);
    return initialArray;
  },

  last: function (array) {
    return array[array.length - 1];
  },

  lastIndexOf: function (array, searchValue, start) {
    if (start === undefined || isNaN(start)) {
      start = array.length - 1;
    }
    if (start >= 0) {
      for (var i = start; i >= 0; i--) {
        if (array[i] === searchValue) {
          return i;
        }
      }
    } else {
      for (var j = array.length + start; j >= 0; j--) {
        if (array[j] === searchValue) {
          return j;
        }
      }
    }
    return -1;
  },

  pull: function (array) {
    for (var i = 0; i < array.length; i++) {
      for (var j = 1; j < arguments.length; j++) {
        if (array [i] === arguments[j]) {
          array.splice(i, 1);
          i = 0;
        }
      }
    }
    return array;
  },

  pullAt: function (array) {
    var pullAtArray = [];
    for (var i = 1; i < arguments.length; i++) {
      pullAtArray.push(array[arguments[i]]);
    }
    for (var j = arguments.length - 1; j > 0; j--) {
      array.splice(arguments[j], 1);
      }
    return pullAtArray;
  },

  rest: function (array) {
    return array.slice(1, array.length);
  },

  slice: function (array, start, end) {
    var sliceArray = [];
    if (start === undefined || start < 0 || isNaN(start)) {
      start = 0;
    }
    if (end === undefined || isNaN(end)) {
      end = array.length;
    }
    if (end >= 0) {
      for (var i = start; i < end; i++) {
        sliceArray.push(array[i]);
      }
    } else {
      for (var j = start; j < array.length + end; j++) {
        sliceArray.push(array[j]);
      }
    }
    return sliceArray;
  },

  take: function (array, numOfElements) {
    if (numOfElements === undefined || isNaN(numOfElements)) {
      numOfElements = 0;
    }
    return array.slice(0, numOfElements);
  },

  takeRight: function (array, numOfElements) {
    if (numOfElements === undefined || isNaN(numOfElements) || numOfElements > array.length) {
      numOfElements = 0;
    }
    return array.slice(array.length - numOfElements);
  },

  zip: function (array) {
    var zipArray = [];
    for (var i = 0; i < array.length; i++) {
      zipArray.push([]);
      for (var j = 0; j < arguments.length; j++) {
        zipArray[i].push(arguments[j][i]);
      }
    }
    return zipArray;
  },

  unzip: function (array) {
    var unzipArray = [];
    for (var i = 0; i < array.length; i++) {
      unzipArray.push([]);
      for (var j = 0; j < array.length; j++) {
        unzipArray[i].push(array[j][i]);
      }
    }
    return unzipArray;
  },

  without: function(array) {
    var withoutArray = [];
    for (var i = 0; i < array.length; i++) {
      var compare = false;
      for (var j = 0; j < arguments.length; j++) {
        if (array[i] === arguments[j]) {
          compare = true;
        }
      }
      if (compare === false) {
        withoutArray.push(array[i]);
      }
    }
    return withoutArray;
  }
};
console.log(bruhdash.chunk ([1, 2, 3, 4], 2));
console.log(bruhdash.compact ([0, 1, 2, 3, 4]));
console.log(bruhdash.difference ([1, 2, 3, 4], [3, 4, 5]));
console.log(bruhdash.drop (['string', 1, 2, 3], -1));
console.log(bruhdash.dropRight (['string', 1, 2, 3], 3));
console.log(bruhdash.fill ([1, 2, 3, 4, 5, 6], '*', 2, 5));
console.log(bruhdash.first ([1, 2, 3]));
console.log('indexOf: ', bruhdash.indexOf ([1, 2, 2, 3, 4, 5], 2, -4));
console.log('initial: ', bruhdash.initial ([1, 2, 3]));
console.log('last: ', bruhdash.last ([1, 2, 3]));
console.log('lastIndexOf: ', bruhdash.lastIndexOf ([1, 2, 3, 2, 4, 5, 2], 2));
var pullArray = [1, 2, 3, 4, 1, 2, 1, 3, 4];
console.log('pull: ', bruhdash.pull(pullArray, 2, 4));
var datArray = [1, 2, 3, 4];
console.log('pullAt: ', bruhdash.pullAt(datArray, 1, 3));
console.log('Spliced Array: ', datArray);
console.log('rest: ', bruhdash.rest([1, 2, 3,]));
console.log('slice: ', bruhdash.slice([0, 1, 2, 3, 4, 5], 2, 'banana'));
console.log('take: ', bruhdash.take([0, 1, 2, 3], 2));
console.log('takeRight: ', bruhdash.takeRight([0, 1, 2, 3], 2));

var a1 = ['Where\'s', 'G', 'Needs'];
var a2 = ['The', 'G', 'Moar'];
var a3 = ['Beef', 'n00b', 'Bacon'];
var zip1 = bruhdash.zip(a1, a2, a3);
var unzip1 = bruhdash.unzip(zip1);
console.log('zip: ', zip1);
console.log('unzip: ', unzip1);

console.log('without: ', bruhdash.without([1, 2, 3, 4, 5], 1, 3));