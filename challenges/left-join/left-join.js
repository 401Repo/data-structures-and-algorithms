'use strict';

const HashTable = require('../hash-table/hash-table');

function leftJoin(left, right) {
  let output = [];

  for (let i = 0; i < left.keysArr.length; i++) {
    let leftKey = left.keysArr[i];
    let leftValue = left.get(left.keysArr[i]);
    let rightKey = right.keysObj[left.keysArr[i]];


    if (rightKey) { 

      let outputLine = [leftKey, leftValue, rightKey];

      output.push(outputLine);
    }
    if (!rightKey) { 

      let outputLine = [leftKey, leftValue, null];

      output.push(outputLine);
    }
  }

  return output;
}

module.exports = leftJoin;