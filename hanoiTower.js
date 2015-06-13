/** Prompt: Move a hanoi tower from origin chisel to destination chisel
*/
var Stack = function() { 
  this._stack = {};
  this.top = -1;
  this.n = 0;
};


Stack.prototype.push = function(value) {
  this._stack[++this.top] = value;
};

Stack.prototype.pop = function() {
  if (this.top === -1) { // nothing in the stack
    return null; 
  } else {
    var value = this._stack[this.top];
    delete this._stack[this.top];
    this.top--;
    return value;
  }
};


var HanoiTower = function(n) {
  this.start = new Stack();
  this.buffer = new Stack();
  this.finish = new Stack();
  this.init(n);
};

HanoiTower.prototype.init = function(n) {
  if (n <= 0) {
    return;
  } else {
    this.start.n = n;
    var current = n; 
    while (current > 0) {
      this.start.push(current);
      current--;
    }
  }
};

// this will be o(k^n) time complexity 
/**
* The Tower of Hanoi problem with 3 pegs and n disks takes 2**n - 1 moves to solve
*/
HanoiTower.prototype.move = function () {
  // base case 
  var moveTop = function(origin, destination) {
    destination.push(origin.pop());
  };
  var recurseHanoiTower = function(n, origin, destination, buffer) {
    // base case
    if (n === 0) {
      return;
    } else {
      recurseHanoiTower(n-1, origin, buffer, destination);
      moveTop(origin, destination);
      recurseHanoiTower(n-1, buffer, destination, origin);
    }
  };
  recurseHanoiTower(this.start.n, this.start, this.finish, this.buffer);
};

var myTower = new HanoiTower(3);
myTower.move();

console.log(myTower.start._stack);
console.log(myTower.buffer._stack);
console.log(myTower.finish._stack);

myTower = new HanoiTower(5);
myTower.move();
console.log(myTower.finish._stack);
myTower = new HanoiTower(1);
myTower.move();
console.log(myTower.finish._stack);
myTower = new HanoiTower(0);
myTower.move();
console.log(myTower.finish._stack);







