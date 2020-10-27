'use strict';

const Queue = require('../queues.js');

describe('Testing my queues', () => {
  
  let queue;
  beforeEach( () => {
    return queue = new Queue();
  })
  
  it('Can create empty queue', () => {

    expect(queue.isEmpty()).toBe(true);
    expect(queue.front).toEqual(null);
    expect(queue.back).toEqual(null);

  });

  it('Can make a node travel to the front of a queue', () => {
    
    queue.enqueue(1);

    expect(queue.peek()).toEqual(1);
    expect(queue.front.data).toEqual(1);

  });

  it('Can successfuly add multiple nodes and point to back and front', () => {

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toEqual(1);
    expect(queue.front.data).toEqual(1);
    expect(queue.front.next.data).toEqual(2);
    expect(queue.back.data).toEqual(3);
    
  });

  it('Can can remove front node', () => {

    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    
    expect(queue.peek()).toEqual(2);

  });

  it('Can empty the queue', () => {

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBe(true);

  });

  it('Will be able to see if a queue is empty true / false', () => {

    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    
  });

});