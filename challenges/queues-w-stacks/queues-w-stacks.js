'use strict';

class PsuedoQueue {
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }

// push and pop stacks to enqueue
  enqueue(element) {
    this.stackOne.push(element);
  }

  dequeue() {
    // if no elements lets not even
    if (this.stackOne.length === 0) {
      return 'The stack is empty';
    }

    while (this.stackOne.length > 0) {
      let popo = this.stackOne.pop();
      this.stackTwo.push(popo);
    }

    const result = this.stackTwo.pop();

    while (this.stackTwo.length > 0) {
      let popo = this.stackTwo.pop();
      this.stackOne.push(popo);
    }

    return result;
  }
}

module.exports = PsuedoQueue;

//pseudo q 

// https://stackoverflow.com/questions/69192/how-to-implement-a-queue-using-two-stacks#:~:text=Method%201%20(By%20making%20enQueue%20operation%20costly)&text=enQueue(q%2C%20x)%201,from%20stack1%20and%20return%20it.