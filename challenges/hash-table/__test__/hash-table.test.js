'use strict';

let HashTable = require('../hash-table');


// //contains
// console.log(ht.contains("US"));

// console.log(ht);

// console.log(ht.hash("Italy"));
// console.log(ht.hash("Canada"));
// console.log(ht.hash("Germany"));
// console.log(ht.hash("US"));

describe('Testing Hash table', () => {
  it( 'It should create a hash table with length 1 and Value of "300" for key "Canada"',() => {

    //create a ht
    let ht = new HashTable();

    ht.add("Canada", "300");
    expect(ht.size).toEqual(1);
    expect(ht.length).toEqual(1);
    expect(ht.get("Canada")).toEqual("300");
  });

  it( 'We can use "contains" and return a boolean depending if its in the HT',() => {
  
    //create a ht
    let ht = new HashTable();

    ht.add("Canada", "300");

    ht.add("Mexico", "900");

    expect(ht.size).toEqual(2);
    expect(ht.length).toEqual(2);
    expect(ht.contains("Canada")).toEqual(true);
  });

  it( 'We can use "contains" and return false if it not in the HT',() => {
  
    //create a ht
    let ht = new HashTable();

    ht.add("Canada", "300");

    ht.add("Mexico", "900");

    expect(ht.size).toEqual(2);
    expect(ht.length).toEqual(2);
    expect(ht.contains("Water-mala")).toEqual(false);
  });

  it( 'Use out has helped method to see the index of an arbitrary key of our ht',() => {
  
    //create a ht
    let ht = new HashTable();

    ht.add("Canada", "300");

    ht.add("Mexico", "900");

    expect(ht.size).toEqual(2);
    expect(ht.length).toEqual(2);
    expect(ht.hash("Canada")).toEqual(0);
  });


    it( 'We can "get" values back by entering a key',() => {
  
      //create a ht
      let ht = new HashTable();
  
      ht.add("Canada", "300");

      ht.add("Mexico", "900");

      expect(ht.size).toEqual(2);
      expect(ht.length).toEqual(2);
      expect(ht.get("Canada")).toEqual("300");
      expect(ht.get("Mexico")).toEqual("900");
    });

  it( 'It should create a hash table with length 0 and size 0',() => {

    //create a ht
    let ht = new HashTable();

    expect(ht.size).toEqual(0);
    expect(ht.length).toEqual(0);

  });


});
