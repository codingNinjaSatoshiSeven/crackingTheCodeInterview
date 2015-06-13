/** Prompt: An animal shelters have dogs and cats. People can choose to adopt the 
* oldest animals, (regardless if it's a dog or a cat), or they can choose to adopt
* certain species, (this will give them the earliest sheltered animals of their choice)
*/ 

var Node = function(value) {
  this.value = value;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  if (this.head === null) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head === null) {
    this.tail = null;
    return null;
  } else if (this.head !== null && this.head === this.tail) {
    var value = this.head.value;
    this.head = null;
    this.tail = null;
    return value;
  } else {
    var value = this.head.value;
    this.head = this.head.next;
    return value;
  }
};

var AnimalShelter = function() {
  this.animalList = new LinkedList();
};

AnimalShelter.prototype.enqueue = function(value, type) {
  if (type !== 'cat' && type !== 'dog') {
    return;
  }
  this.animalList.addToTail({'type': type,  'info': value});
};

// O(1) time complexity operation
AnimalShelter.prototype.dequeueAny = function() {
  return this.animalList.removeHead();
}

//O(n) time complexity worst case operation
AnimalShelter.prototype.dequeueSpecies = function(type) {
  if (type !== 'cat' && type !== 'dog') {
    return null;
  }
  var current = this.animalList.head;
  var prev = current; 
  while (current.value['type'] !== type) {
    prev = current;
    current = current.next;
  }
  if (current === null) { // didn't found any of such species
    return null;
  } else {
    var value = current.value;
    prev.next = current.next; // remove the current entry from LinkedList
    return value;
  }
};


var myShelter = new AnimalShelter();
myShelter.enqueue('Bobby the Beagle', 'dog');
myShelter.enqueue('Alice the Snow', 'cat');
myShelter.enqueue('Garfiled the fat cat', 'cat');
myShelter.enqueue('Scoopy doo the scoop dog', 'dog');
myShelter.enqueue('Tom the dum cat', 'cat');

console.log(myShelter.dequeueAny()); // 'Bobby the Beagle'
console.log(myShelter.dequeueSpecies('dog')); // 'Scoopy doo the scoop dog'
console.log(myShelter.dequeueSpecies('cat')); // 'Alice the Snow'
