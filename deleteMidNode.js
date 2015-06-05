
var Node = function (value) {
  this.value = value;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;

};
LinkedList.prototype.addToTail = function(node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    var current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    this.tail = node;
  }
}

var deleteMidNode = function(midNode) {
  midNode.value = midNode.next.value;

}

var ll = new LinkedList();
ll.addToTail(new Node(2));
ll.addToTail(new Node(3));
console.log(ll.head.value, ll.tail.value);
