/** Prompt: Write code to partition a linkedlist around a value x, such that all nodes less 
* than x come before all nodes greater or equal to x.
*/
var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  if (this.head === null) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }
}
var partitionLL = function (ll, x) {
  var leftll = new LinkedList();
  var rightll = new LinkedList();
  var current = ll.head; 
  while (current !== null) {
    if (current.value > x) {
      rightll.addToTail(current.value);
    } else if (current.value < x){
      leftll.addToTail(current.value);
    } 
    current = current.next;
  }
  console.log('leftll', leftll);
  leftll.addToTail(x);
  current = rightll.head;
  while (current !== null) {
    leftll.addToTail(current.value);
    current = current.next;
  }
  return leftll;
}

var ll = new LinkedList();
ll.addToTail(1);
ll.addToTail(5);
ll.addToTail(2);
ll.addToTail(6);
ll.addToTail(3);
ll.addToTail(9);
var partitionedLL = partitionLL(ll,2);
console.log(partitionedLL);
var current = partitionedLL.head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}