var global = window || GLOBAL;


global.bruhdash = {

  chunks:chunks,

  chunk: function(array, number){
    if(isNaN(number))
      return false;
    if(number < 1)
      throw new RangeError('Parameter must be at least' + 1);
    var bag = [];
    var marker = 0;
    while(marker < array.length){
      var cut = array.slice(marker, (marker + number));
      bag.push(cut);
      marker+= number;
    }

    return bag;
  },

  compact: function(array) {
    var clean = [];
    for(var i = 0; i < array.length; i++)
      if(array[i] !== 0 && array[i] !== null && array[i] !== '' && array[i] !== false && !isNaN(array[i]))
        clean.push(array[i]);
    return clean;
  },

  difference: function(array) {
  var count = arguments.length;
  var numbers = [];
  var returnArray = [];
  for(var i = 0; i < array.length; i++){

    numbers.push({
      numValue: arguments[0][i],
      haveMatch:false
    });
  }
  var marker = 0;
  while(marker < array.length){
    var match = numbers[marker];
    for(var j = 1; j < count; j++){
      for(var k = 0; k < arguments[j].length; k++){
        if(match.numValue === arguments[j][k])
          match.haveMatch = true;
      }
    }
    marker++;
  }
  for(var l = 0; l < numbers.length;l++){
    if(numbers[l].haveMatch === false)
      returnArray.push(numbers[l].numValue);
  }

  return returnArray;
  },

  drop: function(array,dropInt){
    if(dropInt === 0)
      return array;
    if(!dropInt)
      return array.slice(1,array.length);
    if(dropInt > array.length)
      return [];
    return  array.slice(dropInt, array.lenth);

  },

  dropRight: function(array,dropInt) {
    if(dropInt === 0)
      return array;
    if(!dropInt)
      return array.slice(0,array.length - 1);
    if(dropInt > array.length)
      return [];
    return  array.slice(0, array.length - dropInt);

  },

  fill: function(array, value, start, end) {
    if(!isNaN(start) && !isNaN(end)){
      while(start < end){
        array[start] = value;
        start++;
      }
    }
    else{
      for(var i = 0; i < array.length; i++)
        array[i] = value;
    }
    return array;
  },

  first: function (array) {
    return array[0];

  },

  indexOf: function (array, value, start) {
    var index = 0;
    if(start)
      index = start;
    for(index; index < array.length;index++)
      if(array[index] === value)
        return index;
  },

  inital: function (array) {
    return array.slice(0, array.length - 1);

  },

  last: function (array) {
    return array[array.length - 1];
  },

  lastIndexof: function (array, value, start) {
  var index = array.length - 1;
    if(!isNaN(start))
      index = start;
    for(index; index > 0;index--)
      if(array[index] === value)
        return index;
  },

  pull: function () {

    var length = arguments.length;
    var newArray = [];
    var returnArray = [];
    for(var x = 0; x < arguments[0].length; x++){

      newArray.push({
        numValue:arguments[0][x],
        isMatch:false
      });
    }

    for(var i=0; i<newArray.length;i++){
      for(var j=1; j<length;j++){
        if(arguments[j] === newArray[i].numValue)
            newArray[i].isMatch = true;
      }
    }

    while(arguments[0].length !== 0)
      arguments[0].pop();
    for(var k = 0; k < newArray.length; k++){
      if(newArray[k].isMatch === false)
        arguments[0].push(newArray[k].numValue);
    }



    return arguments[0];

  },

  pullAt: function () {
    var length = arguments.length;
    var returnArray = [];
    var newArray = [];

    var checkArray = arguments[0];

    for(var i = 0; i < checkArray.length; i++){
      for(var j = 1; j < arguments.length; j++){
        if( i === arguments[j])
          returnArray.push(checkArray[i]);
        else
          newArray.push(checkArray[i]);
      }
    }

    while(checkArray.length !== 0)
      arguments[0].pop();
    for(var k = 0; k < newArray.length; k++){
      checkArray.push(newArray[k]);

    }
    return returnArray;
  },

  rest: function (array) {
    return array.slice(1,array.length);
  },

  slice: function (array, start ,end) {
    var returnArray = [];
    for(var i = start; start < end; start++)
      returnArray.push(array[start]);

    return returnArray;

  },

  take: function (array, number) {
    if(!number)
      return array[0];
    if(number === 0)
      return [];
    if(number> array.length)
      return array;
    return  array.slice(0, number);


  },

  takeRight: function (array, number) {
   if(!number)
      return array[array.length - 1];
    if(number === 0)
      return [];
    if(number> array.length)
      return array;
    return  array.slice(number - 1, array.length);

  },

  zip: function () {

  var length = arguments.length;
    var send = [];
    for(var j = 0; j < arguments[0].length; j++){
      var newArray = [];
      for(var i = 0; i < length; i++)
        newArray.push(arguments[i][j]);
      send.push(newArray);
    }
    return send;
  },

  unzip: function (zip) {
    var length =zip.length;
    var send = [];
    for(var j = 0; j < zip[0].length; j++){
      var newArray = [];
      for(var i = 0; i < length; i++)
        newArray.push(zip[i][j]);
      send.push(newArray);
    }
    return send;
  },

  without: function() {
  var length = arguments.length;
    var newArray = [];
    var returnArray = [];
    for(var x = 0; x < arguments[0].length; x++){
      var number = {
        numValue:arguments[0][x],
        isMatch:false
      };
      newArray.push(number);
    }

    for(var i=0; i<arguments[0].length;i++){
      for(var j=1; j<length;j++){
        if(arguments[j] === newArray[i].numValue)
            newArray[i].isMatch = true;
      }
    }


    for(var k = 0; k < newArray.length; k++)
      if(newArray[k].isMatch === false)
        returnArray.push(newArray[k].numValue);


    return returnArray;
  }

};
/**
 * Divides the array into chunks based off the parameter.
 * @param {array} array
 * @param {number} n
 * @return {array} the number of arrays that can be divided from the orginial array.
 */

function chunks (array, number){
    if(number < 1)
      throw new RangeError('Parameter must be at least' + 1);
    var bag = [];
    var marker = 0;
    while(marker < array.length - 1){
      var cut = array.slice(marker, (marker + number));
      bag.push(cut);
      marker+= number;
    }

    return bag;
  }
