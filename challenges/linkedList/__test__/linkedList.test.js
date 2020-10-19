'use strict';

let linkedList = require('../linkedList.js');

describe('Testing my linked list and node class', () => {
  it('should create a node and add it to a linked list', () => {
    // create our test structure linked list
    let l = new LinkedList;

    //lets add a node
    l.insert(200);
    // comparing result to expected test result
    expect(l).toEqual(1);
});

});


