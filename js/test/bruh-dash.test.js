var assert = chai.assert;

describe("#first", function() {
  it('should return the first element of an array', function(){
    assert.deepEqual(bruhdash.first([1,2,3]), 1)
  })
})

describe("#last", function() {
  it('should return the last element of an array', function() {
    assert.deepEqual(bruhdash.last([1,2,3]), 3);
  })
})

describe("#indexOf", function() {
  it('should return index of first value matched from left to right', function() {
    assert.deepEqual(bruhdash.indexOf([1,2,3], 2), 1);
  })
  it('should return -1 if value cannot be found in array', function() {
    assert.deepEqual(bruhdash.indexOf([1,2,3], 4), -1);
  })
})

describe("#lastIndexOf", function() {
  it('should return index of first value matched from right to left', function() {
    assert.deepEqual(bruhdash.lastIndexOf([1,2,3], 2), 1)
  })
  it('should return -1 if value cannot be found in array', function() {
    assert.deepEqual(bruhdash.lastIndexOf([1,2,3], 4), -1);
  })
})

describe("#initial", function() {
  it('should return all but the last element', function() {
    assert.deepEqual(bruhdash.initial([1,2,3]), [1,2])
  })
})

describe("#compact", function() {
  it("should remove all falsy values", function() {
    assert.deepEqual(bruhdash.compact([1, false, null, 0, '', NaN, 2]), [1,2]);
  })
})

describe("#slice", function() {
  it('should return a new array of the start and end indices specified', function() {
    assert.deepEqual(bruhdash.slice([1,2,3,4,5], 2,4), [3,4]);
  })
})

describe("#drop", function() {
  it("should drop the first element of the array and return the remainder if no amount to drop is specified", function() {
    assert.deepEqual(bruhdash.drop([1,2,3]), [2,3]);
  })
  it("should return the entire array if the amount to drop is 0", function(){
    assert.deepEqual(bruhdash.drop([1,2,3], 0), [1,2,3]);
  })
  it("should drop the correct amount of array elements", function() {
    assert.deepEqual(bruhdash.drop([1,2,3,4,5], 2), [3,4,5]);
  })
})

describe("#dropRight", function() {
  it("should drop the last element of the array if no amount to drop is specified", function() {
    assert.deepEqual(bruhdash.dropRight([1,2,3]), [1,2]);
  })
  it("should return the entire array if the amount to drop is 0", function() {
    assert.deepEqual(bruhdash.dropRight([1,2,3], 0), [1,2,3]);
  })
  it("should drop the correct amount of array elements from the right side", function() {
    assert.deepEqual(bruhdash.dropRight([1,2,3,4,5], 2), [1,2,3]);
  })
})

describe("#take", function() {
  it('should return a slice of the array with n elements from the beginning', function() {
    assert.deepEqual(bruhdash.take([1,2,3,4,5], 3), [1,2,3]);
  })
  it('should return a slice of just the first element if no amount to take is specified', function() {
    assert.deepEqual(bruhdash.take([1,2,3]), [1]);
  })
  it('should return an empty array if the amount to take is 0', function() {
    assert.deepEqual(bruhdash.take([1,2,3], 0), []);
  })
  it('should return the same array if the amount to slice is greater than the array length', function() {
    assert.deepEqual(bruhdash.take([1,2,3], 5), [1,2,3]);
  })
})

describe("#takeRight", function() {
  it('should return a slice of the array with n elements from the end', function() {
    assert.deepEqual(bruhdash.takeRight([1,2,3,4,5], 3), [3,4,5]);
  })
  it('should return a slice of just the last element if no amount to take is specified', function() {
    assert.deepEqual(bruhdash.takeRight([1,2,3]), [3]);
  })
  it('should return an empty array if the amount to take is 0', function() {
    assert.deepEqual(bruhdash.takeRight([1,2,3], 0), []);
  })
  it('should return the same array if the amount to slice is greater than the array length', function() {
    assert.deepEqual(bruhdash.take([1,2,3], 5), [1,2,3]);
  })
})

