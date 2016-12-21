/*
 * Chapter 3 examples
 */

 function sample(val) {
  return val;
}

function power(base, exponent)
{
  if (exponent === undefined)
    return base;
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function wrapValue(value) {
  var localVariable = value;
  return function() {
    return localVariable;
  };
}

function multiplier(value) {
  return function(number) {
    return value * number;
  };
}

function recursivePower(base, exponent) {
  if (exponent === undefined) {
    return base;
  }
  else if (exponent === 0) {
    return 1;
  }
  else {
    return base * recursivePower(base, exponent - 1);
  }

}

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function min(a, b) {
  if (b === undefined) {
    return a;
  }
  if (a < b) {
    return a;
  }
  else {
    return b;
  }
}

function isEven(number) {
  if (number === 0)
    return true;
  if (number == 1)
    return false;
  return isEven(number - 2);
}

function countBs(word) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) == "B") {
      count++;
    }
  }
  return count;
}

function countChar(word, character) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) == character) {
      count++;
    }
  }
  return count;
}
