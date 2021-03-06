'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Binary Tree
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    preOrderHelper(root, results) {
      results.push(root.value);
  
      if (root.left !== null){
        this.preOrderHelper(root.left, results);
      }
      if (root.right !== null) {
        this.preOrderHelper(root.right, results);
      }
  
    }
  
    preOrder(root) {
      try {
        let results = [];
        this.preOrderHelper(root, results);
        return results;
      }
      catch(err){
        console.error('An error has occured: ' + err);
      }
    }
  
  
    inOrder(root) {
  
      if (root.left !== null) {
        this.inOrder(root.left);
      }
  
      console.log(root.value);
  
      if (root.right !== null) {
        this.inOrder(root.right);
      }
    }
  
    postOrder(root) {
  
      if (root.left !== null) {
        this.postOrder(root.left);
      }
  
      if (root.right !== null) {
        this.postOrder(root.right);
      }
  
      console.log(root.value);
    }
  
    countLeaves(root, count) {
  
      if (!root.left && !root.right) {
        console.log('add one');
        count += 1;
      }
  
      if (root.left) {
        count += this.countLeaves(root.left, 0);
      }
  
      if (root.right) {
        count += this.countLeaves(root.right, 0);
      }
      return count;
    }
  
    // finds the max value in the entire tree
    findMaxValue(root, max) {
      if (!root) {
        return 'this is not a tree';
      }
  
      if (root.value > max) {
        max = root.value;
      }
  
      if (root.left) {
        // we are looking for the max, so we need to say that max = the recursion.... can't just call the recursion and not assign it to max
        max = this.findMaxValue(root.left, max);
      }
  
      if (root.right) {
        max = this.findMaxValue(root.right, max);
      }
      return max;
    }
  
    bFT() {
      let currentRoot = this.root;
      let output = []; 
      let helperQ = [];
   
      helperQ.push(currentRoot);
  
      while (helperQ.length) {    
   
        currentRoot = helperQ.shift();
        output.push(currentRoot.value);
  
        if(currentRoot.left) {
          helperQ.push(currentRoot.left);
        } 
        if(currentRoot.right) {
          helperQ.push(currentRoot.right);
        }
      }
      return output;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    add(k) {
      // make a new node for adding later ...
      const newNode = new Node(k);
      // check if a root even exists
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      function recurse(currentNode) {
        if (newNode.value < currentNode.value && currentNode.left === null) {
          currentNode.left = newNode; // Adds the node!
        } else if (newNode.value < currentNode.value) {
          recurse(currentNode.left); // travel down the tree, go again, using this node as the sub root
        } else if (newNode.value > currentNode.value && currentNode.right === null) {
          currentNode.right = newNode; // Adds the node!
        } else if (newNode.value > currentNode.value) {
          recurse(currentNode.right); // travel down the tree, go again
        }
      }
      recurse(this.root); // call the recurse helper function to get it started
    }
  
    contains(k) {
      // if there's not even a root, the value is not here
      if (!this.root) {
        return false;
      }
  
      function recurse(currentNode) {
        if (!currentNode) {
          return false; // if you got to leaf, and it wasn't there, it's false. It wouldn't be anywhere else
        } else if (currentNode.value === k) {
          return true; // winner!
        } else if (k < currentNode.value) {
          return recurse(currentNode.left); // if it's less, go left
        } else {
          return recurse(currentNode.right); // wasn't left, other option is right
        }
      }
      return recurse(this.root);
    }
  
    preOrder(root) {
  
      console.log(root.value);
  
      if (root.left !== null) {
        this.preOrder(root.left)
      }
      if (root.right !== null) {
        this.preOrder(root.right);
      }
    }
    inOrder(root) {
  
      if (root.left !== null) {
        this.inOrder(root.left);
      }
  
      console.log(root.value);
  
      if (root.right !== null) {
        this.inOrder(root.right);
      }
    }
  
    postOrder(root) {
  
      if (root.left !== null) {
        this.postOrder(root.left)
      }
  
      if (root.right !== null) {
        this.postOrder(root.right);
      }
  
      console.log(root.value);
    }
  
    countLeaves(root, count) {
  
      if (!root.left && !root.right) {
        console.log('add one');
        count += 1;
      }
      // if there is a root.left
      // call function on root.left
      if (root.left) {
        count += this.countLeaves(root.left, 0); // += keeps it from getting reset to 0
      }
      // if there is a root.right
      // call function on root.right
      if (root.right) {
        count += this.countLeaves(root.right, 0);
      }
      return count;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(value) {
      const node = new Node(value);
      if (this.front === null) {
        this.front = node;
      } else {
        this.rear.next = node;
      }
      this.rear = node;
    }
    dequeue() {
      if(this.front) {
        const value = this.front.value;
        this.front = this.front.next;
        return value;
      } else {
        return 'no nodes to dequeue';
      }
    }
  
    peek() {
      if (this.front) {
        return this.front.value;
      } else {
        return 'queue is empty';
      }
    }
  
    isEmpty() {
      return (this.front === null);
    }
  
    toString() {
      let current = this.front;
      let string = 'front ->';
  
      while (current) {
        string += ` [${current.value}] `;
        current = current.next;
      }
      string += '<- rear'; 
      console.log(string)
      return string;
    }
  
    length() {
      let current = this.front;
      let counter = 0;
      while (current) {
        counter++;
        current = current.next;
      }
      return counter;
    }
  }
  
  module.exports = {
    Node: Node,
    bst: BinarySearchTree,
    bt: Tree
  }