/*
 * Chapter 5 Exercises
 */
function flatten(array)
{
  return array.reduce(function(a, elem) {
    return a.concat(elem);
  }, []);
}

//Mother-Child Age Difference
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var ancestry = JSON.parse(ANCESTRY_FILE);
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function averageAgeDiff() {
  var mothersAge = ancestry.map(function(child) {
    var mother = byName[child.mother];
    if (mother === undefined) return null;
    return child.born - mother.born;
  });
  var filterAges = mothersAge.filter(function(age) {
    return age !== null;
  });
  return Math.round(average(filterAges) * 10)/10;
}

//Historical Life Expectany
function averageAgePerCentry()
{
  var mapOfAgesInCentury = {};
  ancestry.forEach(function(person) {
    var age = person.died - person.born;
    var century = Math.ceil(person.died / 100);
    agesInCentury = mapOfAgesInCentury[century];
    if (agesInCentury === undefined) {
      agesInCentury = [age];
    }
    else {
      agesInCentury.push(age);
    }
    mapOfAgesInCentury[century] = agesInCentury;
  });
  var returnMap = {};
  Object.keys(mapOfAgesInCentury).forEach(function(century) {
    returnMap[century] = Math.round(average(mapOfAgesInCentury[century]) * 10) / 10;
  });
  return returnMap;
}

//Every and then some
function every(array, predicate) {
  for (var i=0; i<array.length; i++) {
    if (!predicate(array[i])) {
      return false;
    }
  }
  return true;
}

function some(array, predicate) {
  for (var i=0; i<array.length; i++) {
    if (predicate(array[i])) {
      return true;
    }
  }
  return false;
}
