/*
 * Chapter 4 Exercises
 */

function range(start, end, step) {
  var range = [];

  if (step === 0) {
    return undefined;
  }

  if (arguments.length < 3) {
    step = 1;
  }

  if (start < end && step > 0) {
    for (var i = start; i <= end; i += step) {
      range.push(i);
    }
  }
  else if (start > end && step < 0){
    for (var j = start; j >= end; j += step) {
      range.push(j);
    }
  }

  return range;
}

function sum(range) {
  var value = 0;
  for (var i = 0; i < range.length; i++) {
    value += range[i];
  }
  return value;
}

function reverseArray(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  var len = array.length;
  for (var i=0; i<len/2; i++) {
    var temp = array[i];
    array[i] = array[len-1-i];
    array[len-1-i] = temp;
  }
  return array;
}

function arrayToList(array) {
  if (array === undefined) return null;
  var list = {
    value: array[0],
    next: array.length > 0 ? arrayToList(array.slice(1), 1) : null
  };
  return list;
}

function prepend(newValue, list) {
  var newList = {
    value: newValue,
    next: list
  };
  return newList;
}

function nth(list, position) {
  var value;
  if (position === 0) {
    value = list.value;
  }
  else if (list.next === null) {
    value = undefined;
  }
  else {
    value = nth(list.next, position-1);
  }
  return value;
}

function deepEqual(obj1, obj2) {
  if (obj1 == obj2) return true;

  if (obj1 === null || obj2 === null) return false;
  if (typeof obj1 != "object" || typeof obj2 != "object") return false;
  // if (obj1.length != obj2.length) return false;

  var returnVal = true;
  var obj1count = 0;
  for (var name in obj1)
  {
    obj1count++;
    returnVal = returnVal && deepEqual(obj1[name], obj2[name]);
  }

  var obj2count = 0;
  for (var name2 in obj2)
  {
    obj2count++;
  }

  if (obj1count != obj2count) return false;
  
  return returnVal;
}
