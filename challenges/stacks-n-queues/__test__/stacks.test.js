'use strict';

const Stack = require('../stacks.js');

describe('Testing my stacks', () => {

  let stack;
  beforeEach( () => {
    return stack = new Stack();
  });

  it('I can create and test an empty stack', () => {

    expect(stack.top).toEqual(null);
    expect(stack.peek()).toEqual(null);
    expect(stack.isEmpty()).toBe(true);
    
  });

  it('Can push data in to a stack, and check top node', () => {

    stack.push(1985);
    expect(stack.top.data).toEqual(1985);
    expect(stack.peek()).toEqual(1985);
    
  });

  it('Can successfully push many in to stack', () => {
    
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.peek()).toEqual(5);
    expect(stack.top.data).toEqual(5);

  });

  it('Can successfully pop from stack', () => {

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    let boom = stack.pop();

    expect(boom).toEqual(5);
    expect(stack.top.data).toEqual(4);
    
  });

  it('Can successfully empty the stack', () => {
    
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toEqual(null);

  });

  it('Can reveal next value in stack', () => {
    
    stack.push(3);

    expect(stack.peek()).toEqual(3);

  });
  
});