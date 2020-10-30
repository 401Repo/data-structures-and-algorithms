'use strict';

const multiBracketValidator = require('../bracket-val.js');

let one = '{I}[love] {[doughtnuts]}  [(and)]   [milk]'; 
let two = '[))))SLEEP{{{{'; 
let three = '{ist h i s{w ork in gy e a h}}';
let four = '[[[is th i s]not'; 

describe('Validating our validator of brackets', () => {

  it('Opening and closing brackets exist in the string', () => {
    expect(multiBracketValidator(one)).toEqual(true);
    expect(multiBracketValidator(three)).toEqual(true);
  });

  it('Can successfully return false if NOT all brackets are balanced and matching', () => {
    expect(multiBracketValidator(two)).toEqual(false);
    expect(multiBracketValidator(four)).toEqual(false);
  });

});