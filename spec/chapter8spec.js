/*
 * Chapter 8 tests
 */
describe("promptDirection", function() {
  it("throws an Error if not left or right", function() {
    expect(promptDirection, "invalid").toThrow();
  });
  it("returns L for left", function() {
    expect(promptDirection("left")).toBe("L");
  });
  it("returns R for right", function() {
    expect(promptDirection("right")).toBe("R");
  });
});

describe("AssertionFailed", function() {
  it("has a message", function() {
    expect((new AssertionFailed("msg")).message).toBe("msg");
  });
});

describe("assert", function() {
  it("throws AssertionFailed if !test", function() {
      expect(function() { assert(false, "msg"); }).toThrow(new AssertionFailed("msg"), "msg");
  });
});

describe("lastElement", function() {
  it("throws AssertionFailed if emptyArray", function() {
      expect(function() { lastElement([]); }).toThrow(new AssertionFailed("empty array in lastElement"), "empty array in lastElement");
  });
});

describe("reliableMultiply", function() {
  it("multiplies two numbers", function() {
    expect(reliableMultiply(8,8)).toBe(64);
  });
});

describe("withBoxUnlocked", function() {
  it("unlocks the box, runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.", function() {
    expect (function() {
      withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
      });
    }).toThrow();
    expect(box.locked).toBe(true);
  });
});
