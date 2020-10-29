'use strict';

const AnimalShelter = require('../animal-shelter.js');
let newAnimalShelter = new AnimalShelter();


//need cats
let cat = { name: 'Kat', type: 'cat' };
let cat2 = { name: 'Kait', type: 'cat' };

// need dogs
let dog = { name: 'Khal Doggo', type: 'dog' };
let dog2 = { name: 'Wufflez', type: 'dog' };

describe('tests our animal rescue', () => {

  beforeEach(() => {
    newAnimalShelter = new AnimalShelter();
  });

  it('Can a cat to stack', () => {
    newAnimalShelter.enqueue(cat);
    
    expect(newAnimalShelter.catStack[0].type).toEqual('cat');
    expect(newAnimalShelter.catStack[0].name).toEqual('Kat');
  });

  it('Can remove a cat from the stack by type', () => {
    newAnimalShelter.enqueue(cat);
    newAnimalShelter.enqueue(cat2);
    newAnimalShelter.dequeue({type: 'cat'});

    expect(newAnimalShelter.catStack[0].type).toEqual('cat');
    expect(newAnimalShelter.catStack[0].name).toEqual('Kait');
  });

  it('Can add a dog to the stack', () => {
    newAnimalShelter.enqueue(dog);
    
    expect(newAnimalShelter.dogStack[0].type).toEqual('dog');
    expect(newAnimalShelter.dogStack[0].name).toEqual('Khal Doggo');
  });

  it('Can remove a dog from the stack by type', () => {
    newAnimalShelter.enqueue(dog);
    newAnimalShelter.enqueue(dog2);
    newAnimalShelter.dequeue({type: 'dog'});

    expect(newAnimalShelter.dogStack[0].type).toEqual('dog');
    expect(newAnimalShelter.dogStack[0].name).toEqual('Wufflez');
  });

});