describe("#fill", function() {
  it("should fill entire array if no start and end is specified", function(){
    assert.deepEqual(bruhdash.fill([1,2,3], 'a'), ['a', 'a', 'a']);
  })
  it("should fill an array with specified start and end indexes", function() {
    assert.deepEqual(bruhdash.fill([4,6,8,10], '*', 1, 3), [4, '*', '*', 10]);
  })
})

describe("#pull", function() {
  it('should pull all specified values from array', function() {
    assert.deepEqual(bruhdash.pull(['a','b','c'], 'a', 'b'), ['c']);
  })
})

describe("#pullAt", function() {
  it('should pull the elements of the arrays from the indices specified', function() {
    assert.deepEqual(bruhdash.pullAt([1,2,3,4,5], [1,3]), [2,4]);
  })
})

describe("#without", function() {
  it('should return an array without the values specified', function() {
    assert.deepEqual(bruhdash.without([1,2,3,4,5], 3,4), [1,2,5])
  })
})

describe("#difference", function() {
  it("should find the difference of two arrays", function() {
    assert.deepEqual(bruhdash.difference([1,2,3], [1,2,5,1,2]), [3]);
  })
})

describe("#zip", function() {
  it('should return an array of grouped elements', function() {
    assert.deepEqual(bruhdash.zip([1,2,3], ['a','b','c']),[[1,'a'],[2,'b'],[3,'c']] );
  })
})

describe("#unzip", function() {
  it('should return an array of ungrouped elements', function() {
    assert.deepEqual(bruhdash.unzip([[1,'a'],[2,'b'],[3,'c']]), [[1,2,3], ['a','b','c']]);
  })
})

describe("#chunk", function() {
  it("should be able to chunk if the array length is unevenly divided by size", function() {
    assert.deepEqual(bruhdash.chunk([1,2,3,4,5], 2), [[1,2], [3,4], [5]]);
  })
  it("for empty arrays should return an empty array", function() {
    assert.deepEqual(bruhdash.chunk([], 2), [] );
  })
  it("should return an empty array if size param is 0", function() {
    assert.deepEqual(bruhdash.chunk([1,2,3], 0), []);
  })
  it("should return the original array in an array if size param is equal to the array length", function() {
    assert.deepEqual(bruhdash.chunk([1,2,3], 3), [[1,2,3]]);
  })
  it("should return the original array in an array if size param is more than array length", function(){
    assert.deepEqual(bruhdash.chunk([1,2,3],5), [[1,2,3]]);
  })
})

describe("#forEach", function() {
  it('should be able to iterate over an array', function() {
    var result = [];
    bruhdash.forEach([1,2,3], function(item, key) {
      result.push(item)
    })
    assert.deepEqual(result, [1,2,3])
  })
  it('should be able to iterate over an object', function(){
    var result = [];
    bruhdash.forEach({'a':1, 'b':2, 'c':3}, function(item, key) {
      result.push(item)
    })
    assert.deepEqual(result, [1,2,3])
  })
})

describe("#map", function() {
  it('should be able to iterate over arrays and return a new array', function() {
    assert.deepEqual(bruhdash.map([1,2,3], function(item) {
      return item * 2
    }), [2,4,6])
  })
  it('should be able to iterate over objects and return a new array', function() {
    assert.deepEqual(bruhdash.map({'a':1, 'b':2, 'c':3}, function(item) {
      return item * 2
    }), [2,4,6])
  })
})

describe("#filter", function() {
  it('should be able to filter arrays', function() {
    assert.deepEqual(bruhdash.filter([1,2,3,4], function(item) {
      return item % 2 === 0
    }), [2,4])
  })
  it('should be able to filter objects', function() {
    assert.deepEqual(bruhdash.filter({'a':1, 'b':2, 'c':3}, function(item) {
      return item % 2 === 0
    }), [2])
  })
})

describe("#reduce", function() {
  it('should be able to return accumulated value for an array', function() {
    assert.deepEqual(bruhdash.reduce([1,2,3], function(total, value){
      return total + value
    }), 6)
  })
  it('should be able to return accumulated value for an object', function() {
    assert.deepEqual(bruhdash.reduce({'a':1, 'b':2, 'c':3}, function(total, value) {
      return total + value
    }), 6)
  })
})
