'use strict';

const PseudoQueue = require('../queues-w-stacks.js');
let pseudoQueue = new PseudoQueue();

describe('Testing the queues w stacks class', () => {

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  it('It can enqueue items', () => {
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.stackOne).toEqual([1,2,3]);    
  });

  it('It can  dequeue items', () => {
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    pseudoQueue.enqueue(4);
    pseudoQueue.dequeue();
    expect(pseudoQueue.stackOne).toEqual([3,4]);    
  });

  it('It can dequeue all', () => {
    pseudoQueue.enqueue(3);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(1);
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    expect(pseudoQueue.stackOne).toEqual([]);    
  });

});