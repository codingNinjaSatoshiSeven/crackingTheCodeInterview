
var Stack = function () {
  this._capacity = 5;
  this._stack = [];
  this.size = 0;
  this.top = -1;
}

Stack.prototype.push = function (value) {
  if (this.size === 0) {
    this._stack[0] = value;
    this.top = 0;
    this.size = 1;
  } else {
    this._stack[++this.top] = value;
    this.size++;
  }
}

Stack.prototype.pop = function () {
  if (this.size > 0) {
    var result = this._stack[this.top];
    delete this._stack[this.top];
    this.top--;
    this.size--;
    return result;
  }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.size);
console.log(myStack.top);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.size);
console.log(myStack.top);