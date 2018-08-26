/** Prompt: Write a sorted stack in ascending order (with biggest items on top)
* Can use one additional stack to hold items, but cannot use any other data structures.
*/

var Stack = function() {
  this.top = -1; 
  this._stack = {};
};

Stack.prototype.push = function(value) {
  this._stack[++this.top] = value;
};

Stack.prototype.pop = function() {
  if (this.isEmpty()) { // empty stack
    return null;
  } else {
    var value = this._stack[this.top];
    delete this._stack[this.top];
    this.top--;
    return value;
  }
};

Stack.prototype.peek = function() {
  if (this.top === -1) { // empty stack
    return null;
  } else {
    return this._stack[this.top];
  }
};

Stack.prototype.isEmpty = function() {
  return (this.top === -1) ? true : false; 
};

var SortedStack = function() {
  this.MainStack = new Stack();
  this.AuxStack = new Stack();
};
// method 1, O(n) time complexity for push() worst case. 
SortedStack.prototype.push = function(value) {
  if (this.MainStack.isEmpty()) { // if main stack is empty
    this.MainStack.push(value);
  } else {
    while (!this.MainStack.isEmpty() && this.MainStack.peek() > value) {
      this.AuxStack.push(this.MainStack.pop());
    }
    this.MainStack.push(value);
    while (!this.AuxStack.isEmpty()) {
      this.MainStack.push(this.AuxStack.pop());
    }
  }
};


SortedStack.prototype.pop = function() {
  return this.MainStack.pop();
};

SortedStack.prototype.peek = function() {
  return this.MainStack.peek();
};

SortedStack.prototype.isEmpty = function() {
  return this.MainStack.isEmpty();
};

var mySortedStack = new SortedStack();
mySortedStack.push(2); // [2]
mySortedStack.push(1); // [1,2]
console.log(mySortedStack.peek()); // 2;
mySortedStack.push(5); // [1,2,5]
mySortedStack.push(4); // [1,2,4,5]
console.log(mySortedStack.peek()); // 5
console.log(mySortedStack.pop()); // 5
console.log(mySortedStack.peek()); //4



