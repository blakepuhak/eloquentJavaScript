/*
 * Chapter 6 tests
 */
describe("Vector", function() {
  var vector;    // Note the scoping of this variable.
  beforeEach(function() {
    vector = new Vector(1,2);
  });
  it("has an x paramater", function() {
    expect(vector.x).toBe(1);
  });
  it("has a y paramater", function() {
    expect(vector.y).toBe(2);
  });
  it("can add another Vector", function() {
    var newValue = vector.plus(new Vector(2, 3));
    expect(newValue.x).toBe(3);
    expect(newValue.y).toBe(5);
  });
  it("can subtract another Vector", function() {
    var newValue = vector.minus(new Vector(2, 3));
    expect(newValue.x).toBe(-1);
    expect(newValue.y).toBe(-1);
  });
  it("can calculate the distance for the origin", function() {
    expect(new Vector(3, 4).length).toBe(5);
  });
});

describe("StretchCell", function() {
  var sc;
  beforeEach(function() {
    sc = new StretchCell(new TextCell("abc"), 1, 2);
  });
  it("conforms to Table Cell Interface", function() {
    expect(sc.minHeight).toBeDefined();
    expect(sc.minWidth).toBeDefined();
    expect(sc.draw).toBeDefined();
  });
  it("wraps another cell", function() {
    expect(typeof sc.inner).toBe("object");
  });
  it("ensures that the resulting cell has at least the given width, even if the inner cell would naturally be smaller.", function() {
    expect(sc.minWidth()).toBe(3);
  });
  it("ensures that the resulting cell has at least the given height, even if the inner cell would naturally be smaller.", function() {
    expect(sc.minHeight()).toBe(2);
  });
  it("draws the cell", function() {
    var drawn = sc.draw(3,2);
    expect(drawn.length).toBe(2);
    expect(drawn[0]).toBe("abc");
    expect(drawn[1]).toBe("   ");
  });
});

describe("Sequence", function() {
  it("allows iteration over the sequence", function() {
    var seq = new Sequence();
    expect(seq.hasNext).toBeDefined();
    expect(seq.next).toBeDefined();
  });
  it("can return the first 5 elements", function() {
    expect(logFive(new Sequence())).toBeDefined();
  });
});

describe("ArraySeq", function() {
  it("Iterates over the give array", function() {
    expect(logFive(new ArraySeq([1, 2])).length).toBe(2);
  });
});

describe("RangeSeq", function() {
  it("Iterates over the give range", function() {
    expect(logFive(new RangeSeq(100, 1000)).length).toBe(5);
  });
});
