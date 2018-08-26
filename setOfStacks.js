/** PROMPT: create a set of stacks that will automatically create new stack
* if the element is over the limit of current stack
*/
var Stack = function () {
  this._capacity = 3;
  this.noOfStacks = 1;
  this._stack = {};
  this._stack[this.noOfStacks] = [];
  this.size = 0;
  this.top = -1;
  
}

Stack.prototype.push = function (value) {
  if (this.size === 0) {
    this._stack[this.noOfStacks][0] = value;
    this.top = 0;
    this.size = 1;
  } else if (this.size / this._capacity < this.noOfStacks){
    this._stack[this.noOfStacks][((this.top + 1) % this._capacity)] = value;
    this.top++;
    this.size++;
  } else {
    this.noOfStacks++;
    this._stack[this.noOfStacks] = [];
    this._stack[this.noOfStacks][0] = value;
    this.size++;
    this.top++;
  }
}

Stack.prototype.pop = function () {
  if (this.size > 0) {
    var index = this.top % this._capacity;
    console.log(index);
    console.log('#ofstacks',this.noOfStacks);

    var result = this._stack[this.noOfStacks][index];
    console.log('result',result);
    this._stack[this.noOfStacks].pop();
    console.log('#ofstacks',this.noOfStacks,'length',this._stack[this.noOfStacks].length);
    console.log(this._stack[this.noOfStacks])
    console.log(this._stack);
    if (this._stack[this.noOfStacks].length === 0) {
      delete this._stack[this.noOfStacks];
      this.noOfStacks--;
      console.log('here',this.noOfStacks)
    }
    this.top--;
    this.size--;
    return result;
  }
}


var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.push(7);

console.log('size',myStack.size);
console.log('top', myStack.top);
console.log('popping',myStack.pop());
console.log('popping',myStack.pop());
console.log(myStack.noOfStacks);
