/** Prompt:
* Given only the access to the mid node of an linked list, without access to other node
* remove the mid node from linked list
*/
var Node = function (value) {
  this.value = value;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.mid = null;
  var size = 0;

};
LinkedList.prototype.addToTail = function(node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
    this.mid = node;
    size = 1; 
  } else {
    var current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    this.tail = node;
    size++;
  }
   var mid = Math.round(size/2);
   var counter = 1;
   var current = this.head;
   while (counter < mid) {
    current = current.next;
    counter ++;
   }
   this.mid = current;
}

var deleteMidNode = function(midNode) {
  midNode.value = midNode.next.value;
  midNode.next = midNode.next.next;

}

var ll = new LinkedList();
ll.addToTail(new Node(2));
ll.addToTail(new Node(3));
ll.addToTail(new Node(4));
ll.addToTail(new Node(5));
ll.addToTail(new Node(6));
console.log(ll.head.value, ll.tail.value);
deleteMidNode(ll.mid);
var current = ll.head;
while (current.next !== null){
  console.log(current.value);
  current = current.next;
}
console.log(current.value);