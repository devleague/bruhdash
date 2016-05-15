var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(array1, chunksLength) {

    var x;
    var arrayReturned = [];

      if(chunksLength < 1 || isNaN(chunksLength)) {

        chunksLength = 1;

    }

      while(array1.length) {

        x = array1.splice(0, chunksLength);

          arrayReturned.push(x);
    }

      return arrayReturned;

  },

  compact: function(array2) {

    for(var i = 0; i < array2.length; i++) {

        if(array2[i] === false || array2[i] === null || array2[i] === 0 || array2[i] === "" || array2[i] === undefined || isNaN(array2[i])) {

          array2.splice(i, 1);

      }

    }

      return array2;

  },

  difference: function(array3, valuesToExclude) {

    for(var i = 0; i < array3.length; i++) {

      for(var j = 0; j < valuesToExclude.length; j++) {

        if(array3[i] === valuesToExclude[j]) {

          array3.splice(i,1);

        }

      }

    }

      return array3;

  },

  drop: function(array4, dropFirstElement) {

    if(dropFirstElement < 0 || isNaN(dropFirstElement)) {

      dropFirstElement = 1;

    }

    for(var i = 0; i < dropFirstElement; i++) {

      array4.shift();

    }

      return array4;

  },

  dropRight: function(array5, dropLastElement) {

    if(dropLastElement < 0 || isNaN(dropLastElement)) {

      dropLastElement = 1;

    }

    for(var i = 0; i < dropLastElement; i++) {

      array5.pop();

    }

      return array5;

  },

  fill: function(array6, fillArrayWith, startPosition, endPosition) {

    if(startPosition < 0 || isNaN(startPosition)) {

      startPosition = 0;

      }

    for(var i = startPosition; i < endPosition; i++) {

      array6[i] = fillArrayWith;

    }

      return array6;

  },

  first: function (array7) {

    return array7[0];

  },

  indexOf: function (array8, searchedValue, searchedIndex) {

    if(searchedIndex < 0 || isNaN(searchedIndex) || searchedIndex === undefined) {

      searchedIndex = 0;

    }

    if(searchedIndex >= 0) {

      for(i = searchedIndex; i < array8.length; i++) {

        if(array8[i] === searchedValue) {

          return i;

        }

      }

    }

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

console.log(global.bruhdash.chunk(['a', 'b', 'c', 'd'], 2));
console.log(global.bruhdash.chunk(['a', 'b', 'c', 'd'], 3));
console.log(global.bruhdash.compact([0, 1, false, 2, '', 3]));
console.log(global.bruhdash.difference([3, 2, 1], [4, 2]));
console.log(global.bruhdash.drop([1, 2, 3]));
console.log(global.bruhdash.drop([1, 2, 3], 0));
console.log(global.bruhdash.dropRight([1, 2, 3]));
console.log(global.bruhdash.dropRight([1, 2, 3], 0));
console.log(global.bruhdash.fill([4, 6, 8, 10], 'a'));
console.log(global.bruhdash.fill([4, 6, 8, 10], '*', 1, 3, '*', 1, 3));
console.log(global.bruhdash.first([1, 2, 3]));
console.log(global.bruhdash.indexOf([1, 2, 1, 2], 2));
console.log(global.bruhdash.indexOf([1, 2, 1, 2], 2, 2));