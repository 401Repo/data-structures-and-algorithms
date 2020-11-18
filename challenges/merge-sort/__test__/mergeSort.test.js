'use strict';

const mSort = require('../mergeSort.js');

describe('Validating our merge sort', () => {

  it('We can sort this messed up array', () => {

    let arr1 = [3,65,7,4,8];

    expect(mSort(arr1)).toEqual([3,4,7,8,65]);
  });

  it('We can sort this messed up array of just two elements', () => {

    let arr2 = [8,3];

    expect(mSort(arr2)).toEqual([3,8]);
  });

});