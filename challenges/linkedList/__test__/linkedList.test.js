'use strict';

let LinkedList = require('../linkedList.js');

describe('Testing my linked list and node class', () => {
  it( 'It should test an emty linked list was created',() => {

    //create a linked list
    let l = new LinkedList();

    expect(l.head).toEqual(null);
  })

  it('should create a node and add it to a linked list', () => {
    // create our test structure linked list
    let l = new LinkedList();

    //lets add a node
    l.insert(200);

    // comparing result to expected test result
    expect(l.head.data).toEqual(200);

    // ti chain them i use the keaywork "next"
});
  it('Head Should point to next node', () => {
  // create our test structure linked list
  let l = new LinkedList();

  //lets add a node
  l.insert(200);
  l.insert(300);

  // comparing result to expected test result
  expect(l.head.next.data).toEqual(300);

  // ti chain them i use the keaywork "next"
});
it('Multiple nodes are in the linked list', () => {
// create our test structure linked list
let l = new LinkedList();

//lets add a node
l.insert(200);
l.insert(300);
l.insert(900);


// comparing result to expected test result
expect(l.head.next.next.data).toEqual(900);

// ti chain them i use the keaywork "next"
});
it('Returns true is value exist', () => {
// create our test structure linked list
let l = new LinkedList();

//lets add a node
l.insert(200);
l.insert(300);
l.insert(900);


// comparing result to expected test result
expect(l.includes(900)).toEqual(true);

// ti chain them i use the keaywork "next"
});
it('Returns false is value exist doest', () => {
  // create our test structure linked list
  let l = new LinkedList();
  
  //lets add a node
  l.insert(200);
  l.insert(300);
  l.insert(900);
  
  
  // comparing result to expected test result
  expect(l.includes(1900)).toEqual(false);
  
  // ti chain them i use the keaywork "next"
  });

  it('Returns a cute String', () => {
    // create our test structure linked list
    let l = new LinkedList();
    
    //lets add a node
    l.insert(200);
    l.insert(300);
    l.insert(900);
    
    
    // comparing result to expected test result
    expect(l.toString()).toEqual('{ 200 } -> { 300 } -> { 900 } ->  NULL');
    
    // ti chain them i use the keaywork "next"
    });

    //Art by Hayley Jane Wakenshaw: lab 6 functions tested bellow *QUACK*
  //_      _      _
  //>(.)__ <(.)__ =(.)__
  //(___/  (___/  (___/  hjw
  
  it('Adds node to end of Arrray list', () => {
    // create our test structure linked list
    let l = new LinkedList();
    
    //lets add a node
    l.insert(200);
    l.insert(900);
    l.append(3);
    
    
    // comparing result to expected test result
    expect(l.toString()).toEqual('{ 200 } -> { 900 } -> { 3 } ->  NULL');
    
    // ti chain them i use the keaywork "next"
    });

    it('Adds node to end of Arrray list only using append', () => {
      // create our test structure linked list
      let l = new LinkedList();
      
      //lets add a node
      l.append(200);
      l.append(900);
      l.append(3);
      
      
      // comparing result to expected test result
      expect(l.toString()).toEqual('{ 200 } -> { 900 } -> { 3 } ->  NULL');
      
      // ti chain them i use the keaywork "next"
      });

      it('Adds node to between 900 and 3', () => {
        // create our test structure linked list
        let l = new LinkedList();
        
        //lets add a node
        l.append(200);
        l.append(900);
        l.append(3);
        l.insertBefore(3, 200);
        
        
        // comparing result to expected test result
        expect(l.toString()).toEqual('{ 200 } -> { 900 } -> { 200 } -> { 3 } ->  NULL');
        
        // ti chain them i use the keaywork "next"
        });

        it('Adds node after 3', () => {
          // create our test structure linked list
          let l = new LinkedList();
          
          //lets add a node
          l.append(200);
          l.append(900);
          l.append(3);
          l.insertAfter(3, 200);
          
          
          // comparing result to expected test result
          expect(l.toString()).toEqual('{ 200 } -> { 900 } -> { 3 } -> { 200 } ->  NULL');
          
          // ti chain them i use the keaywork "next"
          });


});


