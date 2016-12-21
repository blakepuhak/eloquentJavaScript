/*
 * Chapter 4 tests
 */

 describe("range", function() {
   it("has zero length if end < start and step value is > 0", function() {
     expect(range(10,1).length).toBe(0);
   });
   it("returns an array of length end-start+1", function() {
     expect(range(1,10).length).toBe(10);
   });
   it("last value is end", function() {
     var rangeVal = range(1,10);
     expect(rangeVal.pop()).toBe(10);
   });
   it("uses a step value to build the array", function() {
     expect(range(1,10,2).length).toBe(5);
   });
   it("handles negative step values", function() {
     expect(range(10,1,-2).length).toBe(5);
     expect(range(5,2,-1).length).toBe(4);
   });
   it("is undefined if step == 0", function() {
     expect(range(10,1,0)).toBe(undefined);
   });
 });

 describe("sum", function() {
   it("is 0 if range is empty", function() {
     expect(sum([])).toBe(0);
   });
   it("sums the values in the range", function() {
     expect(sum(range(1,2))).toBe(3);
     expect(sum(range(1,10))).toBe(55);
   });
 });

describe("reverseArray", function() {
  it("takes an array as argument and produces a new array", function() {
    var array = [1, 2, 3];
    expect(reverseArray(array) == array).toBe(false);
  });
  it ("has the same elements in the inverse order", function() {
    var array = [1, 2, 3];
    var expected = [3, 2, 1];
    var reversed = reverseArray(array);
    expect(expected.length == reversed.length && expected.every(function(v,i) { return v === reversed[i];})).toBe(true);
  });
});

describe("reverseArrayInPlace", function() {
  it("takes an array as argument and returns the same array", function() {
    var array = [1, 2, 3];
    expect(reverseArrayInPlace(array) == array).toBe(true);
  });
  it ("has the same elements in the inverse order", function() {
    var array = [1, 2, 3];
    var expected = [3, 2, 1];
    var reversed = reverseArrayInPlace(array);
    expect(expected.length == reversed.length && expected.every(function(v,i) { return v === reversed[i];})).toBe(true);
  });
});

describe("arrayToList", function() {
  it("returns null is no array is passed in", function() {
    expect(arrayToList()).toBe(null);
  });
  it("takes an array and returns a \'list\'", function() {
    expect(arrayToList([0,1,2]).value === undefined).toBe(false);
    expect(typeof arrayToList([0,1,2]).next).toBe("object");
  });
});

describe("prepend", function() {
  it("takes an element and a list and creates a new list", function() {
    var list = arrayToList([2,3,4]);
    expect(prepend(1, list) == list).toBe(false);
  });
  it("adds the element to the front of the input list", function() {
    var list = arrayToList([2,3,4]);
    expect(prepend(1, list).value).toBe(1);
  });
});

describe("nth", function() {
  it("takes a list and a number and returns the element at the given position in the list", function() {
    expect(nth(arrayToList([10,20,30]), 1)).toBe(20);
  });
  it("returns undefined when there is no such element", function() {
    expect(nth(arrayToList([10,20,30]), 5)).toBe(undefined);
  });
});

describe("deepEqual", function() {
  it("returns true if they are the same value", function() {
    var obj = {here: {is: "an"}, object: 2};
    expect(deepEqual(obj, obj)).toBe(true);
  });
  it("objects with the same properties whose values are also equal when compared with a recursive call to deepEqual", function() {
    var obj = {here: {is: "an"}, object: 2};
    expect(deepEqual(obj, {here: 1, object: 2})).toBe(false);
    expect(deepEqual(obj, {here: {is: "an"}, object: 2})).toBe(true);
  });
  it("objects with different properties are not equal", function() {
    var obj = {here: {is: "an"}, object: 2};
    var obj2 = {here: {is: "an"}, value: 2};
    expect(deepEqual(obj, obj2)).toBe(false);
    expect(deepEqual(obj2, obj)).toBe(false);
  });
});
