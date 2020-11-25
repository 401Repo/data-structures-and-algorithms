# Left Join:

I used the help of [this site](https://howtodoinjava.com/java/collections/hashmap/merge-two-hashmaps/) to see what the code looks like in js instead of the example on our instructions.

Left join basically takes in two different hash tables and then makes any keys pairs on the first one to compare to the one on the right making it so that you get back all the left and intersected values on the right to the user.

### Line by line read example:

- first we need our hash table

'use strict';

const HashTable = require('../hash-table/hash-table');

- then we use our fucntion to take in the left and right hash tables and have a placeholder array to save the matches:

function leftJoin(left, right) {
  let output = [];

- we begin a for loop that takes in all the values and the keys of the left

  for (let i = 0; i < left.keysArr.length; i++) {
    let leftKey = left.keysArr[i];
    let leftValue = left.get(left.keysArr[i]);

- and just the right keys

    let rightKey = right.keysObj[left.keysArr[i]];

- when a match happens we push this to the placeholder array together w the left information.

    if (rightKey) { 

      let outputLine = [leftKey, leftValue, rightKey];

      output.push(outputLine);
    }

- when there is no match we keep the left and pass a null for no match

    if (!rightKey) { 

      let outputLine = [leftKey, leftValue, null];

      output.push(outputLine);
    }
  }

- we then return the output.

  return output;
}

module.exports = leftJoin;