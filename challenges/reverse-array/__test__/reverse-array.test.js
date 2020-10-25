'use strict';

let reverseArray = require('../reverse-array.js');

describe('Testing my reverse array function', () => {
    it('It should take an array and reverse it', () => {

        //create a linked list
        let arr = [1,2,3,4,5];

        expect(reverseArray.reverseArray(arr)).toEqual([5, 4, 3, 2, 1]);
    })

});


