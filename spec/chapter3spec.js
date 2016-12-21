/*
 * Chapter 3 tests
 */

describe("sample", function() {
  it("returns value", function() {
    var value = sample("val");
    expect(value).toBe("val");
  });
});

describe("power", function () {
  it("raises base to power", function() {
    expect(power(2,2)).toBe(4);
  });
  it("assumes undefined power to be 1", function() {
    expect(power(2)).toBe(2);
  });
  it("does not handle undefined base", function() {
    expect(power()).toBe(undefined);
  });
  it("handles powers of 0", function() {
    expect(power(2,0)).toBe(1);
  });
});

describe("wrapValue", function() {
  it("wraps a local variable", function() {
    var value2 = wrapValue(2);
    var value1 = wrapValue(1);
    expect(value2()).toBe(2);
    expect(value1()).toBe(1);
  });
});

describe("multiplier", function() {
  it("returns a function", function() {
    expect(typeof multiplier()).toBe("function");
  });
  it("multiples the function value by multiplier value", function() {
    var twice = multiplier(2);
    expect(twice(5)).toBe(10);
  });
});

describe("recursivePower", function() {
  it("raises base to power", function() {
    expect(recursivePower(2,3)).toBe(8);
  });
  it("assumes undefined power to be 1", function() {
    expect(recursivePower(2)).toBe(2);
  });
  it("does not handle undefined base", function() {
    expect(recursivePower()).toBe(undefined);
  });
  it("handles powers of 0", function() {
    expect(recursivePower(2,0)).toBe(1);
  });
});

describe("zeroPad", function() {
  it("is always a fixed length", function() {
    expect(zeroPad(2, 5).length).toBe(5);
    expect(zeroPad(10, 5).length).toBe(5);
  });
  it("starts with a 0", function() {
    expect(zeroPad(2, 5)[0]).toBe("0");
  });
});

describe("min", function() {
  it("returns min value", function() {
    expect(min(1,0)).toBe(0);
    expect(min(0,1)).toBe(0);
  });
  it("handles undefined", function() {
    expect(min(1)).toBe(1);
  });
});

describe("isEven", function() {
  it("return true for 0", function() {
    expect(isEven(0)).toBe(true);
  });
  it("return true if number is even", function() {
    expect(isEven(2)).toBe(true);
  });
  it("return false if number is odd", function() {
    expect(isEven(3)).toBe(false);
  });
});

describe("countBs", function() {
  it("returns number of Bs in a word", function() {
    expect(countBs("")).toBe(0);
    expect(countBs("CCC")).toBe(0);
    expect(countBs("BBC")).toBe(2);
  });
});

describe("countChar", function() {
  it("returns 0 for undefined character", function() {
    expect(countChar("kakkerlak")).toBe(0);
  });
  it("counts instances of character", function() {
    expect(countChar("kakkerlak", "k")).toBe(4);
  });
});
