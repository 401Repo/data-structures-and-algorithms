'use strict';

const Node = require('./node.js');

class Stack {

  constructor(){
    this.top = null;
    //because we have to remove the top to get to the node beneath
};

  // a new node to the top
  push(data) {

    let node = new Node(data);
    node.next = this.top;
    this.top = node
    return this.top;

  };

  // to pop off the top node and reveal the next
  pop() {

    if(!this.top){
      return this.top;
    }
    else {

      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.data;

    };

  };

  // reveals the data of the top of the stack
  peek() {

    if(!this.top){
      return this.top;
    } 
    else if(this.top.data){
      return this.top.data;
    }

  };

  // looks for a stack and if no nodes are there returns falsie
  isEmpty() {

    if (this.top) {
      return false;
    } 
    else {
      return true;
    } 

  };

};

module.exports = Stack;