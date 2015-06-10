/** Prompt: Implement a function to check if a linkedlist is palindrome
*
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

// time complexity O(n), space complexity O(n)
var isLLAPalindrome = function(ll) {
  var arr = [];
  var current = ll.head; 
  while (current !== null) {
    arr.push(current.value);
    current = current.next;
  }
  for (var i = 0 ; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length -1 -i]) {
      return false;
    }
  }
  return true;
}

var ll1 = new LinkedList();
ll1.addToTail('a');
ll1.addToTail('d');
ll1.addToTail('a');
console.log(isLLAPalindrome(ll1));

var ll2 = new LinkedList();
ll2.addToTail('a');
ll2.addToTail('b');
ll2.addToTail('c');
console.log(isLLAPalindrome(ll2));
