/*
 * Chapter 6 Exercises
 */

//Vector
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(vector) {
  return new Vector(vector.x + this.x, vector.y + this.y);
};
Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
};
Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt(this.x*this.x + this.y*this.y); }
});

//Another Cell
function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

function StretchCell(inner, width, height)
{
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function() {
  return this.inner.minWidth() > this.width ? this.inner.minWidth() : this.width;
};
StretchCell.prototype.minHeight = function() {
  return this.inner.minHeight() > this.height ? this.inner.minHeight() : this.height;
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

//Sequence Interface
function Sequence()
{
}
Sequence.prototype.hasNext = function() {
};
Sequence.prototype.next = function() {
};

logFive = function(seq) {
  var arr = [];
  var i = 0;
  while (seq.hasNext() && i < 5)
  {
    arr[i] = seq.next();
    i++;
  }
  console.log(arr);
  return arr;
};

function ArraySeq(array) {
  Sequence.call(this);
  this.array = array;
  this.current = 0;
}
ArraySeq.prototype.hasNext = function() {
  return this.current < this.array.length;
};
ArraySeq.prototype.next = function() {
  this.current++;
  return this.array[this.current-1];
};

function RangeSeq(min, max) {
  Sequence.call(this);
  this.min = min;
  this.max = max;
  this.current = min;
}
RangeSeq.prototype.hasNext = function() {
  return this.current <= this.max;
};
RangeSeq.prototype.next = function() {
  this.current++;
  return this.current-1;
};
