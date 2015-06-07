
var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function(){
  this.head = null;
  this.tail = null;
}
LinkedList.prototype.addToTail = function(node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
}
var findKthToLastElementOfLL = function(ll, k) {
  if (k <= 0) {
    return null;
  }
  var size = 0; 
  var current = ll.head;
  var result = [];
  while (current.next !== null) {
    size ++;

    if (size === k) {
      break;
    }
    current = current.next;  
  }
  while (current !== null) {
      result.push(current.value);
      current = current.next;
  }
  return result;
}

var ll = new LinkedList();
ll.addToTail(new Node(1));
ll.addToTail(new Node(2));
ll.addToTail(new Node(3));
ll.addToTail(new Node(4));
ll.addToTail(new Node(5));

var current = ll.head;
while (current.next !== null) {
  console.log(current.value);
  current = current.next;
}
console.log(current.value);
console.log(findKthToLastElementOfLL(ll, 3));
console.log(findKthToLastElementOfLL(ll, 1));
console.log(findKthToLastElementOfLL(ll, 5));