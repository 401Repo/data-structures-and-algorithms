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

  getMaxVal() {
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
    let temp = 0;
    for(let y = 0; y<results.length; y++){
      if(results[y] > temp){
        temp = results[y];
      } 
    }

    return temp;

  }

  fizzBuzzTree() {

      // lets add the result in pre order: root, left, right
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




      // return results; NOT SO FAST!!!!!!!
      const fizzBuzzedTree = new BinarySearchTree(null);


      for(let x = 0; x < results.length; x++){

        if (results[x] % 15 == 0){
          fizzBuzzedTree.add("FizzBuzz"); 
      }
        else if (results[x] % 3 == 0){
          fizzBuzzedTree.add("Fizz");
        } 
        else if (results[x] % 5 == 0){
  
          fizzBuzzedTree.add("Buzz");
        }
         else{
          fizzBuzzedTree.add(results[x].toString());
         }

      }

      return fizzBuzzedTree;
    }



}





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


module.exports = {BinarySearchTree, BinaryTree, Node};


// let tree = new BinarySearchTree(null);
//     tree.add(15);
//     tree.add(2);
//     tree.add(3);
//     tree.add(4);
//     tree.add(5);
//     tree.add(6);
//     tree.add(7);
//     tree.add(8);

//    console.log( tree.fizzBuzzTree());