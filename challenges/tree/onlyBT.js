'use strict';

/*

Following tutorial for this from:
https://medium.com/swlh/traversing-trees-breadth-first-and-depth-first-searches-with-javascript-316f23c9fe8f

*/

class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    traverseBFS() {
      //if there is no root, return false
      if (!this.root) {
        return false;
      }
      //start a new Queue
      const queue = new Queue();
      //keep a tally of all values in the tree
      const treeValues = [];
      //add root to queue
      queue.enqueue(this.root);
      //while queue is not empty
      while (queue.size !== 0) {
        //get TreeNode Children
        const nodeChildren = queue.first.value.children;
        //if node has children, loop and add each to queue
        if (nodeChildren.length !== 0) {
          nodeChildren.forEach(child => queue.enqueue(child));
        }
        //push the first item in the queue to the tree values
        treeValues.push(queue.first.value);
        //remove first node from queue
        queue.dequeue();
      }
      //return values, should be all TreeNodes
      return treeValues;
    }
  
    traverseDFS(type) {
      //if there is no root, return false
      if (!this.root) {
        return false;
      }
      //make a variable for tree values
      const treeValues = [];
      //current values always starts at root
      let current = this.root;
  
      //helper methods for order choice
      const preOrderHelper = node => {
        //push value onto array FIRST
        treeValues.push(node.value);
        //recursively call function on all node children
        if (node.children.length !== 0) {
          node.children.forEach(child => {
            preOrderHelper(child);
          });
        }
        return true;
      };
  
      const postOrderHelper = node => {
        //recursively call function on all node children FIRST
        if (node.children.length !== 0) {
          node.children.forEach(child => {
            postOrderHelper(child);
          });
        }
        //push value onto array
        treeValues.push(node.value);
        return true;
      };
  
      const inOrderHelper = node => {
        //if node had children, split nodes into left and right halves in case tree is not binary FIRST
        if (node.children.length !== 0) {
          //get halfway point
          const halfway = Math.floor(node.children.length / 2);
          //recursively call function on all node children left of halfway point
          for (let i = 0; i < halfway; i++) {
            inOrderHelper(node.children[i]);
          }
          // push parent node value to array
          treeValues.push(node.value);
          //recursively call function on all node children right of halfway point
          for (let i = halfway; i < node.children.length; i++) {
            inOrderHelper(node.children[i]);
          }
          // else push value into array
        } else {
          treeValues.push(node.value);
        }
        return true;
      };
      //switch statment to select proper order and start recursive function calls
      switch (type) {
        case "pre":
          preOrderHelper(current);
          break;
        case "post":
          postOrderHelper(current);
          break;
        case "in":
          inOrderHelper(current);
          break;
      }
      //return array
      return treeValues;
    }
  }
  
  class QueueNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    //newnode goes to back of the line/end of the queue
    enqueue(value) {
      const newNode = new QueueNode(value);
      //if queue is empty
      if (this.size === 0) {
        this.first = newNode;
        this.last = newNode;
        // add current first pointer to new first(new node), and make new node new first
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      //add 1 to size
      this.size++;
  
      return this;
    }
    // dequeue nodes off the front of the line
    dequeue() {
      //if queue is empty return false
      if (this.size === 0) return false;
      //get dequeuedNode
      const dequeuedNode = this.first;
      //get new first (could be NULL if stack is length 1)
      const newFirst = this.first.next;
      //if newFirst is null, reassign last to newFirst(null)
      if (!newFirst) {
        this.last = newFirst;
      }
      //assign new first
      this.first = newFirst;
      //remove refernce to list
      dequeuedNode.next = null;
      //remove 1 from size
      this.size--;
      //return dequeuednode
      return dequeuedNode;
    }
  
    log() {
      let currentNode = this.first;
      let i = 0;
      while (currentNode) {
        console.log(i, currentNode.value);
        i++;
        currentNode = currentNode.next;
      }
    }
  }
  

/*

What did i learn form this tutorial? I had no idea you can actually use a switch stement in a function. Pretty cool.

*/

  module.exports = {TreeNode, Tree, QueueNode, Queue};