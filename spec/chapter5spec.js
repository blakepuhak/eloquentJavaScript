/*
 * Chapter 5 tests
 */
describe("flatten", function() {
  it("combines arrays using reduce & concat", function() {
    var arrays = [[1, 2, 3], [4, 5], [6]];
    var expected = [1, 2, 3, 4, 5, 6];
    expect(flatten(arrays)).toEqual(expected);
  });
});

describe("ageDiff", function() {
  it("compute the average age difference between mothers and children", function() {
    expect(averageAgeDiff()).toBe(31.2);
  });
});

describe("averageAgePerCentry", function() {
  it("returns a map of average ages per century", function() {
    var ages = averageAgePerCentry();
    expect(ages[16]).toBe(43.5);
    expect(ages[17]).toBe(51.2);
    expect(ages[18]).toBe(52.8);
    expect(ages[19]).toBe(54.8);
    expect(ages[20]).toBe(84.7);
    expect(ages[21]).toBe(94);
  });
});

describe("every", function() {
  it("returns true only when the predicate returns true for all elements of the array", function() {
    expect(every([NaN, NaN, NaN], isNaN)).toBe(true);
    expect(every([NaN, NaN, 4], isNaN)).toBe(false);
  });
});

describe("some", function() {
  it("returns true as soon as the predicate returns true for any of the elements", function() {
    expect(some([NaN, 3, 4], isNaN)).toBe(true);
    expect(some([2, 3, 4], isNaN)).toBe(false);
  });
});
