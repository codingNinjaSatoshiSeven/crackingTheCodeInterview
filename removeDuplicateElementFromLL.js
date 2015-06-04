/** Prompt:
* Write code to remove duplicates from an unsorted linked list. 
* follow up: how would you  solve this problem if a temporary buffer is not allowed?
*/

var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }

    if (list.tail) {
      list.tail.next = newTail;
    }

    list.tail = newTail;
  };

  list.removeHead = function(){
    if (list.head === null){
      return null;
    }

    var currentHead = list.head;
    list.head = list.head.next;

    return currentHead.value;
  };

  list.contains = function(target){
    var node = list.head;

    while (node) {
      if (node.value === target) {
        return true;
      }

      node = node.next;
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// helper function to remove current node from the ll
var removeCurrentNode(current, prev) {
  prev.next = current.next;
  current.next = null;
}

/** actual function that traverse the ll and remove all duplicates
*  Stored each node's conent in a map/hash
*  Traverse ll only once
*  So it's O(n) time complexity, and O(n) space complexity
*/
var removeDuplicateElementFromLL_1 = function(ll) {
  var mapDup = {};
  var head = ll.head;
  var current = head;
  var prev = head;
  while (current !== null) {
    if (mapDup[current.value] === undefined) {
      mapDup[current.value] = 1;
      prev = current; 
      current = current.next;
    } else {
      mapDup[current.value]++;
      // remove the current node
      removeCurrentNode(current, prev);
      current = prev; 
      current = current.next;
    }
  }
}

/* test code
*/
var ll = LinkedList();
ll.addToTail(3);
ll.addToTail(4);
ll.addToTail(5);
ll.addToTail(4);
ll.addToTail(5);

removeDuplicateElementFromLL_1(ll);