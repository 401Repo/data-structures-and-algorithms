'use strict';

const insertionSort = require('../insertion-sort');

describe('Validating our insertion sort', () => {

  it('We can sort this messed up array', () => {

    let arr1 = [3,65,7,4,8];

    expect(insertionSort(arr1)).toEqual([3,4,7,8,65]);
  });

});