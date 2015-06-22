/** Prompt: find whether a binary tree is balanced
* a binary tree is defined to be a tree such that the 
* heights of the two subtrees of any node never differ by more than one. 
*/

var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


Node.prototype.addLeftChild = function(value) {
  this.left = new Node(value);
};

Node.prototype.addRightChild = function(value) {
  this.right = new Node(value);
};

Node.prototype.getLeftChild = function(value) {
  return this.left;
};

Node.prototype.getRightChild = function(value) {
  return this.right;
}

var binaryTree = function(value) {
  this.root = new Node(value);
}



var getHeight = function(node) {
  if (node === null) {
    return 0;
  } else {
    return Math.max(getHeight(node.getLeftChild()), getHeight(node.getRightChild())) +1 ;
  }
}

var isBinaryTreeBalanced = function(root) {
  if (root === null) {
    return true;
  }
  var heightDiff = getHeight(root.getLeftChild()) - getHeight(root.getRightChild());
  if (Math.abs(heightDiff) > 1) {
    return false;
  } else {
    return isBinaryTreeBalanced(root.getLeftChild()) && isBinaryTreeBalanced(root.getRightChild());
  }
}

var myBTree = new binaryTree(0);
myBTree.root.addLeftChild(1);
myBTree.root.addRightChild(2);
myBTree.root.getLeftChild().addLeftChild(3);
myBTree.root.getLeftChild().getLeftChild().addLeftChild(5);
console.log(isBinaryTreeBalanced(myBTree.root)); // false;

var myBTree2 = new binaryTree(0);
myBTree2.root.addLeftChild(1);
myBTree2.root.addRightChild(2);
console.log(isBinaryTreeBalanced(myBTree2.root)); // true

