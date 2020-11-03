'use strict';

//i need a nodes class, a tree, and the pre/post and order methods


// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = right;
      this.right = left;
    }
  }


//Create a BinaryTree class
class BinaryTree {
    constructor(root = null) {
    this.root = root === null ? null : new Node(root);
  }


  preOrder(){
    // pre order: root, left, right
    let results = [];
    let _walk = (node) => {
      results.push(node.value);
      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
  }
  
  inOrder(){
    // in order: left, root, right
    let results = [];
    let _walk = (node) => {
      if(node.left) {
        _walk(node.left);
      }
      results.push(node.value);
      if(node.right) {
        _walk(node.right);
      }
    };
    _walk(this.root);
    return results;
  }
  
  postOrder(){
    // post order: left, root, right
    let results = [];
    let _walk = (node) => {
      if(node.left) {
        _walk(node.left);
      }
      if(node.right) {
        _walk(node.right);
      }
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }
}

// Now the searh

class BinarySearchTree extends BinaryTree {

    //Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  add(value){
    if(this.root === null) {
      this.root = new Node(value);
      return;
    }
    this._addForNode(value, this.root);
  }


  _addForNode(value, parentNode) {
  
    if(value > parentNode.value){
      if(parentNode.right === null) {
        parentNode.right = new Node(value);
        return;
      } else {
        this._addForNode(value, parentNode.right);
        return;
      }
    }
    if(value <= parentNode.value){
      if(parentNode.left === null) {
        parentNode.left = new Node(value);
        return;
      } else {
        this._addForNode(value, parentNode.left);
      }
    }
  }
  
//Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

  contains(value){
    return this._containsForNode(value, this.root);  
  }

  _containsForNode(value, parentNode) {
    if (parentNode === null) {
      return false;
    }
    if (parentNode.value === value) {
      return true;
    } else if(parentNode.value < value) {
      return this._containsForNode(value, parentNode.right);
    } else if (parentNode.value >= value) {
      return this._containsForNode(value, parentNode.left);
    }
  }
}



// const root = new Node('+');
// root.left = new Node('*');
// root.left.left = new Node(3);
// root.left.right = new Node('/');
// root.left.right.right = new Node(4);
// root.left.right.left = new Node('+');
// root.left.right.left.left = new Node(7);
// root.left.right.left.right = new Node(1);
// root.right = new Node('-');
// root.right.left = new Node(17);
// root.right.right = new Node(5);

// const tree = new BinarySearchTree(null);
// tree.add(10);
// tree.add(5);
// tree.add(2);
// tree.add(7);
// tree.add(15);
// tree.add(12);


// console.log(tree.preOrder());
// console.log(tree.inOrder());
// console.log(tree.postOrder());

module.exports = {BinarySearchTree, BinaryTree, Node};