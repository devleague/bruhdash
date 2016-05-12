var global = window || GLOBAL;

global.bruhdash = {
  /**
    * Creates an array of elements split into groups
    * the length of size.
    * If array can’t be split evenly,
    * the final chunk will be the remaining elements.
    * @param array {Array} The array to process
    * @param size {Number} The length of each chunk
    * @returns {Array} The new array of chunks
    */
  chunk: function(array, size){
    var numChunks = Math.ceil(array.length / size);
    var chunkedArray = [];
    var chunkOfArray = [];

    chunkOfArray = array.splice(0, size);
    chunkedArray[0] = chunkOfArray;
    for(var i = 1; i < numChunks; i++) {
      chunkOfArray = [];
      chunkOfArray = array.splice(0, size);
      chunkedArray[i] = chunkOfArray;
    }
    return chunkedArray;
  },
  /**
    * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
    * @param array {Array} the array to compact
    * @returns {Array} the new array of filtered values
    */
  compact: function(array) {
    var a;
    var newArray = [];

    for(var x = 0; x < array.length; x++) {
      newArray[x] = array[x];
    }
    for(var i = 0; i < array.length; i++) {
      a = array[i];
        if(a === false || a === null || a === 0 || a === "" || a === undefined || isNaN(a)) {
          newArray.splice(newArray.indexOf(a), 1);
        }
    }
  return newArray;
  },
  /**
    * Creates an array of unique array values not included in the other given arrays using SameValueZero for equality comparisons. The order * of result values is determined by the order they occur in the first array.
    * @param array {Array} The array to inspect.
    * @param values {Array} The values to exclude
    * @returns {Array} the new array of filtered values
    */
  difference: function(array, values) {
    var newArray = [];
    // set newArray equal to array
    for(var i = 0; i < array.length; i++){
      newArray[i] = array[i];
    }
    // remove matching elements from newArray
    for(i = 0; i < array.length; i++) {
      for(var j = 0; j < values.length; j++) {
        if(array[i] === values [j]) {
          newArray.splice(newArray.indexOf(array[i]), 1);
        }
      }
    }
  return newArray;
  },
  /**
    * Creates a slice of array with n elements dropped from the beginning.
    * @param array {Array} The array to query.
    * @param n {number} The number of elements to drop.
    * @returns {Array} Returns the slice of array.
    */
  drop: function(array, n){
    if(n === undefined) {
      return array;
    }
    if(n < array.length) {
      for(var i = 0; i < n; i++) {
      array.shift();
      }
    }
    else {
      array = [];
    }
    return array;
  },
  /**
    * Creates a slice of array with n elements dropped from the end.
    * @param array {Array} The array to query.
    * @param n {Number} The number of elements to drop.
    * @returns {Array} Returns the slice of array.
    */
  dropRight: function(array, n) {
    if(n === undefined) {
      return array;
    }
    if(n < array.length) {
      for(var i = 0; i < n; i++) {
      array.pop();
      }
    }
    else {
      array = [];
    }
    return array;
  },
  /**
    * Fills elements of array with value from start up to, but not including, end.
    * @param array {Array} The array to fill.
    * @param value The value to fill array with.
    * @param start {Number} The start position.
    * @param end {Number} The end position.
    * @returns array {Array} Returns array.
    */
  fill: function(array, value, start, end) {
    var i = 0;
    if(start === undefined && end === undefined) {
      for(i = 0; i < array.length; i++) {
        array[i] = value;
      }
    }
    else if(end === undefined) {
      end = array.length;
      for(i = start; i < array.length; i++) {
        array[i] = value;
      }
    }
    else {
      for(i = start; i < end; i++) {
        array[i] = value;
      }
    }
    return array;
  },

  /**
    * Gets the first element of array.
    * @param array {Array} The array to query.
    * @returns {*} Returns the first element of array.
    */
  first: function (array) {
    return array[0];
  },

  /**
    * Gets the index at which the first occurrence of
    * value is found in array using SameValueZero for
    * equality comparisons.
    * If fromIndex is negative, it’s used as the offset
    * from the end of array.
    * @param array {Array} The array to search.
    * @param value {*} The value to search for.
    * @param fromIndex {Number} The index to search from.
    * @returns {Number} Returns the index of the matched value. else -1.
    */
  indexOf: function (array, value, fromIndex) {
    var i;
    // if no fromIndex, return index of first instance of value
    if(fromIndex === undefined) {
      //console.log("fromIndex is not defined.");
      for(i = 0; i < array.length; i++) {
        if(array[i] === value) {
          return i;
        }
      }
    }
    // if fromIndex is a negative value, use it as the offset and search
    // from that point on in the array.
    else if(fromIndex < 0) {
      //console.log("fromIndex is less than 0.");
      for(i = array.length + fromIndex; i < array.length; i++) {
        if(array[i] === value) {
          return i;
        }
      }
    }
    // if fromIndex is a positive value, search from that index.
    else {
      //console.log("fromIndex is positive.");
      for(i = fromIndex; i < array.length; i++) {
        if(array[i] === value) {
          return i;
        }
      }
    }
    return -1;
  },
  /**
  * Gets all but the last element of array.
  * @param array {Array} The array to query.
  * @returns {Array} Returns the slice of array.
  */
  initial: function (array) {
    if(array === undefined) {
      return undefined;
    }
    var newArray = [];
    for(var i = 0; i < (array.length - 1); i++) {
      newArray[i] = array[i];
    }
    return newArray;
    },

  /**
  * Gets the last element of array
  * @param array {Array} The array to query.
  * @returns {*} Returns the last element of array.
  */
  last: function (array) {
    return array[array.length - 1];
  },

  /**
  * This method is like _.indexOf except that it iterates over  elements of array from right to left.
  * @param array {Array} The array to search.
  * @param value {*} The value to search for.
  * @param fromIndex {Number} The index to search from.
  * @returns {Number} Returns the index of the matched value, else -1.
  */
  lastIndexof: function (array, value, fromIndex) {
    if(fromIndex === undefined) {
      for(var i = array.length - 1; i >= 0; i--) {
        if(array[i] === value) {
          return i;
        }
      }
    }
    else {
      for(var j = fromIndex; j >= 0; j--) {
        if(array[j] === value) {
          return j;
        }
      }
    }
    return -1;
  },
  /**
  * Removes all given values from array using SameValueZero for equality comparisons.
  * Note that this method mutates array.
  * @param array {Array} The array to modify.
  * @param values {Array} The values to remove
  * @returns {Array} Returns array
  */
  pull: function (array) {
    console.log("num arguments = " + arguments.length);
    var newArray = [];
    var i;
    var j;
    for(i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
    for(i = 0; i < array.length; i++) {
      for(j = 1; j < arguments.length; j++) {
        if(array[i] === arguments[j]) {
          newArray.splice(newArray.indexOf(array[i]), 1);
        }
      }
    }
    array = newArray;
    return array;
  },
  /**
  * Removes elements from array corresponding to indexes and returns an array of removed elements.
  * Note that this method mutates the array.
  * @param array {Array} The array to modify.
  * @param indexes {Numbers} The indexes of elements to remove.
  * @returns {Array} Returns teh new array of removed elements.
  */
  pullAt: function (array) {
    var i;
    var j;
    var newArray = [];
    var newArrayCount = 0;
    var pulledValues = [];
    var pullCount = 0;

    for(i = 0; i < array.length; i++) {
      for(j = 1; j < arguments.length; j++) {
        // store pulled values into pulledArray
        console.log("comparing " + i + " to " + arguments[j]);
        if(i === arguments[j]) {
          console.log(i + " matches " + arguments[j]);
          pulledValues[pullCount] = array[i];
          pullCount++;
          j = arguments.length;
          continue;
        }
        // store non-pulled values into new array
        else if(j === arguments.length - 1) {
          console.log("assigning " + array[i] + " to index " + newArrayCount);
          newArray[newArrayCount] = array[i];
          newArrayCount++;
        }
      }
    }
    console.log("newArray: " + newArray);
    array = [];
    for(i = 0; i < newArray.length; i++) {
        array[i] = newArray[i];
    }
    console.log(array.toString());
    return pulledValues;
  },

  /**
  * Gets all but the first element of array
  * @param array {Array} The array to query.
  * @returns {Array} Returns the slice of array.
  */
  rest: function (array) {
    var newArray = [];
    var count = 0;
    for(var i = 1; i < array.length; i++) {
      newArray[count] = array[i];
      count++;
    }
    return newArray;
  },

  /**
  * Creates a slice of array
  * from start up to, but not including, end.
  * @param array {Array} The array to slice.
  * @param start {Number} The start position
  * @param end {Number} The end position
  * @returns {Array} Returns the slice of array.
  */
  slice: function (array, start, end) {
    if(start > array.length || end < start || end < 0) {
      console.log("Invalid start/end.");
      return array;
    }
    var newArray = [];
    var count = 0;
    for(var i = start; i < end; i++) {
      newArray[count] = array[i];
      count++;
    }
    return newArray;
  },

  /**
  * Creates a slice of array with n elements taken from the beginning.
  * @param array {Array} The array to query.
  * @param n {Number} The number of elements to take
  * @returns {Array} returns the slice of array.
  */
  take: function () {
    var i;
    var newArray = [];
    if(n === undefined) {
      // take just the first element
      newArray[0] = array[0];
    }
    else if(n > array.length) {
      // take all elements
      for(i = 0; i < array.length; i++) {
        newArray[i] = array[i];
      }
    }
    else if(n === 0) {
      // take no values
      newArray = [];
    }
    else {
      // take the number of values specified
      for(i = 0; i < n; i++) {
        newArray[i] = array[i];
      }
    }
    return newArray;
  },

  /**
  * Creates a slice of array with n elements taken from the end
  * @param array {Array} The array to query.
  * @param n {Number} The number of elements to take.
  * @returns {Array} Returns the slice of array.
  */
  takeRight: function (array, n) {
    var i;
    var count = 0;
    var newArray = [];
    if(n === undefined) {
      // take just the last element
      newArray[0] = array[array.length - 1];
    }
    else if(n > array.length) {
      // take all elements
      for(i = 0; i < array.length; i++) {
        newArray[i] = array[i];
      }
    }
    else if(n === 0) {
      // take no values
      newArray = [];
    }
    else {
      // take the number of values specified from the right
      for(i = array.length - n; i < array.length; i++) {
        newArray[count] = array[i];
        count++;
      }
    }
    return newArray;
  },

  /**
  * Creates an array of grouped elements, the first of which contains the first elements of the given
  * arrays, the second of which contains the second elements of the given arrays, and so on.
  * @param arrays {Arrays} The arrays to process
  * @returns Returns the new array of grouped elements.
  */
  zip: function () {
    var newArray = [];
    if(arguments.length < 1) {
      console.log("no arguments.");
      return undefined;
    }
    else if(arguments.length < 2) {
      console.log("1 argument.");
      return arguments[0];
    }
    else {
      console.log("arguments >= 2");
      // create a new array
      newArray = new Array(arguments[0].length);
      for(var i = 0; i < arguments[0].length; i++) {
        newArray[i] = new Array(arguments.length);
      }
      // fill array with zipped values
      for(var j = 0; j < arguments[0].length; j++) {
        for(var k = 0; k < arguments.length; k++) {
          newArray[j][k] = arguments[k][j];
        }
      }
      console.log("Created newArray: " + newArray);
    }
    return newArray;
  },

  /**
  * This method is like _.zip except that it accepts an array of grouped elements and \
  * creates an array regrouping the elements to their pre-zip configuration.
  * @param array {Array} The array of grouped elements to process.
  * @returns {Array} Returns the new array of regrouped elements.
  */
  unzip: function (array) {
    // create a new array
  var newArray = new Array(arguments[0].length);
  for(var i = 0; i < arguments[0].length; i++) {
    newArray[i] = new Array(arguments.length);
  }
  // fill array with zipped values
  for(var j = 0; j < arguments[0].length; j++) {
    for(var k = 0; k < arguments.length; k++) {
      newArray[j][k] = arguments[k][j];
    }
  }
  return newArray;
  },

  /**
  * Creates an array excluding all given values using SameValueZero for equality comparisons.
  * @param array {Array} The array to inspect.
  * @param values {...*} The values to exclude.
  * @returns {Array} Returns the new array of filtered values.
  */
  without: function(array) {
    var newArray = [];
    var count = 0;
    for(var i = 0; i < array.length; i++) {
      for(var j = 1; j < arguments.length; j++) {
        if(array[i] === arguments[j]) {
          j = arguments.length;
        }
        else if(array[i] !== arguments[j] && j === arguments.length - 1) {
          newArray[count] = array[i];
          count++;
        }
      }
    }
    return newArray;
  }
};