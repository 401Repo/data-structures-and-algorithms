'use strict';

const Node = require('./node.js');


class Queue {

  constructor() {

    this.front = null;
    this.back = null;

  };

  // i need a node to the back
  
  enqueue(data) {

    let node = new Node(data);

    if (this.isEmpty()){

      this.front = node;
      this.back = node;
      
    } 
    else {

      this.back.next = node;
      this.back = this.back.next
      
    };

  };

  // removes node in the front of the row
  dequeue() {

    if (!this.isEmpty()){

      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.data;

    } else {
      return 'no nodes';
    };

  };

  // look at the value of the front node
  peek() {

    if (!this.front){
      return 'no nodes';
    } else if (this.front){
      return this.front.data;
    };
    
  };

  // just checks if there are any nodes or gives falsie back.
  isEmpty() {

    if (this.front){
      return false;
    } else if (!this.front){
      return true;
    } else {
      throw new Error('Something went wrong');
    };
    
  };

};

module.exports = Queue;