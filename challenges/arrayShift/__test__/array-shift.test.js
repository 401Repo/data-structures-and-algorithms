'use strict';

let arrayshifter = require('../array-shift.js');

describe('Testing my shift array function', () => {
    it('It should take an array and an input and place the input in the middle', () => {

        //create an array
        let arr = [1,2,3,4];

        expect(arrayshifter.arrayshifter(arr, 5)).toEqual([1,2,5,3,4]);
    })

});