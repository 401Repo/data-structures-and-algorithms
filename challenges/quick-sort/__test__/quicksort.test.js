'use strict';

const quick_Sort = require('../quicksort.js');

describe('Validating our quick sort', () => {

  it('We can sort this messed up array', () => {

    var arr1 = [3, 0, 2, 5, -1, 4, 1 ];

    expect(quick_Sort(arr1)).toEqual([-1, 0, 1, 2, 3, 4, 5]);
  });

});